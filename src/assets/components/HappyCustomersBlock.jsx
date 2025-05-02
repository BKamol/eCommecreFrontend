import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReviewCard from './ReviewCard';

function HappyCustomersBlock() {
  return (
    <div className='flex gap-8 flex-col py-20'>
        <div className="flex flex-row px-10 lg:px-16 items-center justify-between text-4xl lg:text-5xl">
            <p className='header-text '>OUR HAPPY CUSTOMERS</p>
            <div className="flex flex-row gap-2">
              <button className='cursor-pointer'>
                <ArrowLeft />
              </button>
              <button className='cursor-pointer'>
                <ArrowRight />
              </button>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-2 overflow-hidden">
          <ReviewCard rating={5} 
                      author={'Author N.'} 
                      comment={'Some quite long comment...'} 
                      date={"August 14, 2025"}/>
          <ReviewCard rating={4} 
                      author={'Author K.'} 
                      comment={'Some quite long comment...'} 
                      date={"August 15, 2025"}/>
          <ReviewCard rating={3.5} 
                      author={'Author N.'} 
                      comment={'Some quite long comment...'} 
                      date={"August 14, 2025"}/>
          <ReviewCard rating={4} 
                      author={'Author K.'} 
                      comment={'Some quite long comment...'} 
                      date={"August 15, 2025"}/>
          <ReviewCard rating={4} 
                      author={'Author K.'} 
                      comment={'Some quite long comment...'} 
                      date={"August 15, 2025"}/>
        </div>
    </div>
  )
}

export default HappyCustomersBlock