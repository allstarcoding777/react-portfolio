import React from 'react';
import './assets/css/pages.css'
const developerImg = require('./assets/images/developer-in-office.png');

export default function Home() {
  return (
    <div>
      <h1>Alexandria Ellis Portfolio</h1>
      <p>
      <img className='home-img' src={developerImg} alt='developer-in-office' />
      </p>
      <a className = 'github' href="https://github.com/allstarcoding777" >GitHub</a>
      <a className = 'linkedin' href="https://www.linkedin.com/in/alexandria-ellis-98589b1a4" >LinkedIn</a>
    <footer> 
      <p>© 2023 Alexandria Ellis</p>
    </footer>
    </div>
  );
}