from typing import List, Optional
from pydantic import BaseModel, validator
from sqlmodel import SQLModel, Field, Relationship
from passlib.context import CryptContext
from datetime import datetime, date


class Product(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str
    rating: float = Field(default=0.0, ge=0.0, le=5.0)
    price: float = Field(default=0.0, ge=0.0)
    discount: int | None = Field(default=None, ge=0, le=100)

    colors: List["Color"] = Relationship(back_populates="product")
    sizes: List["Size"] = Relationship(back_populates="product")
    images: List["Image"] = Relationship(back_populates="product")

    details: List["ProductDetail"] = Relationship(back_populates="product")
    faqs: List["FAQ"] = Relationship(back_populates="product")
    reviews: List["Review"] = Relationship(back_populates="product")

class ProductDetail(SQLModel, table=True):
    id: int = Field(primary_key=True)
    product_id: int = Field(foreign_key="product.id")
    details: str  # Detailed description
    characteristics: str  # Technical specifications
    
    product: Product = Relationship(back_populates="details")

class FAQ(SQLModel, table=True):
    id: int = Field(primary_key=True)
    product_id: int = Field(foreign_key="product.id")
    question: str
    answer: str
    
    product: Product = Relationship(back_populates="faqs")

class Review(SQLModel, table=True):
    id: int = Field(primary_key=True)
    product_id: int = Field(foreign_key="product.id")
    rating: float = Field(ge=0.0, le=5.0)
    date: datetime = Field(default_factory=datetime.utcnow)
    author_username: str
    comment: str
    
    product: Product = Relationship(back_populates="reviews")

class Color(SQLModel, table=True):
    id: int| None = Field(default=None, primary_key=True)
    name: str
    product_id: int = Field(foreign_key="product.id")

    product: Product = Relationship(back_populates="colors")


class Size(SQLModel, table=True):
    id: int| None = Field(default=None, primary_key=True)
    name: str
    product_id: int = Field(foreign_key="product.id")

    product: Product = Relationship(back_populates="sizes")


class Image(SQLModel, table=True):
    id: int| None = Field(default=None, primary_key=True)
    url: str
    product_id: int = Field(foreign_key="product.id")

    product: Product = Relationship(back_populates="images")


class ColorCreate(SQLModel):
    name: str


class SizeCreate(SQLModel):
    name: str


class ImageCreate(SQLModel):
    url: str


class ProductCreate(SQLModel):
    name: str
    price: float
    discount: float = 0.0
    rating: float = 0.0
    colors: List[ColorCreate]
    sizes: List[SizeCreate]
    images: List[ImageCreate]


class ProductView(SQLModel):
    id: int
    name: str
    rating: float
    price: float
    discount: int | None = None

    colors: List["ColorCreate"]
    sizes: List["SizeCreate"]
    images: List["ImageCreate"]


class ProductDetailCreate(BaseModel):
    details: str
    characteristics: str

class FAQCreate(BaseModel):
    question: str
    answer: str

class ReviewCreate(BaseModel):
    rating: float = Field(..., ge=0, le=5)
    author_username: str
    comment: str
    
    @validator('rating')
    def round_rating(cls, v):
        return round(v, 1)
