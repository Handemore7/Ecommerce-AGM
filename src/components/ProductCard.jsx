//Componente de las tarjetas de los productos, debería recibir la info y retornar el componente renderizado
import React from 'react';

//Importar algunos Iconos de la librería de React Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';

//Se recibe la información de una tarjeta como parametro
const ProductCard = ({info}) => {

  //Funciones que son accionadas con los botones de las tarjetas
  const handleAddButton = (e) => {
    alert(info.title + ' ha sido añadido al carrito')
  }

  const handleCompareButton = (e) => {
    alert(info.title + ' Comparación')
  }

  return (
    <div className='cardContainer'>
      {info.favorite ? <div className='hearth'><AiOutlineHeart /></div> : <div className='hearth'><AiFillHeart /></div>}
      <img src={info.gallery[0]} alt="image1" className='cardImage'/>
      <span className='cardCategory'>{info.category}</span>
      <h1 className='cardTitle'>{info.title}</h1>
      <p className='cardDescription'>{info.description}</p>
      {/* Las tarjetas que tengan un precio undefined aparecen como valor no disponible */}
      <span className='cardPrice'>{info.productPrice == undefined ? <span>Valor no disponible</span> : `$ ${Number(info.productPrice).toFixed(2)} USD`}</span>

      <div className='cardButtons'>
        <button className='cardAdd' onClick={handleAddButton}>Add to cart</button>
        <button className='cardCompare' onClick={handleCompareButton}><BiGitCompare /></button>
      </div>
    </div>
  )
}

export default ProductCard