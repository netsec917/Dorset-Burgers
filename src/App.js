import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/heroSection/hero/Hero';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Hero />
      <Footer />
    </Router>
  );
}

export default App;