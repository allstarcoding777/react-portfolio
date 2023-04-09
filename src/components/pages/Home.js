import React from 'react';
import './assets/css/pages.css'
const developerImg = require('./assets/images/developer-in-office.png');

export default function Home() {
  return (
    <div>
      <h1>Alexandria Ellis Portfolio</h1>
      <p>
      <img className='img' src={developerImg} alt='developer-in-office' />
      </p>
    </div>
  );
}