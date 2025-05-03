import React, { useState, useRef, useEffect } from 'react';
import HorizontalLine from '../HorizontalLine';

const PriceRangeSlider = ({ min = 0, max = 300, onChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [activeThumb, setActiveThumb] = useState(null);
  const sliderRef = useRef(null);

  // Calculate percentage positions
  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  const handleMouseDown = (thumb) => {
    setActiveThumb(thumb);
  };

  const handleMouseMove = (e) => {
    if (!activeThumb || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const newValue = Math.round(min + position * (max - min));

    if (activeThumb === 'min') {
      const clampedValue = Math.min(newValue, maxValue - 1);
      setMinValue(clampedValue);
    } else {
      const clampedValue = Math.max(newValue, minValue + 1);
      setMaxValue(clampedValue);
    }
  };

  const handleMouseUp = () => {
    setActiveThumb(null);
  };

  // Add event listeners when dragging
  useEffect(() => {
    if (activeThumb) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [activeThumb, minValue, maxValue]);

  // Call onChange when values change
  useEffect(() => {
    if (onChange) {
      onChange({ min: minValue, max: maxValue });
    }
  }, [minValue, maxValue, onChange]);

  return (
    <div className="w-full flex flex-col gap-6">
      <p className="font-bold text-2xl">Price</p>

      <div 
        ref={sliderRef}
        className="relative h-1.5 w-full bg-gray-200 rounded-full"
      >
        {/* Background track */}
        <div className="absolute h-full bg-gray-300 rounded-full" style={{ width: '100%' }}></div>
        
        {/* Active range */}
        <div 
          className="absolute h-full bg-black rounded-full"
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        ></div>
        
        {/* Min thumb */}
        <div
          className="absolute flex items-center top-1/2 w-5 h-5 bg-black rounded-full shadow-md cursor-pointer"
          style={{ left: `${minPercent}%`, transform: 'translate(-50%, -50%)' }}
          onMouseDown={() => handleMouseDown('min')}
        >
            <span className="pt-15 text-lg">${minValue}</span>
        </div>
        
        {/* Max thumb */}
        <div
          className="absolute flex items-center top-1/2 w-5 h-5 bg-black rounded-full shadow-md cursor-pointer"
          style={{ left: `${maxPercent}%`, transform: 'translate(-50%, -50%)' }}
          onMouseDown={() => handleMouseDown('max')}
        >
            <span className="pt-15 text-lg">${maxValue}</span>
        </div>
      </div>
      <HorizontalLine applyPadding={false} mb={4} mt={10}/>
    </div>
  );
};

export default PriceRangeSlider;