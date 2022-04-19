import React from 'react';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Promotion from './components/promotion/Promotion';
import Products from './components/products/Products';
import burgers from './data/burgersHighlighted';
import sides from './data/sidesHighlighted';

const App = () => {
  return (
    <>
      <Hero />
      <Products heading={'Our most popular burgers'} data={burgers} />
      <Promotion />
      <Products heading={'Choose from a selection of sides'} data={sides} />
      <Footer />
    </>
  );
}

export default App;