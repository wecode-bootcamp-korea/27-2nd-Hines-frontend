import React from 'react';
import styled from 'styled-components';

function ProductListBanner() {
  return <ProductBannerContainer />;
}

const ProductBannerContainer = styled.div`
  height: 400px;
  background-image: url('../bannerimage/maintop.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  img {
    width: 100%;
  }
`;

export default ProductListBanner;
