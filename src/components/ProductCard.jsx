//Componente de las tarjetas de los productos, debería recibir la info y retornar el componente renderizado
import React, {useState} from 'react';

//Importar algunos Iconos de la librería de React Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { MdOutlineLocalOffer } from 'react-icons/md';

//Se recibe la información de una tarjeta como parametro
const ProductCard = ({info}) => {

  const [active, setActive] = useState(false)

  //Funciones que son accionadas con los botones de las tarjetas
  const handleAddButton = (e) => {
    //Si ya no quedan unidades disponibles sale un mensaje que dice eso, de lo contrario dice que se añadió al carrito
    if (info.quantityAvailable) {
      alert(info.title + ' ha sido añadido al carrito')
    } else {
      alert('No quedan más unidades disponibles de: '+info.title )
    }
  }

  const handleCompareButton = (e) => {
    setActive(!active) 
  }


  return (
    <div className={` cardContainer ${info.quantityAvailable == undefined ? ' cardDisabled': ''} ${!active == '' ? 'cardDisabled' : ''}`}>
      <div className='cardTopElements'>
        {// Dependiendo de si info.promo es true o false aparece si tiene descuento o no
        info.promo ? 
        <div className='cardOfferContainer'>
          <div className='cardOffer'><MdOutlineLocalOffer /></div>
          <span>-20%</span>
         </div> : null}
        {//Dependiendo de si info.favorite es true o false aparece el respectivo ícono del corazón
          info.favorite ? 
        <div className='cardHearth'>
          <AiOutlineHeart />
        </div> : 
        <div className='cardHearth'>
          <AiFillHeart />
        </div>}
        
      </div>

      <img src={info.gallery[0]} alt="image1" className='cardImage'/>
      <span className='cardCategory'>{info.category}</span>
      <h1 className='cardTitle'>{info.title.toUpperCase()}</h1>
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