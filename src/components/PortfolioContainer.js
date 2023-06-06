// useState hook will be used to manage the state of the current page
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import MyWork from './pages/MyWork';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// PortfolioContainer will manage which component is currently being rendered
export default function PortfolioContainer() {
  // this state will be passed to the NavTabs component
  const [currentPage, setCurrentPage] = useState('Home');

  // render a different component based on the current page
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'MyWork') {
      return <MyWork />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  
  // the function will update the state of currentPage
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* passing the currentPage state value and the function to update it as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* renderPage will return a component  */}
      {renderPage()}
    </div>
  );
}