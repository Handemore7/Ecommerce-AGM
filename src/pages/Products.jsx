import React, { useContext } from 'react';
import { Pagination, ProductCard } from '../components';
import { DataContext } from '../dataContext';

const Products = ({products}) => {

  const {currentPage, itemsPerPage} = useContext(DataContext);

  //Lógica para la paginacion
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = products.slice(indexFirstItem, indexLastItem);

  return (
    <div className='productsContainer'>
            {(currentItems.map((item) => (
          <ProductCard info={item} key={item._id}/>)))}  
          <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} />

    </div>
  )
}

export default Products