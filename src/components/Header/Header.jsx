import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className='header'>
         <div className='header__wrapper'>
            <Logo />
            <ul className='header__menu'>
               <Link className='header__link-item' to={'/'}>HOME</Link>
               <Link className='header__link-item' to={'/about'}>ABOUT US</Link>
            </ul>
         </div>
      </header>
   )
}

export default Header
