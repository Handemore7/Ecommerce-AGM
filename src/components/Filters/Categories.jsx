import React, { useState, useContext } from 'react'
import { DataContext } from '../../dataContext';
import getCategories from '../../utils/GetCategories';

const Categories = () => {

  const [DropOn, setDropOn] = useState(false);
  const { products } = useContext(DataContext);
  const [ DropDownValue , setDropDownValue] = useState('Elegir categoría')

  return (
    <div>
      <div onClick={() => setDropOn(!DropOn)}>{DropDownValue}</div>
        <ul className='categoriesOptions'>
            {DropOn && getCategories(products)?.map((item) =>(
                <li key={item} className='categoriesOpt' onClick={(e)=>setDropDownValue(e.target.outerText)}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Categories