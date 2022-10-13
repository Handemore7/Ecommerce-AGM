//Componente de las tarjetas de los productos, debería recibir la info y retornar el componente renderizado
import React from 'react';

//Importar algunos Iconos de la librería de React Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi'

const ProductCard = ({info}) => {

  return (
    <div className='cardContainer'>
      {info.favorite ? <div className='hearth'><AiOutlineHeart /></div> : <div className='hearth'><AiFillHeart /></div>}
      <img src={info.gallery[0]} alt="image1" className='cardImage'/>
      <span className='cardCategory'>{info.category}</span>
      <h1 className='cardTitle'>{info.title}</h1>
      <p className='cardDescription'>{info.description}</p>
      <span className='cardPrice'>${info.productPrice} USD</span>
      <div className='cardButtons'>
        <button className='cardAdd'>Add to cart</button>
        <button className='cardCompare'><BiGitCompare /></button>
      </div>
    </div>
  )
}

export default ProductCard