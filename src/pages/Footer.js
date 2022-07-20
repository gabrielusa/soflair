import './styles/Footer.css';
import React from 'react';

import logoFooter from './midia/logo-circulo.svg';
import faa from './midia/faa-certified.svg';


function Footer() {

    return (
    <div className='main'>

      <div className='footer' >
        <div className='center-footer' >
          <img alt="Soflair aviation miami" src={logoFooter}  className='logo-footer' />
        </div>
        <div className='center-footer' >
          <img alt="FAA certification" src={faa}  className='logo-footer' />
        </div>
        <div >
          <p className='footer-text'>Soflair Aviations in Miami is approved</p>
          <p className='footer-text'>by Federal Aviation Administration</p>
        </div>
        
      </div>
        <div className='annoucement-footer'>
          <p className='footer-text cor-principal' >© 2022 Soflair Aviations. All rights reserved.</p>
          <p className='footer-text rem06 cor-principal'>This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of META PLATFORMS, Inc.</p>
      </div>

    </div>
  );
}
  
  export default Footer;
  