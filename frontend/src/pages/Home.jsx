import React, { useState, useEffect } from 'react'
import MainBlock from '../assets/components/home-page-components/MainBlock'
import NewArrivalsBlock from '../assets/components/home-page-components/NewArrivalsBlock'
import HorizontalLine from '../assets/components/HorizontalLine'
import TopSellingBlock from '../assets/components/home-page-components/TopSellingBlock'
import DressStyleBlock from '../assets/components/home-page-components/DressStyleBlock'
import HappyCustomersBlock from '../assets/components/home-page-components/HappyCustomersBlock'
import { fetchProducts } from '../assets/components/category-page-components/utilities'

const Home = () => {
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
      id: 1,
      name: 'Loading',
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

  return (
    <div>
      <MainBlock />
      <NewArrivalsBlock items={(products || sampleItems).slice(0, 4)} />
      <HorizontalLine />
      <TopSellingBlock items={(products || sampleItems).slice(4, 8)} />
      <DressStyleBlock />
      <HappyCustomersBlock />
    </div>
  )
}

export default Home