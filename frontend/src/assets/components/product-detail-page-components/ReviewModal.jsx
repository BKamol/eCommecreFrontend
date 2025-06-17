import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';

const ReviewModal = ({ isOpen, onClose, onReviewSubmit }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });
  const navigate = useNavigate();

  const { productId } = useParams();

  useEffect(() => {
    if (!isOpen) return;
    async function checkAuth() {
      try {
        const response = await axios.get('http://localhost:8000/auth/users/me', {
          withCredentials: true
        });
        setUser(response.data.username);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate('/login');
        } else {
          console.error("Authentication error:", error);
          toast.error("You have to be logged in!");
        }
      } finally {
        setLoading(false);
      }
    }
    checkAuth();

    const onKey = e => e.key === 'Escape' && onClose();
    document.addEventListener('keyup', onKey);
    return () => document.removeEventListener('keyup', onKey);
  }, [isOpen, navigate, onClose]);

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
      toast.success("Submitted!");
      onClose();
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to submit review');
      toast.error(err.response?.data?.detail || 'Failed to submit review');
    }
  };

  if (!isOpen) return null;
  if (loading) return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow">Loading...</div>
    </div>
  );

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[25px] w-full max-w-md p-6 shadow-md relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        ><X></X></button>
        <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Rating (0–5)</label>
            <input
              type="number" min="0" max="5" value={review.rating}
              onChange={e => setReview({ ...review, rating: +e.target.value })}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-gray-500 rounded-[25px]"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Comment</label>
            <textarea
              value={review.comment}
              onChange={e => setReview({ ...review, comment: e.target.value })}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-gray-500 rounded-[25px]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-[25px] cursor-pointer"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;