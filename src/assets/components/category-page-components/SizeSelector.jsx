import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { GiButtonFinger } from 'react-icons/gi';
import HorizontalLine from '../HorizontalLine';

const SizeSelector = ({ onSizeSelect, showTitle=true }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [visible, setVisible] = useState(true);
  
  const sizes = [
    'XX-Small',
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
    '4X-Large'
  ];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    if (onSizeSelect) {
      onSizeSelect(size);
    }
  };

  const handleVisibility = () => {
    setVisible(!visible);
  }

  return (
    <div className={`flex flex-col gap-4 mb-4 ${!visible ? 'mb-6' : ''}`}>
      {
        showTitle && 
        <div className='flex flex-row justify-between'>
          <p className="text-2xl font-bold">Size</p>
          {visible && <button onClick={handleVisibility}><ChevronUp /></button>}
          {!visible && <button onClick={handleVisibility}><ChevronDown /></button>}
        </div>
      }
      
      
      {visible && 
      <>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <div key={size} className="flex items-center">
            <input
              type="radio"
              id={size}
              name="size-selection"
              value={size}
              checked={selectedSize === size}
              onChange={() => handleSizeSelect(size)}
              className="hidden"
            />
            <label
              htmlFor={size}
              className={`px-4 py-2 border rounded-[25px] cursor-pointer transition-all duration-200
                ${selectedSize === size
                  ? 'bg-black text-white border-black'
                  : 'bg-[#f0f0f0] text-gray-600 border-[#f0f0f0] hover:border-gray-500'}`}
            >
              {size}
            </label>
          </div>
        ))}
      </div>
      <HorizontalLine applyPadding={false} mt={2} />
      </>
      }

    </div>
  );
};

export default SizeSelector;