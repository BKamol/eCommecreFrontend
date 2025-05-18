import React, { useState } from 'react';
import HorizontalLine from '../HorizontalLine';
import PriceRangeSlider from './PriceRangeSlider';
import ColorSelector from './ColorSelector';
import FiltersLinks from './FiltersLinks';
import SizeSelector from './SizeSelector';
import DressStyleLinks from './DressStyleLinks';

const SettingsPopup = ({
  isOpen,
  settingsHandler,
  selectedColors,
  onColorSelect,
  selectedSize,
  onSizeSelect,
  priceRange,
  onPriceChange,
  onApplyFilters
}) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 w-full flex items-center justify-center bg-black/20">
          <div className="relative w-full h-[100vh] mt-50 bg-white rounded-4xl shadow-xl overflow-auto">
            <div className="px-10 py-6">
              <div className='flex flex-row justify-between items-center mb-4'>
                <p className="text-2xl font-bold">Filters</p>
                <button
                    onClick={settingsHandler}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
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
              <div className='mt-25'></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPopup;