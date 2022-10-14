import React, { useContext } from 'react'
import { DataContext } from '../dataContext';

const Pagination = ({itemsPerPage, totalItems}) => {

  const {setCurrentPage} = useContext(DataContext);

  var totalPages = [];
  
    // Se dividen el total de objetos entre los objetos por página que se deseen para saber cuantas páginas hay en total
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        totalPages.push(i);
    }

    return (
    <div className='paginationContainer'>
        {totalPages.map(pageNumber => (<a className='paginationItem' key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</a>))}
    </div>
  )
}

export default Pagination