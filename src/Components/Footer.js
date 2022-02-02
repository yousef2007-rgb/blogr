import React from 'react';
import '../Styles/Footer.css'
import Logo from '../images/logo.svg'
export default function Footer() {
  return <div className='FooterContainer'>
      <img src={Logo} />
      <div className='productSection'>
          <h3>Product</h3>
          <a href="#">Overview</a>
          <a href="#">Pricing</a>
          <a href="#">Marketplace</a>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
      </div>
      <div className='companySection'>
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
      </div>
      <div className='connectSection'>
          <h3>Connect</h3>
          <a href="#">Contact</a>
          <a href="#">Newsletter</a>
          <a href="#">LinkedIn</a>
      </div>

  </div>;
}
