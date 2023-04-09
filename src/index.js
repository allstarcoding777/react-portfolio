// import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// render the App component to the DOM, the DOM is the browser
ReactDOM.render(<App />, document.getElementById('root'));

// // root is a variable that holds the value of the DOM, ReactDOM.createRoot is an API allows us to render our application to the DOM
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   // structure of the application
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

