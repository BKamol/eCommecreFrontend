import React, { useState } from 'react';
import ItemCard from '../ItemCard';
import Pagination from './Pagination';
import HorizontalLine from '../HorizontalLine';

const ItemsGrid = ({ items }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
    <div className="container py-4 flex-1">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-4 lg:mb-8">
        {currentItems.map((item, index) => (
          <ItemCard
            key={index}
            item_id={item.id}
            image_url={item.images[0].url}
            item_name={item.name}
            rating={item.rating}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>

      <HorizontalLine applyPadding={false} />

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ItemsGrid;