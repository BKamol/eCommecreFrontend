import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/Breadcrumb'
import ProductImages from '../assets/components/product-detail-page-components/ProductImages'
import ProductDetails from '../assets/components/product-detail-page-components/ProductDetails'
import ReviewsSection from '../assets/components/product-detail-page-components/ReviewsSection'
import { fetchProducts } from '../assets/components/category-page-components/utilities';
import { useCart } from '../assets/components/cart-page-components/UseCart';

const ProductDetail = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const loadData = async () => {
        setLoading(true);
        const data = await fetchProducts();
        if (data) setProducts(data);
        setLoading(false);
      };
      loadData();
    }, []);

    const sampleItems = [
    {
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
      "details": [
        {
          "product_id": 1,
          "details": "Bad Jeans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "id": 1,
          "characteristics": "Our premium comfort jeans is designed for all-day wear. Made from high-quality materials that are both durable and soft to the touch. 100% organic cotton Reinforced stitching for durability Pre-shrunk fabric Machine washable Available in multiple colors and sizes"
        }
      ],
  "faqs": [
    {
      "answer": "Our product is made from 100% organic cotton for maximum comfort and durability.",
      "id": 1,
      "product_id": 1,
      "question": "What materials are used in this product?"
    },
    {
      "answer": "Machine wash cold with similar colors. Tumble dry low or hang to dry.",
      "id": 2,
      "product_id": 1,
      "question": "How should I care for this item??"
    }
  ],
  "reviews": [
    {
      "product_id": 1,
      "id": 1,
      "date": "2025-06-10T06:51:02.933470",
      "comment": "This is the best product I have ever purchased! Fits perfectly and very comfortable.",
      "rating": 4.5,
      "author_username": "SamanthaD."
    },
    {
      "product_id": 1,
      "id": 2,
      "date": "2025-06-10T06:52:32.779021",
      "comment": "Great quality fabric. The color is exactly as shown. Would recommend!",
      "rating": 4,
      "author_username": "SarahMiller"
    },
    {
      "product_id": 1,
      "id": 3,
      "date": "2025-06-10T06:53:03.878767",
      "comment": "Good product but the sizing runs a bit small. Consider ordering one size up.",
      "rating": 3.5,
      "author_username": "MichaelChen"
    }
  ]
  }
  ];

  let item = sampleItems[0];
  const {productId} = useParams();
  
  if (products) {
    item = products.filter(product => product.id == productId)[0];
  }

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
            discount={item.discount}
            description={item.details ? item.details[0].details : 'Nothing.'}
            colors={item.colors}
            sizes={item.sizes}
            image={item.images ? item.images[0].url : ""} />
        </div>
        <ReviewsSection
          description={item.details.length > 0 ? item.details[0].characteristics : 'Nothing.'}
          _reviews={item.reviews}
          faqs={item.faqs}
          />
      </div>
    </div>
  )
}

export default ProductDetail