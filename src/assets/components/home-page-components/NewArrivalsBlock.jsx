import React from 'react';
import ItemCard from '../ItemCard';
import { Link } from 'react-router-dom';

function NewArrivalsBlock({ items }) {
  return (
    <div className='flex flex-col pt-15 pb-10 px-10 lg:px-16'>
      <p className='header-text text-center text-4xl lg:text-5xl pb-2'>NEW ARRIVALS</p>

      <div className="flex flex-row gap-4 overflow-hidden py-8 justify-between items-center">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item_id={item.id}
            image_url={item.images[0].url}
            item_name={item.name}
            rating={item.rating}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>

      <div className='flex justify-center pt-2'>
        <Link
          to='/category'
          className='w-full sm:w-60 h-[50px] border-[#f0f0f0] hover:bg-[#f0f0f0] border-1 rounded-[25px] cursor-pointer text-center flex items-center justify-center'
        >
          <p>View All</p>
        </Link>
      </div>
    </div>
  );
}

export default NewArrivalsBlock;