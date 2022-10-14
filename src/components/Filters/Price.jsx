import React from 'react'

const Price = () => {
  return (
    <div>
      <h2 className='filtersSection'>Filter prices</h2>
      <input className='filtersInput' type="text" placeholder='Price from:'/>
      <input className='filtersInput' type="text" placeholder='Price to:'/>
    </div>
  )
}

export default Price