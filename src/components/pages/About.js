import React from 'react';
import './assets/css/pages.css'
const uofmBadge = require('./assets/images/UofMbadge.png');

export default function About() {
  return (
    <div>
      <h1 className='nav-heading'>About Page</h1>
      <p>
      Having completed the Full-Stack Web Development program at the University of Minnesota , I am currently looking for the right career path to embark on. I
      am thankful to have learned from such a highly innovative program. Looking forward to to continuing my journey as a web developer.
      </p>
      <img className='uofm-img' src={uofmBadge} alt='uofm-badge' />
    </div>
  );
}