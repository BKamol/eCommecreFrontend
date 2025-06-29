import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, SlidersVertical, ChevronUp } from 'lucide-react';
import ReviewCard from '../ReviewCard';
import HorizontalLine from '../HorizontalLine';
import ReviewModal from './ReviewModal';
import { fetchProducts } from '../category-page-components/utilities';

const ReviewsSection = ({description, _reviews, faqs}) => {
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [reviews, setReviews] = useState(_reviews);
    const [activeTab, setActiveTab] = useState('reviews');
    const [showAllReviews, setShowAllReviews] = useState(false);

    const [sortMethod, setSortMethod] = useState('Latest');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef(null);

    useEffect(() => {
      setReviews(_reviews);
    }, [_reviews]);

    const handleReviewSubmit = (newReview) => {
      setReviews([...reviews, newReview]);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
      setIsSortOpen(false);
      }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    let sortedReviews = [...reviews];

    if (sortMethod === "Latest") {
      sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortMethod === "Oldest") {
      sortedReviews.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortMethod === "Highest Rated") {
      sortedReviews.sort((a, b) => b.rating - a.rating);
    } else if (sortMethod === "Lowest Rated") {
      sortedReviews.sort((a, b) => a.rating - b.rating);
    }
    
    return (
      <div className="mt-10">
        <div className="flex border-b mb-6 justify-between lg:px-20">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 font-medium cursor-pointer ${activeTab === 'details' ? 'text-black border-b-2 border-black' : 'text-black opacity-60'}`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-2 font-medium cursor-pointer ${activeTab === 'reviews' ? 'text-black border-b-2 border-black' : 'text-black opacity-60'}`}
          >
            Ratings & Reviews
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-4 py-2 font-medium cursor-pointer ${activeTab === 'faqs' ? 'text-black border-b-2 border-black' : 'text-black opacity-60'}`}
          >
            FAQs
          </button>
        </div>
        
        <div className="mb-8">
          {activeTab === 'details' && (
            <div>
              <p className="text-black opacity-60 mb-4">
                {description ? description : "There is no details for this product"}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black opacity-60">
                <li>100% organic cotton</li>
                <li>Reinforced stitching for durability</li>
                <li>Pre-shrunk fabric</li>
                <li>Machine washable</li>
                <li>Available in multiple colors and sizes</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
                <div className='flex flex-col justify-between gap-4 mb-8'>
                
                    <div className="flex flex-row items-center justify-between gap-4">
                        <p className='font-bold text-2xl flex-1'>All Reviews <span className='font-normal text-lg opacity-60'>({reviews ? reviews.length : 0})</span></p>
                        <button className="flex items-center justify-center bg-[#f0f0f0] rounded-full w-8 h-8 cursor-pointer">
                            <SlidersVertical size={18} />
                        </button>
                        <div>
                            
                        </div>
                        <div ref={sortRef} className="relative hidden lg:flex">
                        <button
                          onClick={() => setIsSortOpen(!isSortOpen)}
                          className="flex flex-row gap-1 items-center justify-center text-sm min-w-[150px] bg-[#f0f0f0] text-black font-semibold py-3 px-4 rounded-[25px] transition-colors cursor-pointer"
                        >
                          {sortMethod}
                          {
                            !isSortOpen && 
                            <ChevronDown size={18} />
                          }
                          {
                            isSortOpen && 
                            <ChevronUp size={18} />
                          }
                        </button>

                        {isSortOpen && (
                          <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-[25px] px-1 py-2 w-48 z-50">
                            {["Latest", "Oldest", "Highest Rated", "Lowest Rated"].map((method) => (
                              <button
                                key={method}
                                onClick={() => {
                                  setSortMethod(method);
                                  setIsSortOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-[25px]"
                              >
                                {method}
                              </button>
                            ))}
                          </div>
                        )}
                        </div>
                        <button onClick={() => setShowReviewModal(true)}
                                className="text-sm min-w-[120px] bg-black text-white py-3 rounded-[25px] transition-colors cursor-pointer">
                            Write a Review
                        </button>
                        {showReviewModal && (
                          <ReviewModal
                            isOpen={showReviewModal}
                            onClose={() => setShowReviewModal(false)}
                            onReviewSubmit={handleReviewSubmit}
                          />
                        )}
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {(showAllReviews ? sortedReviews : sortedReviews.slice(0, 4)).map(review => (
                    <ReviewCard key={review.id}
                                author={review.author_username} 
                                rating={review.rating} 
                                comment={review.comment} 
                                date={review.date.split('T')[0]} />
                    ))}
                    </div>
                </div>
              
                {reviews.length > 4 && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShowAllReviews(!showAllReviews)}
                            className='py-3 border-1 min-w-[190px] border-[#f0f0f0] rounded-[25px] font-medium hover:bg-[#f0f0f0] cursor-pointer'
                            >
                            {showAllReviews ? 'Load Less' : 'Load More Reviews'}
                        </button>
                    </div>
                )}
            </div>
          )}
          
          {activeTab === 'faqs' && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="pb-4">
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-black opacity-60">{faq.answer}</p>
                    <HorizontalLine applyPadding={false} mt={4} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ReviewsSection;