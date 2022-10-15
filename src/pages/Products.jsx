import React, { useContext } from 'react';
import { Pagination, ProductCard } from '../components';
import { DataContext } from '../dataContext';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Products = ({products}) => {

  const {currentPage, itemsPerPage, handleCleanFilters, setCurrentPage, totalPages} = useContext(DataContext);

  //Lógica para la paginacion
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = products.slice(indexFirstItem, indexLastItem);

  //Funciones para setear la currentPage y que cambien los modelos de la paginación o el  número que indica en qué página se encuentra el usuario
  const handleDecrease = ()=>{
    if (currentPage-1 >= 1 && currentPage-1 <= totalPages) {
      setCurrentPage(currentPage-1)
    }
  }
  const handleIncrease = ()=>{
    if (currentPage+1 >= 1 && currentPage+1 <= totalPages) {
      setCurrentPage(currentPage+1);
    }
  }

  //Se reciben todos los productos ya filtrados y se mapean, como se reciben los productos ya filtrados tambien se puede mostrar facilmente la cantidad de productos restantes una vez filtrados
  return (
    <div className='productsContainer'>
        <div className='productsTopData'>
          <div className='productsResults'>
            <h1>Results</h1>
            <span>Your search results... {products.length}</span>
          </div>
          <div className='productsButtons'>
            <button onClick={handleDecrease}><AiOutlineArrowLeft /></button>
            <div className='productPageNumber'><span>{currentPage}</span></div>
            <button onClick={handleIncrease}><AiOutlineArrowRight /></button>
          </div>
          <button className='clearFiltersBtn' onClick={handleCleanFilters}>Clear filters</button>
        </div>
            {(currentItems.map((item) => (
          <ProductCard info={item} key={item._id}/>)))}  
          <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} />

    </div>
  )
}

export default Products