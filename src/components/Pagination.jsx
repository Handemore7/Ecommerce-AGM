import React from 'react'

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
  var totalPages = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        totalPages.push(i);
    }

    return (
    <div className='paginationContainer'>
        {totalPages.map(pageNumber => (<a className='paginationItem' key={pageNumber} onClick={() => paginate(pageNumber)}>{pageNumber}</a>))}
    </div>
  )
}

export default Pagination