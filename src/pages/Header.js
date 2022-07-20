import './styles/Header.css';
import React from 'react'

import logo from './midia/logo header.svg'
import menu from './midia/menu.svg'


function Header() {
    return (
      <div className='header' >
        <div className='announcement'>
          <span className='announcement-text'>Airplane tours in Miami. Book now!</span>
          
        </div>

        <div>
          <div  className='header-logo' >
            <a href='./' >
              <img alt="Soflair aviation miami" src={logo}  className='center-top-logo' />
            </a>
            <img alt='menu' src={menu} className='menu'/>
          </div>
            
        </div>

      </div>
    );
  }
  
  export default Header;
  