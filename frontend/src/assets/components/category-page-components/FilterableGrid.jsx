import React, { useState, useEffect } from 'react'
import SettingsBlock from './SettingsBlock'
import ItemsGrid from './ItemsGrid'
import SettingsPopup from './SettingsPopup'
import SettingsToLeft from './SettingsToLeft'
import { fetchProducts, clearCache } from './utilities';
import { useSearchParams } from 'react-router-dom';


function FilterableGrid() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const style = searchParams.get('style') || 'All';
  const kind = searchParams.get('kind') || 'All';
  const searchQuery = searchParams.get('q') || 'All';
  

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

  const [settingsOpen, setSettingsOpen] = useState(false);

  const handlePopup = () => {
    setSettingsOpen(!settingsOpen);
  };

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [priceRange, setPriceRange] = useState({min: 0, max: 900});
  const [sortMethod, setSortMethod] = useState("Default");

  const [activeFilters, setActiveFilters] = useState({
    colors: [],
    size: null,
    priceRange: {min: 0, max: 900}
  })

  const applyFilters = () => {
    setActiveFilters({
      colors: selectedColors,
      size: selectedSize,
      priceRange: priceRange
    });
    setSettingsOpen(false);
  }

  let filteredItems = null;

  if (!(products == null)) {
      filteredItems = products.filter(item => {
      return (
        item.price >= activeFilters.priceRange.min &&
        item.price <= activeFilters.priceRange.max &&
        (activeFilters.colors.length === 0 || 
          item.colors.some(color => activeFilters.colors.includes(color.name))) &&
        (!activeFilters.size || item.sizes.some(size => activeFilters.size === size.name)) &&
        (kind === 'All' || item.details[0].kind === kind) && (style === 'All' || item.details[0].style === style) &&
        (searchQuery === 'All' || item.name.includes(searchQuery))
      );
    });
  } else {
      filteredItems = sampleItems.filter(item => {
        return (
          item.price >= activeFilters.priceRange.min &&
          item.price <= activeFilters.priceRange.max &&
          (activeFilters.colors.length === 0 || 
            item.colors.some(color => activeFilters.colors.includes(color.name))) &&
          (!activeFilters.size || item.sizes.includes({name: activeFilters.size}))
        );
      });
  }

  const sortMethodsLambdas = {
    "Default": () => {},
    "Price: Low to High": (a, b) => a.price - b.price,
    "Price: High to Low": (a, b) => b.price - a.price,
    "Discount: Low to High": (a, b) => a.discount - b.discount,
    "Discount: High to Low": (a, b) => b.discount - a.discount
  };
  if (sortMethod != "Default") {
    filteredItems.sort(sortMethodsLambdas[sortMethod]);
  }

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
          <SettingsBlock
            settingsHandler={handlePopup}
            style={style}
            sortMethod={sortMethod}
            onSortChange={setSortMethod}
          />
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