'use client'

import { useState, useEffect } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg 
            ${currentPage === 1 ? "text-gray-400 bg-gray-200 cursor-not-allowed" : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}`}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border 
                ${currentPage === page ? "text-blue-600 bg-blue-50 border-gray-300" : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}`}
              >
                {page}
              </button>
            </li>
          );
        })}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg 
            ${currentPage === totalPages ? "text-gray-400 bg-gray-200 cursor-not-allowed" : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default function PaginatedList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/data?page=${currentPage}`);
        const result = await res.json();
        setData(result.data);
        setTotalPages(Math.ceil(result.totalRecords / 10)); // Assuming 10 records per page
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <div>
      {/* Display Data */}
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name}</li> // Change 'name' based on your data
        ))}
      </ul>

      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
