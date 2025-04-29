import React from 'react'
import StarRating from './StarRating'

function ItemCard({image_url, item_name, rating, price, discount}) {
  const image_src = `${image_url}`;
  return (
    <div className='flex flex-col gap-1 lg:scale-110'>
        <img src={ image_src } alt="Shirt" className='w-[200px] h-[200px] bg-[#f0f0f0] rounded-[25px]' />
        <p className="font-bold">{ item_name }</p>
        <div className='flex flex-row gap-1 items-center'>
            <StarRating rating={ rating } />
            <p className='opacity-60 text-sm'>{ rating }/5</p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <p className='font-bold text-2xl'>${ price }</p>
            {discount && <p className='font-bold text-2xl opacity-40 line-through'>${ price + discount / 100 * price }</p>}
            {discount && <div className='w-[44px] h-[20px] bg-red-200 text-red-500 text-center rounded-[25px] text-[12px]'>-{ discount }%</div>}
        </div>
    </div>
  )
}

export default ItemCard