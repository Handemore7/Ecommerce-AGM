import React from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch }from 'react-icons/ai';
import { MdKeyboardArrowDown }from 'react-icons/md';
import DropDown from '../utils/DropDown';

const NavBar = () => {
  return (
    <div className='navBarContainer'>
      <img src="https://testing-e-commerce.vercel.app/static/media/logo.1599a7c0264f791406f5.png" alt="Logo Agrigobal" className='navBarImg'/>
      <div className='navBarContent'>
        <span className='navBarAboutUs'>About us</span>
        <div className='navBarSearch'>
          <div className='navBarDropDowns navBarCat'>
            <span>All categories</span>
            <div><MdKeyboardArrowDown /></div>
          </div>
          <input type="text" placeholder='Search'/>
          <div className='navBarIcon navBarSearchIcon'><AiOutlineSearch /></div>
        </div>
        <div className='navBarIcon'>
          <AiOutlineHeart />
        </div>
        <div className='navBarIcon'>
          <AiOutlineShoppingCart />
        </div>
        <span className='navBarAboutUs'>News</span>
        <div className='navBarDropDowns'>
            <DropDown value={'Account'} info={['Account','Sign Up','Sign In']}/>
        </div>
        <div className='navBarDropDowns'>
            <DropDown value={'Language'} info={['English','Portuguese']}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar