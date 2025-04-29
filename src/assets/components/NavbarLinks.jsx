import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NavbarLinks = () => {
  return (
    <div className='flex-row gap-4 lg:gap-8 hidden sm:flex text-base'>
        <div className='flex flex-row gap-1'>
        <Link to='category'>Shop</Link>
        <ChevronDown color="#000000" className="w-4 h-6 px-0" />
        </div>
        <Link to='category'>On Sale</Link>
        <Link to='category'>New Arrivals</Link>
        <Link to='category'>Brands</Link>
    </div>
  )
}

export default NavbarLinks