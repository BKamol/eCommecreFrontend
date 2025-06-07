from typing import List, Optional
from sqlmodel import SQLModel, Field, Relationship

# {
#     item_id: 1,
#     image_urls: [
#       'src/assets/images/Jeans.svg',
#       'src/assets/images/CourageShirt.svg',
#       'src/assets/images/FadedJeans.svg',
#       'src/assets/images/StripedShirt.svg',
#       'src/assets/images/LooseShorts.svg',
#       'src/assets/images/VerticalShirt.svg',
#     ],
#     item_name: 'Classic Blue Jeans',
#     rating: 4.5,
#     price: 30,
#     discount: 20,
#     colors: ['blue', 'black', 'gray'],
#     sizes: ['Small', 'Medium', 'Large', 'X-Large'],
# }

#  const colors = [
#     { id: 'red', value: 'red', bg: 'bg-red-500', ring: 'border-red-700' },
#     { id: 'blue', value: 'blue', bg: 'bg-blue-500', ring: 'border-blue-700' },
#     { id: 'green', value: 'green', bg: 'bg-green-500', ring: 'border-green-700' },
#     { id: 'yellow', value: 'yellow', bg: 'bg-yellow-400', ring: 'border-yellow-700' },
#     { id: 'purple', value: 'purple', bg: 'bg-purple-500', ring: 'border-purple-700' },
#     { id: 'pink', value: 'pink', bg: 'bg-pink-500', ring: 'border-pink-700' },
#     { id: 'indigo', value: 'indigo', bg: 'bg-indigo-500', ring: 'border-indigo-700' },
#     { id: 'gray', value: 'gray', bg: 'bg-gray-500', ring: 'border-gray-700' },
#   ];

# const sizes = [
#     'XX-Small',
#     'X-Small',
#     'Small',
#     'Medium',
#     'Large',
#     'X-Large',
#     'XX-Large',
#     '3X-Large',
#     '4X-Large'
#   ];


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
