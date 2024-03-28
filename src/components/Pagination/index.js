import React from "react";

const Pagination = ({ currentPage, totalPages, prevPage, nextPage, specificPage }) => {
  const generatePageNumbers = () => {
    const maxPagesToShow = 5; 
    const pages = [];
    let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let end = Math.min(totalPages, start + maxPagesToShow - 1);
    
    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center items-center">
      <button
        className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {generatePageNumbers().map((page) => (
        <button
          key={page}
          className={`mx-2 px-4 py-2 rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => specificPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
