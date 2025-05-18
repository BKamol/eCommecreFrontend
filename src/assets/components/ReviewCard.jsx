import React from 'react'
import StarRating from './StarRating'
import { Ellipsis } from 'lucide-react'

function ReviewCard({rating, author, comment, date, showEllipsis=true}) {
  return (
    <div className='flex flex-col gap-2 p-5 border-[#f0f0f0] border-1 rounded-[25px] min-w-[400px] h-[200px]'>
        <div className="flex flex-row justify-between items-center">
            <StarRating rating={rating} />
            {date && showEllipsis && <Ellipsis color="black" className='opacity-30 cursor-pointer' />}
        </div>
        <div className="flex flex-row gap-2">
            <p className='header-text'>{ author }</p>
            <img src="/images/check-mark.svg" alt="check-mark" className='scale-80' />
        </div>
        <p className='opacity-60'>"{ comment }"</p>
        {date && <p className='opacity-60 pt-4 text-sm'>Posted on {date}</p>}
    </div>
  )
}

export default ReviewCard