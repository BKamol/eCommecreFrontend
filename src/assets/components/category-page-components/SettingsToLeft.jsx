import React, { useState } from 'react';
import HorizontalLine from '../HorizontalLine';
import PriceRangeSlider from './PriceRangeSlider';
import ColorSelector from './ColorSelector';
import FiltersLinks from './FiltersLinks';
import SizeSelector from './SizeSelector';
import DressStyleLinks from './DressStyleLinks';
import { SlidersVertical } from 'lucide-react';

function SettingsToLeft({
  selectedColors,
  onColorSelect,
  selectedSize,
  onSizeSelect,
  priceRange,
  onPriceChange,
  onApplyFilters
}) {
  return (
    <div className="relative my-4 hidden md:flex max-w-[280px] xl:max-w-[290px] bg-white rounded-4xl border-1 border-[#f0f0f0]">
        {/* Content here */}
        <div className="px-10 py-6">
            <div className='flex flex-row justify-between items-center mb-4'>
            <p className="text-2xl font-bold">Filters</p>
            <SlidersVertical size={18} className='opacity-60' />
            </div>
            <HorizontalLine applyPadding={false} mb={4}/>
            <FiltersLinks />
            <HorizontalLine applyPadding={false} mb={4}/>
            <PriceRangeSlider 
                minValue={priceRange.min}
                maxValue={priceRange.max}
                onChange={onPriceChange} 
            />
            <ColorSelector 
              selectedColors={selectedColors} 
              onColorSelect={onColorSelect} 
            />
            <SizeSelector 
              selectedSize={selectedSize} 
              onSizeSelect={onSizeSelect} 
            />
            <DressStyleLinks />
            <button onClick={onApplyFilters} className="w-full py-2 mt-4 text-center text-white bg-black rounded-[25px] cursor-pointer">
            Apply Filter
            </button>
        </div>
    </div>
  )
}

export default SettingsToLeft