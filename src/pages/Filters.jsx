import React, { useState } from 'react';
import { SearchBar } from '../components';


const Filters = ({setData}) => {

    const handleData = (e) =>{
        setData(e)
    }

  return (
    <div>
        <SearchBar setData={handleData}/>
    </div>
  )
}

export default Filters