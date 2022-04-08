import React from 'react';
import Hero from './components/heroSection/hero/Hero';
import Footer from './components/footer/Footer';
import Featured from './components/promotion/featured';
import Products from './components/products/products';
import { burgers } from './components/products/burgers';


const App = () => {
  return (
    <>
      <Hero />
      <Products heading={'Our most popular burgers'} data={burgers} />
      <Featured />
      <Footer />
    </>
  );
}

export default App;