import '../App.css'
import { useNavigate } from "react-router-dom"

// IMPORT LOGO
import logo from '../images/Frame (1).png'
import textLogo from '../images/text-artagrow.png'

import React, { useState } from "react";

import './header.css';

const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
        
        {/* HEADER */}
        <nav className=' h-full bg-white drop-shadow-2xl items-center p-5 md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={logo} className='h-7 mr-2' />
              <span>
              <img src={textLogo} className='h-7' />
              </span>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className='flex flex-col items-start'>
            <ul className={menuOpen ? "open" : ""}>
              <li><button onClick={() => navigate('/')} className='md:ml-2'>Home</button></li>
              <li><button onClick={() => navigate('/about')} className='md:ml-2'>About</button></li>
              <li><button onClick={() => navigate('/produk')} className='md:ml-2'>Products</button></li>
              <li><button onClick={() => navigate('/karir')} className='md:ml-2'>Careers</button></li>
              <li><button onClick={() => navigate('/galeri')} className='md:ml-2'>Gallery</button></li>
              <li><button onClick={() => navigate('/artikel')} className='md:ml-2'>Blog</button></li>
            
            </ul>
          </div>
        </nav>
        </>
    )
}

export default Header