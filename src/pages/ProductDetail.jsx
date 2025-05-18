import React from 'react'
import { useParams } from 'react-router-dom';
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/Breadcrumb'
import ProductImages from '../assets/components/product-detail-page-components/ProductImages'
import ProductDetails from '../assets/components/product-detail-page-components/ProductDetails'
import ReviewsSection from '../assets/components/product-detail-page-components/ReviewsSection'

const ProductDetail = () => {
  const sampleItems = [
  {
    item_id: 1,
    image_urls: [
      '/images/Jeans.svg',
      '/images/Jeans.svg',
      '/images/StripedShirt.svg',
    ],
    item_name: 'Classic Blue Jeans',
    rating: 4.5,
    price: 30,
    discount: 20,
    colors: ['blue', 'black', 'gray'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  },
  {
    item_id: 2,
    image_urls: [
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
    ],
    item_name: 'Striped Casual Shirt',
    rating: 4.2,
    price: 50,
    discount: 10,
    colors: ['blue', 'red', 'white'],
    sizes: ['X-Small', 'Small', 'Medium'],
  },
  {
    item_id: 3,
    image_urls: [
      '/images/Jeans.svg',
      '/images/Jeans.svg',
      '/images/Jeans.svg',
    ],
    item_name: 'Black Skinny Jeans',
    rating: 4.3,
    price: 35,
    discount: 15,
    colors: ['black', 'gray'],
    sizes: ['XX-Small', 'X-Small', 'Small', 'Medium'],
  },
  {
    item_id: 4,
    image_urls: [
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
    ],
    item_name: 'Pink Summer Shirt',
    rating: 4.7,
    price: 45,
    discount: 5,
    colors: ['pink', 'white'],
    sizes: ['Medium', 'Large', 'X-Large'],
  },
  {
    item_id: 5,
    image_urls: [
      '/images/Jeans.svg',
      '/images/Jeans.svg',
      '/images/Jeans.svg',
    ],
    item_name: 'Vintage Washed Jeans',
    rating: 4.6,
    price: 40,
    discount: 10,
    colors: ['blue', 'indigo'],
    sizes: ['Large', 'X-Large', 'XX-Large'],
  },
  {
    item_id: 6,
    image_urls: [
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
    ],
    item_name: 'Green Casual Shirt',
    rating: 4.4,
    price: 55,
    discount: 0,
    colors: ['green', 'white'],
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    item_id: 7,
    image_urls: [
      '/images/Jeans.svg',
      '/images/Jeans.svg',
      '/images/Jeans.svg',
    ],
    item_name: 'Gray Slim Fit Jeans',
    rating: 4.2,
    price: 38,
    discount: 12,
    colors: ['gray', 'black'],
    sizes: ['X-Small', 'Small', 'Medium'],
  },
  {
    item_id: 8,
    image_urls: [
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
      '/images/StripedShirt.svg',
    ],
    item_name: 'Red Checkered Shirt',
    rating: 4.8,
    price: 60,
    discount: 15,
    colors: ['red', 'black'],
    sizes: ['Medium', 'Large', 'X-Large'],
  },
  {
    item_id: 9,
    image_urls: [
      '/images/Jeans.svg',
      '/images/Jeans.svg',
      '/images/Jeans.svg',
    ],
    item_name: 'Dark Indigo Jeans',
    rating: 4.5,
    price: 42,
    discount: 8,
    colors: ['indigo', 'blue'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  }
  ];

  const {productId} = useParams();
  const item = sampleItems.find((item) => String(item.item_id) === productId);

  return (
    <div>
      <HorizontalLine />
      <Breadcrumb items={[{label: 'Home', href: '/'}, 
                          {label: 'Product Detail', href:'/productDetail'}]} />
      <div className="flex flex-col px-10 lg:px-16 mt-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <ProductImages images={item.image_urls} />
          <ProductDetails 
            title={item.item_name} 
            rating={item.rating} 
            price={item.price} 
            discount={item.rating} />
        </div>
        <ReviewsSection />
      </div>
    </div>
  )
}

export default ProductDetail