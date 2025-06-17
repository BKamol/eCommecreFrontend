import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReviewCard from '../ReviewCard';

function HappyCustomersBlock() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('right');
  
  const reviews = [
    { rating: 1, author: 'Author N.', comment: 'Some quite long comment...', date: 'August 14, 2025' },
    { rating: 1.5, author: 'Author K.', comment: 'Some quite long comment...', date: 'August 15, 2025' },
    { rating: 2, author: 'Author N.', comment: 'Some quite long comment...', date: 'August 14, 2025' },
    { rating: 2.5, author: 'Author K.', comment: 'Some quite long comment...', date: 'August 15, 2025' },
    { rating: 3, author: 'Author K.', comment: 'Some quite long comment...', date: 'August 15, 2025' },
    { rating: 3.5, author: 'Author N.', comment: 'Some quite long comment...', date: 'August 14, 2025' },
    { rating: 4, author: 'Author K.', comment: 'Some quite long comment...', date: 'August 15, 2025' },
    { rating: 4.5, author: 'Author N.', comment: 'Some quite long comment...', date: 'August 14, 2025' },
    { rating: 5, author: 'Author K.', comment: 'Some quite long comment...', date: 'August 15, 2025' },
    { rating: 5, author: 'Author K.', comment: 'Some quite long comment...', date: 'August 15, 2025' },
  ];

  const cardsToShow = 5;
  
  const nextSlide = () => {
    setTransitionDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setTransitionDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < cardsToShow; i++) {
      const reviewIndex = (currentIndex + i) % reviews.length;
      visibleReviews.push(reviews[reviewIndex]);
    }
    return visibleReviews;
  };

  return (
    <div className='flex gap-8 flex-col py-20 overflow-hidden'>
      <div className="flex flex-row px-10 lg:px-16 items-center justify-between text-4xl lg:text-5xl">
        <p className='header-text'>OUR HAPPY CUSTOMERS</p>
        <div className="flex flex-row gap-2">
          <button className='cursor-pointer' onClick={prevSlide}>
            <ArrowLeft />
          </button>
          <button className='cursor-pointer' onClick={nextSlide}>
            <ArrowRight />
          </button>
        </div>
      </div>


      <div className="relative h-60 overflow-hidden">
        <div 
          className={`flex flex-row justify-center gap-4 absolute w-full transition-transform duration-500 ease-in-out ${
            transitionDirection === 'right' ? 'translate-x-0' : 'translate-x-0'
          }`}
          key={currentIndex}
        >
          {getVisibleReviews().map((review, index) => (
            <div 
              className={`transition-all duration-500 ease-in-out ${
                transitionDirection === 'right' 
                  ? 'animate-slide-in-right' 
                  : 'animate-slide-in-left'
              }`}
              key={`${currentIndex}-${index}`}
            >
              <ReviewCard 
                rating={review.rating} 
                author={review.author} 
                comment={review.comment} 
                date={review.date}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default HappyCustomersBlock;