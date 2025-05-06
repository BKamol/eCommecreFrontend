import React from 'react'
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/Breadcrumb'
import ProductImages from '../assets/components/product-detail-page-components/ProductImages'
import ProductDetails from '../assets/components/product-detail-page-components/ProductDetails'
import ReviewsSection from '../assets/components/product-detail-page-components/ReviewsSection'

const ProductDetail = () => {
  return (
    <div>
      <HorizontalLine />
      <Breadcrumb items={[{label: 'Home', href: '/'}, 
                          {label: 'Product Detail', href:'/productDetail'}]} />
      <div className="flex flex-col px-10 lg:px-16 mt-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <ProductImages />
          <ProductDetails title={"Some product"} rating={4} price={200} discount={20} />
        </div>
        <ReviewsSection />
      </div>
    </div>
  )
}

export default ProductDetail