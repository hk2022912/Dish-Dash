import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Intro from './components/Intro';
import Team from './components/Team';
import Footer from './components/Footer';
import './css/WST.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Menu />
      <Intro />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
