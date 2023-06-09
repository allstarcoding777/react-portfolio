import React from 'react';
const resumePhotos = require('./assets/images/resume1.png');
const resumePDF = require('./assets/resume/resume.pdf');

export default function Contact() {
  return (
    <div> 
      <a className='resume-title' href={resumePDF} target="_blank" rel="noreferrer"><h2>Click for Resume</h2></a>
      <img className='resume-img' src={resumePhotos} alt='resume' />
    </div>
  );
}