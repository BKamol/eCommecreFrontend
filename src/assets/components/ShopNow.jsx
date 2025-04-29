import React from 'react'
import { Link } from 'react-router-dom'

function ShopNow() {
  return (
          <Link to='category' className='w-100 bg-black text-white text-center rounded-[25px] py-3 cursor-pointer sm:w-50'>
            Shop Now
          </Link>
  )
}

export default ShopNow