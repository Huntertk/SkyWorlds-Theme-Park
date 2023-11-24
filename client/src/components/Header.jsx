import React, { useState } from 'react'
import '../styles/header.scss'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import tvagologo from '../assets/images/tvagologo.png'

const Header = () => {
  return (
    <header>
        <nav >
            <div className="logoContainer">
               <Link to="/"> <img src={logo} alt="" /> <span>by</span> <img className='companyImg' src={tvagologo} alt="Image" /> </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header