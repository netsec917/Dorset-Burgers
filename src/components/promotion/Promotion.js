import React from 'react';
import { PromotionContainer, PromotionButton } from './PromotionElements';

const Promotion = () => {
  return (
    <PromotionContainer>
      <h1>Limited time special</h1>
      <p>Lorem ipsum.</p>
      <PromotionButton>Order Now</PromotionButton>
    </PromotionContainer>
  );
};

export default Promotion;