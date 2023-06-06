import React from 'react';
import './assets/css/pages.css'
import MaterialIcon, {} from 'material-icons-react';
const profileImg = require('./assets/images/photo.jpg');


// link to my work page
export default function Home() {
  return (
    <body className='home-body'>
    <section className='container'>
      <div className="row align-items-center">
      <img className='profile-img col' src={profileImg} alt='profile' />
      <h1 className='col-5'>Hello, I am Alex<br></br><span>a Full-Stack <br></br>Web Developer</span></h1>
      <section className='col'>
      <div className='col'>
      {/* <a className = 'my-work' href="/MyWork" >View My Work &nbsp;&nbsp;<MaterialIcon icon="arrow_forward" /></a> */}
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