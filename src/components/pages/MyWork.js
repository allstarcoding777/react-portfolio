import React from 'react';
const chatPhoto = require('./assets/images/chat.png');
const translatePhoto = require('./assets/images/translate.png');
const calendarPhoto = require('./assets/images/calender.png');
const workoutPhoto = require('./assets/images/workout.png');
const notesPhoto = require('./assets/images/notes.png');
const quizPhoto = require('./assets/images/quiz.png');

export default function Contact() {
  return (
    <main className='my-work'>
        <div className="col">
          <a a className='work-title' href="https://realtime-chat-777.herokuapp.com/" target="_blank" rel="noreferrer"><h2>Realtime Chat</h2></a>
          <a href="https://realtime-chat-777.herokuapp.com/" target="_blank" rel="noreferrer"><img className='work-img' src={chatPhoto} alt="realtime chat"></img></a>
        </div>
        <div className="col">
          <a a className='work-title' href='https://workout-tracker-777.herokuapp.com/' target="blank" rel="noreferrer"><h2>Workout Tracker</h2></a>
          <a href="https://workout-tracker-777.herokuapp.com/" target="blank" rel="noreferrer"><img className='work-img' src={workoutPhoto} alt="translate"></img></a>
        </div>
        <div className="col">
          <a className='work-title' href="https://allstarcoding777.github.io/beginner-coding-quiz/" target="_blank" rel="noreferrer"><h2>Coding Quiz</h2></a>
          <a href="https://allstarcoding777.github.io/beginner-coding-quiz/" target="_blank" rel="noreferrer"><img className='work-img' src={quizPhoto} alt="realtime chat"></img></a>
        </div>
        {/* <div className="col">
        <a className='work-title' href="https://note-taker777.herokuapp.com/" target="blank" rel="noreferrer"><h2>Note Taker</h2></a>
        <a href="https://note-taker777.herokuapp.com/" target="blank" rel="noreferrer"><img className='note-img work-img' src={notesPhoto} alt="translate"></img></a>
        </div>
        <div className="col">
          <a a className='work-title' href='https://allstarcoding777.github.io/en2es/' target="blank" rel="noreferrer"><h2>English to Spanish Translator</h2></a>
          <a href="https://allstarcoding777.github.io/en2es/" target="blank" rel="noreferrer"><img className='work-img' src={translatePhoto} alt="translate"></img></a>
        </div>
        <div className="col">
        <a className='work-title' href="https://allstarcoding777.github.io/work-day-scheduler/" target="blank" rel="noreferrer"><h2>Work Day Scheduler</h2></a>
        <a href="https://allstarcoding777.github.io/work-day-scheduler/" target="blank" rel="noreferrer"><img className='work-img' src={calendarPhoto} alt="translate"></img></a>
        </div> */}
    </main>
  );
}