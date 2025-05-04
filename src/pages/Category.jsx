import React from 'react'
import { useState } from 'react'
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/category-page-components/Breadcrumb'
import SettingsBlock from '../assets/components/category-page-components/SettingsBlock'
import ItemsGrid from '../assets/components/category-page-components/ItemsGrid'
import SettingsPopup from '../assets/components/category-page-components/SettingsPopup'
import SettingsToLeft from '../assets/components/category-page-components/SettingsToLeft'

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
      <div className='flex flex-row gap-4 px-10 lg:px-16 justify-between'>
        <SettingsToLeft />
        <div className='flex flex-col'>
          <SettingsBlock settingsHandler={handlePopup} />
          <ItemsGrid items={ sampleItems } />
          <SettingsPopup isOpen={ settingsOpen } settingsHandler={handlePopup} />
        </div>
      </div>
      
    </div>
  )
}

export default Category