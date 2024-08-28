import React from 'react'
import './Header.css'
import logo from './images/logouse.jpg'
import HeaderOptions from './HeaderOptions'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
                
        
        </div>

        <div className="header__right">
           

            <Link to="/shoes">
                <HeaderOptions title="Shoes" />
            </Link>   
            <Link to="/bags">
                <HeaderOptions title="Bags" />
            </Link>
            <Link to="/clothes">
                <HeaderOptions title="Clothes" />
            </Link>

        </div>
    </div>
  )
}

export default Header
