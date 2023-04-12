import React from 'react';
import './assets/css/pages.css'
const uofmBadge = require('./assets/images/UofMbadge.png');

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
      I am a student at the University of Minnesota and am currently enrolled in the full-stack coding bootcamp. I have 
      learned so much from my instructor and fellow classmates! I am very excited to continue on my journey as a web developer.
      </p>
      <img className='uofm-img' src={uofmBadge} alt='uofm-badge' />
    </div>
  );
}