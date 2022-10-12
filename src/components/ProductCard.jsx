//Componente de las tarjetas de los productos, debería recibir la info y retornar el componente renderizado
import React from 'react';

//Importar algunos Iconos de la librería de React Icons
import { AiOutlineHeart } from 'react-icons/ai'

var xd = 0;
const ProductCard = ({info}) => {
  return (
    <div className='pt-1 pl-2 pb-1 pr-2 w-60 h-80 bg-slate-300 border-[#352a99] border-solid border-2 rounded-2xl flex flex-col'>
      <AiOutlineHeart />
      <img src={info.gallery[0]} alt="image1" className='w-40'/>
      <h1>{info.title}</h1>
      <span>{info.description}</span>
      <span>{info.price} {info.currency}</span>
    </div>
  )
}

export default ProductCard