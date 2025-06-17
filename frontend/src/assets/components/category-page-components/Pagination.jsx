import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  return (
    <div className="flex my-8 px-10 lg:px-16 w-full">
      <nav className="flex flex-row w-full justify-between items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex flex-row gap-2 items-center px-3 py-1 rounded-md border-[#f0f0f0] border-2 cursor-pointer hover:bg-[#f0f0f0] disabled:opacity-50 disabled:cursor-auto"
        >
          <ArrowLeft size={20} />
          Previous
        </button>
        
        <div className='flex flex-row gap-1'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 cursor-pointer rounded-md ${
                currentPage === page
                  ? 'bg-[#f0f0f0] text-gray-700'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex flex-row gap-2 items-center px-3 py-1 rounded-md border-[#f0f0f0] border-2 cursor-pointer hover:bg-[#f0f0f0] disabled:opacity-50 disabled:cursor-auto"
        >
          Next
          <ArrowRight size={20} />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;