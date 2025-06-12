import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReviewModal = ({ onClose, onReviewSubmit }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });

  const { productId } = useParams();

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await axios.get('http://localhost:8000/auth/users/me', {
          withCredentials: true
        });
        setUser(response.data.username);
      } catch (error) {
        if (error.response?.status === 401) {
          window.location.href = '/login';
        } else {
          console.error("Authentication error:", error);
        }
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        ...review,
        author_username: user,
      };
      
      // 1. Submit review to API
      const response = await axios.post(
        `http://localhost:8000/products/${productId}/reviews`,
        reviewData,
        { withCredentials: true }
      );

      // 2. Update localStorage cache
      const cacheKey = 'products_cache';
      const cachedProducts = localStorage.getItem(cacheKey);
      
      if (cachedProducts) {
        const { data, expiry } = JSON.parse(cachedProducts);
        
        // Find the product in cache and add the new review
        const updatedProducts = data.map(product => {
          if (product.id.toString() === productId) {
            return {
              ...product,
              reviews: [...product.reviews, response.data]
            };
          }
          return product;
        });
        
        // Save updated products back to cache
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            data: updatedProducts,
            expiry
          })
        );
      }

      // 3. Update UI
      onReviewSubmit(response.data);
      onClose();
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to submit review');
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="review-modal">
        <div className="modal-content">
          <button onClick={onClose} className="close-button">&times;</button>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  console.log(review);

  return (
    <div className="review-modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <h2>Write a Review</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="form-group">
            <label>Username:</label>
            <input 
              type="text" 
              value={user.username} 
              readOnly 
              className="readonly-input"
            />
          </div> */}
          <div className="form-group">
            <label>Rating (0-5):</label>
            <input
              type="number"
              min="0"
              max="5"
              value={review.rating}
              onChange={(e) => setReview({...review, rating: parseInt(e.target.value)})}
              required
            />
          </div>
          <div className="form-group">
            <label>Comment:</label>
            <textarea
              value={review.comment}
              onChange={(e) => setReview({...review, comment: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;