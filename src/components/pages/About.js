import React from 'react';
import './assets/css/pages.css'
const uofmBadge = require('./assets/images/UofMbadge.png');

export default function About() {
  return (
    <div>
      <h1 className='nav-heading'>About Page</h1>
      <p className='about-p'>
      Having completed the Full-Stack Web Development program at the University of Minnesota , I am currently embarking on my new career path. I
      am thankful to have learned from such a highly innovative program. Looking forward to continuing my journey as a Web Developer.
      </p>
      <img className='uofm-img' src={uofmBadge} alt='uofm-badge' />
    </div>
  );
}