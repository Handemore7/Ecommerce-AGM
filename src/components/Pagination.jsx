import React, { useContext } from 'react'
import { DataContext } from '../dataContext';

const Pagination = ({itemsPerPage, totalItems}) => {

  const {currentPage, setCurrentPage, setTotalPages} = useContext(DataContext);

  var pages = [];
  
    // Se dividen el total de objetos entre los objetos por página que se deseen para saber cuantas páginas hay en total
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i);
        setTotalPages(pages.length);
      }

      //Se setea currentPage cuando se clickea en uno de los elementos de la paginación, este valor de currentPage se usa para determinar en qué página se encuentra actualmente el usuario
    return (
    <div className='paginationContainer'>
        {pages.map(pageNumber => (
          <a className={currentPage == pageNumber ? 'paginationItem paginationItem_selected' : 'paginationItem'} key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</a>
        ))}
    </div>
  )
}

export default Pagination