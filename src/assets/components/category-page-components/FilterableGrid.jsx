import React, { useState } from 'react'
import SettingsBlock from './SettingsBlock'
import ItemsGrid from './ItemsGrid'
import SettingsPopup from './SettingsPopup'
import SettingsToLeft from './SettingsToLeft'


function FilterableGrid() {
  const sampleItems = [
  {
    image_url: 'src/assets/images/Jeans.svg',
    item_name: 'Classic Blue Jeans',
    rating: 4.5,
    price: 30,
    discount: 20,
    colors: ['blue', 'black', 'gray'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  },
  {
    image_url: 'src/assets/images/StripedShirt.svg',
    item_name: 'Striped Casual Shirt',
    rating: 4.2,
    price: 50,
    discount: 10,
    colors: ['blue', 'red', 'white'],
    sizes: ['X-Small', 'Small', 'Medium'],
  },
  {
    image_url: 'src/assets/images/Jeans.svg',
    item_name: 'Black Skinny Jeans',
    rating: 4.3,
    price: 35,
    discount: 15,
    colors: ['black', 'gray'],
    sizes: ['XX-Small', 'X-Small', 'Small', 'Medium'],
  },
  {
    image_url: 'src/assets/images/StripedShirt.svg',
    item_name: 'Pink Summer Shirt',
    rating: 4.7,
    price: 45,
    discount: 5,
    colors: ['pink', 'white'],
    sizes: ['Medium', 'Large', 'X-Large'],
  },
  {
    image_url: 'src/assets/images/Jeans.svg',
    item_name: 'Vintage Washed Jeans',
    rating: 4.6,
    price: 40,
    discount: 10,
    colors: ['blue', 'indigo'],
    sizes: ['Large', 'X-Large', 'XX-Large'],
  },
  {
    image_url: 'src/assets/images/StripedShirt.svg',
    item_name: 'Green Casual Shirt',
    rating: 4.4,
    price: 55,
    discount: 0,
    colors: ['green', 'white'],
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    image_url: 'src/assets/images/Jeans.svg',
    item_name: 'Gray Slim Fit Jeans',
    rating: 4.2,
    price: 38,
    discount: 12,
    colors: ['gray', 'black'],
    sizes: ['X-Small', 'Small', 'Medium'],
  },
  {
    image_url: 'src/assets/images/StripedShirt.svg',
    item_name: 'Red Checkered Shirt',
    rating: 4.8,
    price: 60,
    discount: 15,
    colors: ['red', 'black'],
    sizes: ['Medium', 'Large', 'X-Large'],
  },
  {
    image_url: 'src/assets/images/Jeans.svg',
    item_name: 'Dark Indigo Jeans',
    rating: 4.5,
    price: 42,
    discount: 8,
    colors: ['indigo', 'blue'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  }
];

  const [settingsOpen, setSettingsOpen] = useState(false);

  const handlePopup = () => {
    setSettingsOpen(!settingsOpen);
  };

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [priceRange, setPriceRange] = useState({min: 0, max: 300});

  const [activeFilters, setActiveFilters] = useState({
    colors: [],
    size: null,
    priceRange: {min: 0, max: 300}
  })

  const applyFilters = () => {
    setActiveFilters({
      colors: selectedColors,
      size: selectedSize,
      priceRange: priceRange
    });
    setSettingsOpen(false);
  }

  const filteredItems = sampleItems.filter(item => {
    return (
      item.price >= activeFilters.priceRange.min &&
      item.price <= activeFilters.priceRange.max &&
      (activeFilters.colors.length === 0 || 
        item.colors.some(color => activeFilters.colors.includes(color))) &&
      (!activeFilters.size || item.sizes.includes(activeFilters.size))
    );
  });

  return (
    <div className='flex flex-row gap-20 px-10 lg:px-16 justify-between'>
        <SettingsToLeft
          selectedColors={selectedColors}
          onColorSelect={setSelectedColors}
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          onApplyFilters={applyFilters} 
          />
        <div className='flex flex-col flex-1'>
          <SettingsBlock settingsHandler={handlePopup} />
          <ItemsGrid items={ filteredItems } />
          <SettingsPopup
            isOpen={settingsOpen}
            settingsHandler={handlePopup}
            selectedColors={selectedColors}
            onColorSelect={setSelectedColors}
            selectedSize={selectedSize}
            onSizeSelect={setSelectedSize}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            onApplyFilters={applyFilters}
          />
        </div>
    </div>
  )
}

export default FilterableGrid