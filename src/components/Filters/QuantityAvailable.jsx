import React from 'react'

const QuantityAvailable = () => {
    //Maquetado del filtro, este no presenta lógica
  return (
    <div>
      <h2 className='filtersSection'>Filter Quantity Available (Mt)</h2>
      <input className='filtersInput' type="text" placeholder='Quantity From'/>
      <input className='filtersInput' type="text" placeholder='Quantity To'/>
    </div>
  )
}

export default QuantityAvailable