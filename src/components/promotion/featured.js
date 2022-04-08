import React from 'react';
import { FeatureContainer, FeatureButton } from './featuredElements';

const Featured = () => {
  return (
    <FeatureContainer>
      <h1>Limited time special</h1>
      <p>Lorem ipsum.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Featured;