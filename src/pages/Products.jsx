import React, { useState } from 'react';
import { Pagination, ProductCard } from '../components';

const Products = ({products}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9)

  console.log(products);

  //Logica para la paginacion
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = products.slice(indexFirstItem, indexLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='AllCardsContainer'>
            {(currentItems.map((item) => (
          <ProductCard info={item} key={item._id}/>)))}  
          <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} paginate={paginate}/>

    </div>
  )
}

export default Products