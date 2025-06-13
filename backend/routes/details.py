from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from typing import List
from ..models import Product, ProductDetail, FAQ, Review, ProductDetailCreate, FAQCreate, ReviewCreate
from ..database import SessionDep
from sqlalchemy.orm import joinedload
from datetime import datetime


router = APIRouter(prefix="/products", tags=["products"])

# Get product details by ID
@router.get("/{product_id}/details", response_model=List[ProductDetail])
def get_product_details(product_id: int, session: SessionDep):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product.details


# Get product FAQs by ID
@router.get("/{product_id}/faqs", response_model=List[FAQ])
def get_product_faqs(product_id: int, session: SessionDep):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product.faqs


# Get product reviews by ID
@router.get("/{product_id}/reviews", response_model=List[Review])
def get_product_reviews(product_id: int, session: SessionDep):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product.reviews


# Combined endpoint to get all product info
@router.get("/{product_id}/full", response_model=dict)
def get_full_product_info(product_id: int, session: SessionDep):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    return {
        "name": product.name,
        "rating": product.rating,
        "price": product.price,
        "discount": product.discount,
        "colors": product.colors,
        "sizes": product.sizes,
        "images": product.images,
        "details": product.details,
        "faqs": product.faqs,
        "reviews": product.reviews,
    }


@router.get("/productsfull/", response_model=List[dict])
def get_full_products_info(session: SessionDep):
    products = session.exec(select(Product)).all()
    
    result = []
    for product in products:
        result.append({
            "id": product.id,
            "name": product.name,
            "rating": product.rating,
            "price": product.price,
            "discount": product.discount,
            "colors": product.colors,
            "sizes": product.sizes,
            "images": product.images,
            "details": product.details,
            "faqs": product.faqs,
            "reviews": product.reviews,
        })
    return result


@router.post(
    "/{product_id}/details",
    response_model=ProductDetail,
    status_code=status.HTTP_201_CREATED
)
def add_product_details(
    product_id: int,
    detail_data: ProductDetailCreate,
    session: SessionDep
):
    # Check if product exists
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found"
        )
    
    # Create new detail entry
    detail = ProductDetail(
        product_id=product_id,
        details=detail_data.details,
        characteristics=detail_data.characteristics,
        kind=detail_data.kind,
        style=detail_data.style
    )
    
    session.add(detail)
    session.commit()
    session.refresh(detail)
    return detail


@router.post(
    "/{product_id}/faqs",
    response_model=FAQ,
    status_code=status.HTTP_201_CREATED
)
def add_product_faq(
    product_id: int,
    faq_data: FAQCreate,  # You'll need to create this Pydantic model
    session: SessionDep
):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    faq = FAQ(
        product_id=product_id,
        question=faq_data.question,
        answer=faq_data.answer
    )
    
    session.add(faq)
    session.commit()
    session.refresh(faq)
    return faq

@router.post(
    "/{product_id}/reviews",
    response_model=Review,
    status_code=status.HTTP_201_CREATED
)
def add_product_review(
    product_id: int,
    review_data: ReviewCreate,
    session: SessionDep
):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Validate rating
    if not 0 <= review_data.rating <= 5:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Rating must be between 0 and 5"
        )
    
    review = Review(
        product_id=product_id,
        rating=review_data.rating,
        author_username=review_data.author_username,
        comment=review_data.comment,
        date=datetime.utcnow()
    )
    
    session.add(review)
    session.commit()
    session.refresh(review)
    
    return review


@router.post(
    "/{product_id}/many_reviews",
    response_model=Review,
    status_code=status.HTTP_201_CREATED
)
def add_product_reviews(
    product_id: int,
    reviews_data: List[ReviewCreate],
    session: SessionDep
):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Validate rating
    for review_data in reviews_data:
        if not 0 <= review_data.rating <= 5:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Rating must be between 0 and 5"
            )
        
        review = Review(
            product_id=product_id,
            rating=review_data.rating,
            author_username=review_data.author_username,
            comment=review_data.comment,
            date=datetime.utcnow()
        )
        
        session.add(review)
        session.commit()
        session.refresh(review)
    
    return review
