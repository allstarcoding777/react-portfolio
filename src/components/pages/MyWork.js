import React from 'react';
const chatPhoto = require('./assets/images/chat.png');
const translatePhoto = require('./assets/images/translate.png');
const weatherPhoto = require('./assets/images/weather.png');
const calendarPhoto = require('./assets/images/calender.png');

export default function Contact() {
  return (
      <main className ='my-work'>
        <div className="container">
  <div className="row">
    <div className="col">
    <a a className='work-title' href="https://realtime-chat-777.herokuapp.com/" target="_blank" rel="noreferrer"><h2>Realtime Chat</h2></a>
            <a href="https://realtime-chat-777.herokuapp.com/" target="_blank" rel="noreferrer"><img className='work-img' src={chatPhoto} alt="realtime chat"></img></a>
    </div>
    <div className="col">
      <a className='work-title' href="https://allstarcoding777.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><h2>Weather Dashboard</h2></a>
            <a href="https://allstarcoding777.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><img className='work-img' src={weatherPhoto} alt="realtime chat"></img></a>
    </div>
  </div>
</div>

  <div className="row">
    <div className="col">
      <a a className='work-title' href='https://allstarcoding777.github.io/en2es/' target="blank" rel="noreferrer"><h2>English to Spanish Translator</h2></a>
    <a href="https://allstarcoding777.github.io/en2es/" target="blank" rel="noreferrer"><img className='work-img' src={translatePhoto} alt="translate"></img></a>
    </div>
    <a className='work-title' href="https://allstarcoding777.github.io/work-day-scheduler/" target="blank" rel="noreferrer"><h2>Work Day Scheduler</h2></a>
    <a href="https://allstarcoding777.github.io/work-day-scheduler/" target="blank" rel="noreferrer"><img className='work-img' src={calendarPhoto} alt="translate"></img></a>
    <div className="col">
    </div>
  </div>

  

        {/* <h2 className='col-6 col-sm-4'><a href="https://realtime-chat-777.herokuapp.com/" target="_blank">Realtime Chat</a></h2>
            <a href="https://realtime-chat-777.herokuapp.com/" target="_blank"><img className='work-img' src={chatPhoto} alt="realtime chat"></img></a>
  
        <h2 className='col-6 col-sm-4'><a href="https://allstarcoding777.github.io/en2es/" target="_blank">Translate</a></h2>
            <a href="https://allstarcoding777.github.io/en2es/" target="blank"><img className='work-img' src={translatePhoto} alt="translate"></img></a>
        <h2 className='col-6'><a href="https://allstarcoding777.github.io/weather-dashboard/" target="_blank">Weather Dashboard</a></h2>
            <a href="https://allstarcoding777.github.io/weather-dashboard/" target="blank"><img src={weatherPhoto} alt="weather dashboard"></img></a> */}

      </main>

  );
}