import React from 'react';
const resume = require('./assets/images/resume.png');

export default function Contact() {
  return (
    <div>
      <h1>Resume Page</h1>
      <img className='resume-img' src={resume} alt='resume' />
    </div>
  );
}