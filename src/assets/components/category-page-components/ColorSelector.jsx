import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import HorizontalLine from '../HorizontalLine';

const ColorSelector = ({ onColorSelect, showTitle=true }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [visible, setVisible] = useState(true);
  
  const colors = [
    { id: 'red', value: 'red', bg: 'bg-red-500', ring: 'border-red-700' },
    { id: 'blue', value: 'blue', bg: 'bg-blue-500', ring: 'border-blue-700' },
    { id: 'green', value: 'green', bg: 'bg-green-500', ring: 'border-green-700' },
    { id: 'yellow', value: 'yellow', bg: 'bg-yellow-400', ring: 'border-yellow-700' },
    { id: 'purple', value: 'purple', bg: 'bg-purple-500', ring: 'border-purple-700' },
    { id: 'pink', value: 'pink', bg: 'bg-pink-500', ring: 'border-pink-700' },
    { id: 'indigo', value: 'indigo', bg: 'bg-indigo-500', ring: 'border-indigo-700' },
    { id: 'gray', value: 'gray', bg: 'bg-gray-500', ring: 'border-gray-700' },
  ];

  const handleColorSelect = (colorValue) => {
    setSelectedColors(prev => {
      const newSelection = prev.includes(colorValue)
        ? prev.filter(c => c !== colorValue) // Remove if already selected
        : [...prev, colorValue]; // Add if not selected
      
      if (onColorSelect) {
        onColorSelect(newSelection); // Pass array of selected colors
      }
      return newSelection;
    });
  };

  const handleVisibility = () => {
    setVisible(!visible);
  }

  return (
    <div className={`flex flex-col gap-4 mb-4 ${!visible ? 'mb-6' : ''}`}>
      {showTitle && 
      <div className='flex flex-row justify-between'>
        <p className="text-2xl font-bold">Colors</p>
        {visible && <button onClick={handleVisibility}><ChevronUp /></button>}
        {!visible && <button onClick={handleVisibility}><ChevronDown /></button>}
      </div>
      }
      
      {visible &&
        <>
        <div className={`flex flex-wrap gap-4`}>
        {colors.map((color) => {
          const isSelected = selectedColors.includes(color.value);
          return (
            <div key={color.id} className="flex flex-col items-center">
              <input
                type="checkbox" // Changed from radio to checkbox
                id={color.id}
                name="color-selection"
                value={color.value}
                checked={isSelected}
                onChange={() => handleColorSelect(color.value)}
                className="hidden"
              />
              <label
                htmlFor={color.id}
                className={`${color.bg} w-10 h-10 rounded-full cursor-pointer border-1 ${color.ring} transition-all duration-200 flex items-center justify-center hover:scale-105
                  ${isSelected ? 'border-2' : ''}`}
                title={color.value}
              >
                {isSelected && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </label>
            </div>
          );
        })}
        </div>
        <HorizontalLine applyPadding={false} mt={2} />
        </>
      }
    </div>
  );
};

export default ColorSelector;