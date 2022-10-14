import React from 'react'

const OpenMarket = () => {
  return (
    <div>
      <h2 className='filtersSection'>Open Market</h2>
      <div className='filtersCheckbox'>
        <input type="checkbox" name="" id="" />
        <span>Yes</span>
      </div>
      <div className='filtersCheckbox'>
        <input type="checkbox" name="" id="" />
        <span>No</span>
      </div>
      <input className='filtersInput' type="text" placeholder='Country of origin'/>
      <input className='filtersInput' type="text" placeholder='Destination Country'/>
      <input className='filtersInput' type="text" placeholder='Dispatch Port'/>
    </div>
  )
}

export default OpenMarket