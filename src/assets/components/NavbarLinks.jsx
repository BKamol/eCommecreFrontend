import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NavbarLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='flex-row gap-4 lg:gap-8 hidden sm:flex text-base relative' ref={dropdownRef}>
      <div className='flex flex-row gap-1 items-center'>
        <Link to='category'>Shop</Link>
        {
          !isOpen && 
          <ChevronDown
          color="#000000"
          className="w-4 h-6 px-0 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        />
        }
        {
          isOpen &&
          <ChevronUp
          color="#000000"
          className="w-4 h-6 px-0 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          />
        }
      </div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-[25px] p-2 z-50">
          <Link to='category?style=All&kind=T-shirts' className="block px-4 py-2 hover:bg-gray-100 rounded-[25px]">T-shirts</Link>
          <Link to='category?style=All&kind=Shorts' className="block px-4 py-2 hover:bg-gray-100 rounded-[25px]">Shorts</Link>
          <Link to='category?style=All&kind=Shirts' className="block px-4 py-2 hover:bg-gray-100 rounded-[25px]">Shirts</Link>
          <Link to='category?style=All&kind=Hoodie' className="block px-4 py-2 hover:bg-gray-100 rounded-[25px]">Hoodie</Link>
          <Link to='category?style=All&kind=Jeans' className="block px-4 py-2 hover:bg-gray-100 rounded-[25px]">Jeans</Link>
        </div>
      )}

      <Link to='category'>On Sale</Link>
      <Link to='category'>New Arrivals</Link>
      <Link to='category'>Brands</Link>
    </div>
  );
};

export default NavbarLinks;