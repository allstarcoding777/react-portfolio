import React from 'react';
import './assets/css/pages.css'
const mindImg = require('./assets/images/mind.jpg');

export default function Home() {
  return (
    <body className='home-body'>
    <section className='container'>
      <div className="row">
      <img className='home-img col' src={mindImg} alt='profile' />
      <h1 className='hello col-5'>Hello, I am Alex<br></br><span>a Full-Stack <br></br>Web Developer</span></h1>
      <section className='col'>
      <div className='col links'>
      <a className = 'github' href="https://github.com/allstarcoding777?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
      <a className = 'linkedin' href="https://www.linkedin.com/in/alexandria-ellis-98589b1a4" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
    </div>
    </section>
    <footer className='flex-wrapper'>
            <p className='footer'>© 2023 Alexandria Ellis</p>
    </footer>
    </body>  
  );
}