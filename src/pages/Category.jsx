import React from 'react'
import { useState } from 'react'
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/category-page-components/Breadcrumb'
import SettingsBlock from '../assets/components/category-page-components/SettingsBlock'
import ItemsGrid from '../assets/components/category-page-components/ItemsGrid'
import SettingsPopup from '../assets/components/category-page-components/SettingsPopup'

const Category = () => {
  const sampleItems = [
    {
      image_url: 'src/assets/images/Jeans.svg',
      item_name: 'Jeans',
      rating: 4.5,
      price: 30,
      discount: 20
    },
    {
      image_url: 'src/assets/images/StripedShirt.svg',
      item_name: 'Shirt',
      rating: 4.2,
      price: 50,
      discount: 10
    },
    {
      image_url: 'src/assets/images/Jeans.svg',
      item_name: 'Jeans',
      rating: 4.5,
      price: 30,
      discount: 20
    },
    {
      image_url: 'src/assets/images/StripedShirt.svg',
      item_name: 'Shirt',
      rating: 4.2,
      price: 50,
      discount: 10
    },
    {
      image_url: 'src/assets/images/Jeans.svg',
      item_name: 'Jeans',
      rating: 4.5,
      price: 30,
      discount: 20
    },
    {
      image_url: 'src/assets/images/StripedShirt.svg',
      item_name: 'Shirt',
      rating: 4.2,
      price: 50,
      discount: 10
    },
    {
      image_url: 'src/assets/images/Jeans.svg',
      item_name: 'Jeans',
      rating: 4.5,
      price: 30,
      discount: 20
    },
    {
      image_url: 'src/assets/images/StripedShirt.svg',
      item_name: 'Shirt',
      rating: 4.2,
      price: 50,
      discount: 10
    },
    {
      image_url: 'src/assets/images/Jeans.svg',
      item_name: 'Jeans',
      rating: 4.5,
      price: 30,
      discount: 20
    },
  ];

  const [settingsOpen, setSettingsOpen] = useState(false);

  const handlePopup = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div>
      <HorizontalLine />
      <Breadcrumb items={[{label: 'Home', href: '/'}, 
                          {label: 'Category', href:'/category'}]} />
      <SettingsBlock settingsHandler={handlePopup} />
      <ItemsGrid items={ sampleItems } />
      <SettingsPopup isOpen={ settingsOpen } settingsHandler={handlePopup} />
    </div>
  )
}

export default Category