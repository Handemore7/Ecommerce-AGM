import React from 'react';
import { SearchBar } from '../components';


const Filters = ({setData}) => {

    const handleData = (e) =>{
        setData(e)
    }

  return (
    <div className='filtersContainer'>
      <span className='filtersTitle'>Filtros:</span>
      <SearchBar setData={handleData}/>
    </div>
  )
}

export default Filters