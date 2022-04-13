import React from 'react';
import Hero from './components/heroSection/hero/Hero';
import Footer from './components/footer/Footer';
import Promotion from './components/promotion/Promotion';
import Products from './components/products/Products';
import burgers from './components/products/burgers';
import sides from './components/products/sides';

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