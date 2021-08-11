import React from 'react';

import './Pagination.scss';

const Pagination = ({ pages, currentPage, onSetCurrentPage }) => {
  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onSetCurrentPage(page)}
          className={'pagination__item ' + (currentPage === page ? 'active' : '')}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
