import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/Breadcrumb'
import ProductImages from '../assets/components/product-detail-page-components/ProductImages'
import ProductDetails from '../assets/components/product-detail-page-components/ProductDetails'
import ReviewsSection from '../assets/components/product-detail-page-components/ReviewsSection'

const ProductDetail = () => {
  const [products, setProducts] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:8000/product/').then(res => setProducts(res.data));
    }, []);
  
    const sampleItems = [
    {
      id: 1,
      name: 'Data loading error',
      rating: 4.5,
      price: 30,
      discount: 20,
      colors: [
        {name: "blue"},
        {name: "green"},
        {name: "red"}
      ],
      sizes: [
        {name: "Small"},
        {name: "Medium"},
        {name: "Large"}
      ],
      images: [
        {url: 'src/assets/images/Jeans.svg'},
        {url: 'src/assets/images/Jeans.svg'},
        {url: 'src/assets/images/Jeans.svg'},
      ],
    }
  ];

  let item = sampleItems[0];
  const {productId} = useParams();
  if (products)
    item = products.find((item) => String(item.id) === productId);
  

  return (
    <div>
      <HorizontalLine />
      <Breadcrumb items={[{label: 'Home', href: '/'}, 
                          {label: 'Product Detail', href:'/productDetail'}]} />
      <div className="flex flex-col px-10 lg:px-16 mt-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <ProductImages images={item.images.map((image) => { return '/images/'+image.url.split('/').pop() }) } />
          <ProductDetails 
            title={item.name} 
            rating={item.rating} 
            price={item.price} 
            discount={item.discount} />
        </div>
        <ReviewsSection />
      </div>
    </div>
  )
}

export default ProductDetail