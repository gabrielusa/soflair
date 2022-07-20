import './styles/Header.css';
import React from 'react'

// import logo from './logo-lateral.png'


function Header() {

  // Evento de scroll dispara a seguinte função:
  // const target = document.querySelector('.header-logo')
  // const target2 = document.querySelector('.tab2')
  // window.addEventListener('scroll', function(){
  //   if(window.pageYOffset > 30){
  //     target.classList.toggle("header-animate", true)
  //     target2.classList.toggle("top-40", true)
  //   } else{
  //     target.classList.toggle("header-animate", false)
  //     target2.classList.toggle("top-40", false) }
  // })

    return (
      <div className='header' >
        {/* input serve para validar se o announcemente aparece ou n */}
        <input type='checkbox' name='announcement-close' id='check-announcement' className='input-slide' />
        <label className='close-announcement' htmlFor='check-announcement'>x</label>
        <div className='announcement'>
          <span className='announcement-text'>Airplane tours in Miami. Book now <b>!</b></span>
          
        </div>

        <div className='branco'>
          <div  className='tab header-logo' >
            <a href='./' >
              {/* <img alt="Soflair aviation miami" src={logo}  className='center-top-logo' /> */}
            </a>
          </div>
            
        </div>

      </div>
    );
  }
  
  export default Header;
  