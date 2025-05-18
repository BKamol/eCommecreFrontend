import React from 'react';
import { useState } from 'react';
import { ChevronDown, SlidersVertical } from 'lucide-react';
import ReviewCard from '../ReviewCard';
import HorizontalLine from '../HorizontalLine';

const ReviewsSection = () => {
    const [activeTab, setActiveTab] = useState('reviews');
    const [showAllReviews, setShowAllReviews] = useState(false);
    
    const reviews = [
      { id: 1, author: 'Samantha D.', rating: 4.5, date: '2023-09-14', comment: 'This is the best product I have ever purchased! Fits perfectly and very comfortable.' },
      { id: 2, author: 'Sarah Miller', rating: 4, date: '2023-09-28', comment: 'Great quality fabric. The color is exactly as shown. Would recommend!' },
      { id: 3, author: 'Michael Chen', rating: 3, date: '2023-09-10', comment: 'Good product but the sizing runs a bit small. Consider ordering one size up.' },
      { id: 4, author: 'Samantha D.', rating: 4.5, date: '2023-09-14', comment: 'This is the best product I have ever purchased! Fits perfectly and very comfortable.' },
      { id: 5, author: 'Sarah Miller', rating: 4, date: '2023-09-28', comment: 'Great quality fabric. The color is exactly as shown. Would recommend!' },
      { id: 6, author: 'Michael Chen', rating: 3, date: '2023-09-10', comment: 'Good product but the sizing runs a bit small. Consider ordering one size up.' },
    ];
    
    const faqs = [
      { question: 'What materials are used in this product?', answer: 'Our product is made from 100% organic cotton for maximum comfort and durability.' },
      { question: 'How should I care for this item?', answer: 'Machine wash cold with similar colors. Tumble dry low or hang to dry.' },
    ];
    
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
                Our premium comfort t-shirt is designed for all-day wear. Made from high-quality materials that are both durable and soft to the touch.
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
                        <p className='font-bold text-2xl flex-1'>All Reviews <span className='font-normal text-lg opacity-60'>({reviews.length})</span></p>
                        <button className="flex items-center justify-center bg-[#f0f0f0] rounded-full w-8 h-8 cursor-pointer">
                            <SlidersVertical size={18} />
                        </button>
                        <div>
                            
                        </div>
                        <button className="hidden lg:flex flex-row gap-1 items-center justify-center text-sm min-w-[100px] bg-[#f0f0f0] text-black font-semibold py-3 rounded-[25px] transition-colors cursor-pointer">
                            Latest <span><ChevronDown size={18} /></span>
                        </button>
                        <button className="text-sm min-w-[120px] bg-black text-white py-3 rounded-[25px] transition-colors cursor-pointer">
                            Write a Review
                        </button>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {(showAllReviews ? reviews : reviews.slice(0, 4)).map(review => (
                    <ReviewCard key={review.id}
                                author={review.author} 
                                rating={review.rating} 
                                comment={review.comment} 
                                date={review.date} />
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