import React, { useState } from 'react';
import ItemCard from '../ItemCard';
import Pagination from './Pagination';
import HorizontalLine from '../HorizontalLine';

const ItemsGrid = ({ items }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mb-4 lg:mb-8 px-10 lg:px-16">
        {currentItems.map((item, index) => (
          <ItemCard
            key={index}
            image_url={item.image_url}
            item_name={item.item_name}
            rating={item.rating}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>

      <HorizontalLine />

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ItemsGrid;