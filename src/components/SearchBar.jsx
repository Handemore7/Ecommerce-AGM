import React, { useState } from 'react'

const SearchBar = ({setData}) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (e) =>{
        setData(e.target.value);
    }

  return (
    <div>
        <input type="text" placeholder='Buscar productos...' onChange={handleSearchInputChange}/>
    </div>
  )
}

export default SearchBar