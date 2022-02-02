import React,{useState} from 'react';
import '../Styles/Intro.css'
import Logo from '../images/logo.svg';
import menuIcon from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'
export default function Intro() {
    const [menuBtn,setMenuBtn] = useState(menuIcon);
  return <div className='IntroContainer'>
      <div className='IntroInnerContainer'>
      <div className='header'>
        <img className='logo' src={Logo} />
        <img className='menuIcon' onClick={()=>{
            if(menuBtn == menuIcon){
            setMenuBtn(closeIcon);
            }else{
                setMenuBtn(menuIcon);
            }
        }} src={menuBtn} /> 
      </div>
      <div className='menu'></div>
      <div className='statementContainer'>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div>
          <a href='#' className='startForFreeBtn'>Start for Free</a>
          <a href="#" className='learnMoreBtn'>Learn More</a>
          </div>    
      </div>
      </div>
  </div>;
}
