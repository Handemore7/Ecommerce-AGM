import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CategoriesCard = ({data}) => {

  //Se valida si las categorías están "available" o no y se agrega la clase disabled en las que tengan false
  return (
    <div className='sectionCategory'>
      <span className='sectionCategoryTitle'>Categories</span>
      <div className='allCategoriesContainer' >
      {data?.map((item)=>(
        <div className={`categoryContainer`} key={item.text}>
          {!item.available ? <div className='categoryDisabled'><div>Not available</div></div>: null}
            <img src={item.image} alt="" />
            <p>Categories</p>
            <div className='categoryContent'>
                <span>{item.text}</span>
                <div><MdKeyboardArrowRight /></div>
            </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default CategoriesCard