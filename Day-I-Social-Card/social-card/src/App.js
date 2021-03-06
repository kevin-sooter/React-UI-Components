import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="app-wrap">
      <div className="content-wrap">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
