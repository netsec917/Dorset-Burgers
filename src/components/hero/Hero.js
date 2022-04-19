import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

import React, { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Locally sourced ingredients</HeroH1>
            <HeroP>Ready in 30 minutes</HeroP>
            <HeroBtn>Order now</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero;