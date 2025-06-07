from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db


router = APIRouter(prefix="/products", tags=["products"])

@router.post("/", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    db_product = models.Product(
        name=product.name,
        rating=product.rating,
        price=product.price,
        discount=product.discount
    )

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    for color in product.colors:
        db_color = models.ProductColor(**color.dict(), product_id=db_product.id)
        db.add(db_color)

    for size in product.sizes:
        db_size = models.ProductSize(**size.dict(), product_id=db_product.id)
        db.add(db_size)

    for image in product.images:
        db_image = models.ProductImage(**image.dict(), product_id=db_product.id)
        db.add(db_image)

    db.commit()
    return db_product


@router.get("/{product_Id}", response_model=schemas.Product)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
