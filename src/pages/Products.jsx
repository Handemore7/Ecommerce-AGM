import React, { useState } from 'react';
import { Pagination, ProductCard } from '../components';

const Products = ({products}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9)

  //Logica para la paginacion
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = products.slice(indexFirstItem, indexLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='productsContainer'>
            {(currentItems.map((item) => (
          <ProductCard info={item} key={item._id}/>)))}  
          <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} paginate={paginate}/>

    </div>
  )
}

export default Products