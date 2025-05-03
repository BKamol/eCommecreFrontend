import React from 'react'
import ItemCard from '../ItemCard'
import { Link } from 'react-router-dom'

function TopSellingBlock() {
  return (
    <div className='flex flex-col pt-10 pb-10 px-10 lg:px-16'>
        <p className='header-text text-center text-4xl lg:text-5xl pb-2'>TOP SELLING</p>
        <div className="flex flex-row gap-4 overflow-hidden py-8 justify-between">
            <ItemCard image_url={'src/assets/images/Shirt.svg'}
                    item_name={"T-Shirt"} 
                    rating={3.5} 
                    price={240} 
                    discount={20} />
            <ItemCard image_url={'src/assets/images/Shirt.svg'} 
                    item_name={"T-Shirt"} 
                    rating={3.5} 
                    price={240} 
                    discount={20} />
            <ItemCard image_url={'src/assets/images/Shirt.svg'} 
                    item_name={"T-Shirt"} 
                    rating={3.5} 
                    price={240} 
                    discount={20} />
            <ItemCard image_url={'src/assets/images/Shirt.svg'} 
                    item_name={"T-Shirt"} 
                    rating={3.5} 
                    price={240} 
                    discount={20} />
        </div>
        <div className='flex justify-center pt-2'>
        <Link to='category' className='w-full sm:w-60 h-[50px] border-[#f0f0f0] hover:bg-[#f0f0f0] border-1 rounded-[25px] cursor-pointer text-center flex items-center justify-center'>
                <p>View All</p>
        </Link>
        </div>
    </div>
  )
}

export default TopSellingBlock