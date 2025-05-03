import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function FiltersLinks() {
  return (
    <div className='flex flex-col gap-2 mb-4'>
        <Link to="/category" className='flex flex-row items-center justify-between opacity-60'>
            <p>T-shirts</p>
            <ChevronRight />
        </Link>
        <Link to="/category" className='flex flex-row items-center justify-between opacity-60'>
            <p>Shorts</p>
            <ChevronRight />
        </Link>
        <Link to="/category" className='flex flex-row items-center justify-between opacity-60'>
            <p>Shirts</p>
            <ChevronRight />
        </Link>
        <Link to="/category" className='flex flex-row items-center justify-between opacity-60'>
            <p>Hoodie</p>
            <ChevronRight />
        </Link>
        <Link to="/category" className='flex flex-row items-center justify-between opacity-60'>
            <p>Jeans</p>
            <ChevronRight />
        </Link>
    </div>
  )
}

export default FiltersLinks