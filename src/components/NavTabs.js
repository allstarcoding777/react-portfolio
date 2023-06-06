// import react to use the react library
import React from 'react';

// NavTabs will be used to render the navigation tabs at the top of the page
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // check if the currentPage is `Home`,  if so use the active link class from bootstrap, otherwise, set it to a normal nav-link
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // check to see if the currentPage is `About`, if so use the active link class from bootstrap, otherwise, set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#mywork"
          onClick={() => handlePageChange('MyWork')}
          // check to see if the currentPage is `MyWork`, if so use the active link class from bootstrap, otherwise, set it to a normal nav-link
          className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}
        >
          My Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // check to see if the currentPage is `Resume`, if so use the active link class from bootstrap, otherwise, set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Contact')}
          // check to see if the currentPage is `Contact`, if so use the active link class from bootstrap, otherwise, set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>

  );
}

// export the NavTabs component to be used in other files 
export default NavTabs;
