import React, { Fragment } from 'react';
import styled from 'styled-components';

import MOST_PRODUCT_CARD from './MostCardData';

function MostProductCard() {
  return (
    <Fragment>
      {MOST_PRODUCT_CARD.map(items => {
        return (
          <KeywordCard key={items.id}>
            <img src={items.keywordImage} alt={items.product_name} />
            {}
            <KeywordTitle>#{items.keywordTitle}</KeywordTitle>
          </KeywordCard>
        );
      })}
    </Fragment>
  );
}

const KeywordCard = styled.div`
  width: 230px;
  background: #333;
  position: relative;

  img {
    width: 100%;
    opacity: 0.5;
  }
`;

const KeywordTitle = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: 50%;
  color: White;
  font-size: ${({ theme }) => theme.fontMedium};
  text-align: center;
`;

export default MostProductCard;
