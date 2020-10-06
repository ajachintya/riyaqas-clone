import React from 'react';
import Header from './Component/Header/Header';
import './App.css';
import StickeyNav from './Component/Sticky-nav/Stickey-nav';
import ServiceComponent from './Component/ServiceComponent/ServiceComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <StickeyNav />
      <ServiceComponent />
    </div>
  );
}

export default App;
