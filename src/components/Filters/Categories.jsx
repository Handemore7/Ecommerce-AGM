import React, { useState, useContext } from 'react'
import { DataContext } from '../../dataContext';
import getCategories from '../../utils/GetCategories';

const Categories = () => {

  const [DropOn, setDropOn] = useState(false);
  const { products } = useContext(DataContext);
  const [ DropDownValue , setDropDownValue] = useState('> Select a category...')

  return (
    <div>
      <h2 className='filtersSection'>Filter Categories</h2>
      <div className='filterCatContainer' onClick={() => setDropOn(!DropOn)}>{DropDownValue}</div>
        <ul className='categoriesOptions'>
            {DropOn && getCategories(products)?.map((item) =>(
                <li key={item} className='categoriesOpt' onClick={(e)=>setDropDownValue(e.target.outerText)}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Categories