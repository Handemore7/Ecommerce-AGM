import React, { useContext } from 'react';
import { SearchBar, Price, OpenMarket, Categories, QuantityAvailable, DispatchStimate } from '../components';
import { DataContext } from '../dataContext';


const Filters = () => {

  const { handleCleanFilters } = useContext(DataContext);

  //En el botón de Clear filters se llama a la función handleCleanFilters para setear a los valores iniciales los filtros

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