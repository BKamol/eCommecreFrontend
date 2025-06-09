from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models
from .database import create_db_and_tables, SessionDep
from sqlmodel import select, join
from sqlalchemy.orm import selectinload
from .routes import auth

app = FastAPI()
app.include_router(auth.router)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


# Enable CORS for React
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/product/", response_model=list[models.ProductView])
def read_products(session: SessionDep):
    products = session.exec(
        select(models.Product)
        .options(
            selectinload(models.Product.colors),
            selectinload(models.Product.sizes),
            selectinload(models.Product.images)
        )
    ).all()
    return products


@app.get("/product/{product_id}", response_model=models.Product)
def read_product(product_id: int, session: SessionDep):
    product = session.exec(
        select(models.Product)
        .where(models.Product.id == product_id)
        .options(
            selectinload(models.Product.colors),
            selectinload(models.Product.sizes),
            selectinload(models.Product.images)
        )
    ).first()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@app.post("/product/", response_model=models.Product)
def create_product(
    product_data: models.ProductCreate,  # Use a dedicated "create" schema
    session: SessionDep
):
    # Create the product
    product = models.Product(
        name=product_data.name,
        price=product_data.price,
        discount=product_data.discount,
        rating=product_data.rating
    )
    
    # Add relationships
    for color in product_data.colors:
        product.colors.append(models.Color(**color.dict()))
    
    for size in product_data.sizes:
        product.sizes.append(models.Size(**size.dict()))
    
    for image in product_data.images:
        product.images.append(models.Image(**image.dict()))
    
    session.add(product)
    session.commit()
    session.refresh(product)
    return product
