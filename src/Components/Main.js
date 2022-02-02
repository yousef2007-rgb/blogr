import React,{useState} from 'react';
import '../Styles/Main.css';
import futureImage from '../images/illustration-editor-mobile.svg'
import phones from '../images/illustration-phones.svg'
import laptopImage from '../images/illustration-laptop-mobile.svg'
export default function Main() {
  const [device, setDevice] = useState("desktop")
  window.onload = () => {
    if(window.innerWidth > 500){
      setDevice("desktop");
    }else{
      setDevice("mobile")
    }
  } 
  return <div className='MainContainer'>
      <h2>Designed for the future</h2>
      <div className='futureContainer'>
      <div className='futureImage'>
          <img src={require('../images/illustration-editor-'+device+'.svg')} />
      </div>
      <div className='futureDescription'>
      <h2>Introducing an extensible editor</h2>
      <p>  Introducing an extensible editor
  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
  <h2>Robust content management</h2>
      <p>  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
    </div>
    </div>
  <div className='artSection'>
    <img className='phoneImage' src={phones} />
    <div className='artSectionArticle'>
    <h1>State of the Art Infrastructure</h1>
    <p>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
</p>
    </div>
  </div>
  
  <div className='futureContainer'>
  <div className='futureImage'>
          <img src={require('../images/illustration-laptop-'+device+'.svg')} />
      </div>
      <div className='futureDescription'>
      <h2>Free, open, simple</h2>
      
      <p>  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
    <h2>Powerful tooling</h2>
    <p>  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
</p>
</div>
</div>
  </div>;
}
