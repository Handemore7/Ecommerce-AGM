import React, { useContext } from 'react'
import { DataContext } from '../dataContext';

const SearchBar = () => {
  const { setCurrentPage, setSearchFilter, searchFilter } = useContext(DataContext);

    //Cada vez que cambia el input cambian los datos por lo tanto la paginación debe setearse a 1, además de setear el estado searchFilter con el valor del input
    const handleSearchInputChange = (e) =>{
        setSearchFilter(e.target.value);
        setCurrentPage(1);
    }

  return (
    <div>
        <input type="text" placeholder='Buscar productos...' onChange={handleSearchInputChange} value={searchFilter}/>
    </div>
  )
}

export default SearchBar