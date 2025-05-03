import React, { useState } from 'react';

const SizeSelector = ({ onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  
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

  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-bold">Size</p>
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
    </div>
  );
};

export default SizeSelector;