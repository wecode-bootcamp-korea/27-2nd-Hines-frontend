import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ items }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/productList/productdetail/${items.id}`);
  };

  return (
    <ProductCard onClick={goToDetail} key={items.id}>
      <ProductImage>
        <img src={items.thumbnail_image_url} alt={items.name} />
      </ProductImage>
      <ContentsWrap>
        <BrandName>{items.brand}</BrandName>
        <ProductName>{items.name}</ProductName>
        <PriceInfoWrap>
          <ProductPrice>
            {Math.floor(items.price).toLocaleString()}Ƀ
          </ProductPrice>
          <SalePercent />
        </PriceInfoWrap>
        <ReviewWrap>
          <ReviewStar>별</ReviewStar>
          <ReviewCount>리뷰 100개</ReviewCount>
        </ReviewWrap>
      </ContentsWrap>
    </ProductCard>
  );
}

const ProductCard = styled.div`
  width: 250px;
  padding-bottom: 30px;
  img {
    width: 100%;
    object-fit: cover;
  }
  cursor: pointer;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 280px;
`;

const ContentsWrap = styled.div`
  padding: 10px 0;
`;

const BrandName = styled.h3`
  font-size: ${({ theme }) => theme.fontSmall};
  font-weight: 700;
  padding-bottom: 10px;
`;

const ProductName = styled.h1`
  font-size: ${({ theme }) => theme.fontRegular};
  padding-bottom: 10px;
`;

const PriceInfoWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  font-size: ${({ theme }) => theme.fontMedium};
`;

const SalePercent = styled.h2`
  font-weight: 500;
`;

const ProductPrice = styled.h2`
  font-weight: 700;
`;

const ReviewWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'start')};
  font-size: ${({ theme }) => theme.fontSmall};
  padding: 10px 0;
`;

const ReviewStar = styled.span`
  padding-right: 10px;
`;

const ReviewCount = styled.span`
  padding-right: 10px;
`;

export default Product;
