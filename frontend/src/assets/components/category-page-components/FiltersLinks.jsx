import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

function FiltersLinks() {
    const [searchParams, setSearchParams] = useSearchParams();
    const style = searchParams.get('style') || 'All';

  return (
    <div className='flex flex-col gap-2 mb-4'>
        <Link to={`/category?style=${style}&kind=T-shirts`} className='flex flex-row items-center justify-between opacity-60'>
            <p>T-shirts</p>
            <ChevronRight />
        </Link>
        <Link to={`/category?style=${style}&kind=Shorts`} className='flex flex-row items-center justify-between opacity-60'>
            <p>Shorts</p>
            <ChevronRight />
        </Link>
        <Link to={`/category?style=${style}&kind=Shirts`} className='flex flex-row items-center justify-between opacity-60'>
            <p>Shirts</p>
            <ChevronRight />
        </Link>
        <Link to={`/category?style=${style}&kind=Hoodie`} className='flex flex-row items-center justify-between opacity-60'>
            <p>Hoodie</p>
            <ChevronRight />
        </Link>
        <Link to={`/category?style=${style}&kind=Jeans`} className='flex flex-row items-center justify-between opacity-60'>
            <p>Jeans</p>
            <ChevronRight />
        </Link>
    </div>
  )
}

export default FiltersLinks