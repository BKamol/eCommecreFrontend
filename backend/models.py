from typing import List, Optional
from pydantic import BaseModel
from sqlmodel import SQLModel, Field, Relationship
from passlib.context import CryptContext


class Product(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str
    rating: float = Field(default=0.0, ge=0.0, le=5.0)
    price: float = Field(default=0.0, ge=0.0)
    discount: int | None = Field(default=None, ge=0, le=100)

    colors: List["Color"] = Relationship(back_populates="product")
    sizes: List["Size"] = Relationship(back_populates="product")
    images: List["Image"] = Relationship(back_populates="product")


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

