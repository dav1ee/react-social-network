import React from 'react';

import './Pagination.scss';

type PropsType = {
  pageSize: number;
  itemsCount: number;
  currentPage: number;
  onSetCurrentPage: (pageNum: number) => void;
  portionSize?: number;
};

const Pagination: React.FC<PropsType> = ({
  pageSize,
  itemsCount,
  currentPage,
  onSetCurrentPage,
  portionSize = 10,
}) => {
  const [portionNumber, setPortionNumber] = React.useState(1);

  let pages: Array<number> = [];
  const pagesCount = Math.ceil(itemsCount / pageSize);

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="pagination">
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)} className="pagination-control">
          <i className="fas fa-arrow-left" />
        </button>
      )}

      {pages
        .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => (
          <button
            key={page}
            onClick={() => onSetCurrentPage(page)}
            className={'pagination__item ' + (currentPage === page ? 'active' : '')}>
            {page}
          </button>
        ))}

      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)} className="pagination-control">
          <i className="fas fa-arrow-right" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
