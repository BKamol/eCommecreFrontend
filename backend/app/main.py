from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from .models import (ProductView, Product, ProductCreate,
                     Color, Size, Image, ProductFullCreate, ProductDetail, FAQ, Review)
from .database import create_db_and_tables, SessionDep
from sqlmodel import select, join
from sqlalchemy.orm import selectinload
from .routes import auth, details
from typing import List
from datetime import datetime

app = FastAPI()
app.include_router(auth.router)
app.include_router(details.router)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


# Enable CORS for React
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/product/", response_model=list[ProductView])
def read_products(session: SessionDep):
    products = session.exec(
        select(Product)
        .options(
            selectinload(Product.colors),
            selectinload(Product.sizes),
            selectinload(Product.images)
        )
    ).all()
    return products


@app.get("/product/{product_id}", response_model=Product)
def read_product(product_id: int, session: SessionDep):
    product = session.exec(
        select(Product)
        .where(Product.id == product_id)
        .options(
            selectinload(Product.colors),
            selectinload(Product.sizes),
            selectinload(Product.images)
        )
    ).first()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@app.post("/product/", response_model=Product)
def create_product(
    product_data: ProductCreate,  # Use a dedicated "create" schema
    session: SessionDep
):
    # Create the product
    product = Product(
        name=product_data.name,
        price=product_data.price,
        discount=product_data.discount,
        rating=product_data.rating
    )
    
    # Add relationships
    for color in product_data.colors:
        product.colors.append(Color(**color.dict()))
    
    for size in product_data.sizes:
        product.sizes.append(Size(**size.dict()))
    
    for image in product_data.images:
        product.images.append(Image(**image.dict()))
    
    session.add(product)
    session.commit()
    session.refresh(product)
    return product

@app.post("/product/bulk", response_model=list[Product])
def create_products_bulk(
    *, session: SessionDep,
    products_in: List[ProductFullCreate]
):
    created = []
    for p_in in products_in:
        prod = Product(
            name=p_in.name, price=p_in.price, discount=p_in.discount, rating=p_in.rating
        )

        # Add relationship sub-objects
        prod.colors  = [Color(name=c.name) for c in p_in.colors]
        prod.sizes   = [Size(name=s.name) for s in p_in.sizes]
        prod.images  = [Image(url=i.url) for i in p_in.images]
        prod.details = [ProductDetail(**d.dict()) for d in p_in.details]
        prod.faqs    = [FAQ(**f.dict()) for f in p_in.faqs]
        prod.reviews = [Review(**r.dict()) for r in p_in.reviews]

        session.add(prod)
        created.append(prod)

    session.commit()
    for prod in created:
        session.refresh(prod)

    return created
