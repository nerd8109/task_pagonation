import React, { useState, useEffect } from 'react';
import './Pagination.css';

const PaginationTask = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  
  const fetchItems = async (page) => {
    setLoading(true);
    try {
      const skip = (page - 1) * limit;
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const result = await response.json();
      
      setItems(result.products);
      setTotalPages(Math.ceil(result.total / limit));
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  return (
    <div className="pagination-container">
      <h2>Item Inventory</h2>

      {loading ? (
        <div className="loader">Loading items...</div>
      ) : (
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item-card">
              {item.title}
            </li>
          ))}
        </ul>
      )}

      <div className="pagination-controls">
        <button 
          className="nav-btn"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1 || loading}
        >
          &laquo; Previous
        </button>

        <span className="page-info">
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>

        <button 
          className="nav-btn"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages || loading}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default PaginationTask;