import React, { useContext } from 'react';
import { SearchBar, Price, OpenMarket, Categories, QuantityAvailable, DispatchStimate } from '../components';
import { DataContext } from '../dataContext';


const Filters = () => {

  const { setSearchFilter, setCurrentPage } = useContext(DataContext);

  //Función para setear todos los filtros a sus valores iniciales
  const handleCleanFilters = (e) => {
    setCurrentPage(1);
    setSearchFilter('');
  }

  return (
    <div className='filtersContainer'>
      <span className='filtersTitle'>Filters:</span>
      <div className='filtersContent'>
        <SearchBar />
        <Price />
        <OpenMarket/>
        <Categories />
        <QuantityAvailable />
        <DispatchStimate />
      </div>
      <input className='clearFiltersBtn' type="button" value="Clear filters" onClick={handleCleanFilters}/>
    </div>
  )
}

export default Filters