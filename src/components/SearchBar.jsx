import React from 'react'

const SearchBar = ({setData}) => {

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