import React from 'react'

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
  var totalPages = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        totalPages.push(i);
    }

    return (
    <div>
        {totalPages.map(pageNumber => (<a key={pageNumber} href='!#' onClick={() => paginate(pageNumber)}>{pageNumber}</a>))}
    </div>
  )
}

export default Pagination