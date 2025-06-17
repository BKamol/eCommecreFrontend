import React, { useState, useRef, useEffect } from 'react';
import { SlidersVertical, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function SettingsBlock({ settingsHandler, style = "All", sortMethod, onSortChange }) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (method) => {
    onSortChange(method);
    setIsSortOpen(false);
  };

  return (
    <div className='flex flex-row g-2 py-4 justify-between items-center'>
      <p className='text-3xl font-bold'>{style}</p>
      <div className="flex flex-row gap-4 items-center">
        <p className='text-sm opacity-60'>Showing 1-10 of 100 Products</p>

        <div className='hidden lg:flex flex-row gap-1 relative' ref={sortRef}>
          <p className='text-sm opacity-60'>Sort by: </p>
          <p className='text-sm font-bold flex items-center'>
            {sortMethod}
            {
              !isSortOpen &&
              <ChevronDown
              size={20}
              className="ml-1 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsSortOpen(!isSortOpen);
              }}
              />
            }
            {
              isSortOpen &&
              <ChevronUp
              size={20}
              className="ml-1 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsSortOpen(!isSortOpen);
              }}
              />
            }
          </p>

          {isSortOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-[25px] p-2 z-50 w-40">
              {["Default", "Price: Low to High", "Price: High to Low", "Discount: Low to High", "Discount: High to Low"].map((method) => (
                <button
                  key={method}
                  onClick={() => handleSortSelect(method)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-[25px] cursor-pointer"
                >
                  {method}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={settingsHandler}
        className="flex items-center justify-center bg-[#f0f0f0] rounded-full w-8 h-8 cursor-pointer md:hidden"
      >
        <SlidersVertical size={18} />
      </button>
    </div>
  );
}

export default SettingsBlock;