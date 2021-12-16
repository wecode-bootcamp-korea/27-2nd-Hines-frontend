import React from 'react';
import styled from 'styled-components';

function ProductDetail() {
  return (
    <ProductDetail>
      <CategoryList>
        <MainCategory>조명</MainCategory>
        <Arrow>`{'>'}`</Arrow>
        <SubCategory>무드등/장식조명</SubCategory>
      </CategoryList>
      <ProductContainer>
        <ProductImgs>
          <ProductImg src="/images/space_background.jpg" alt="item-img" />
          <ProductImg src="/images/space_background.jpg" alt="item-img" />
        </ProductImgs>
        <ProductMainImg
          src="/images/space_background.jpg"
          alt="item-Main-img"
        />
        <ProductInfo>
          <BrandName>마쉬메리골드</BrandName>
          <ProductName>
            한정수량재입고! 크리스마스 조명 몰디브 지네 전구 200구 6미터
          </ProductName>
          <Price>17,000</Price>
          <BrandName>마쉬메리골드</BrandName>
          <Cart>
            <CartProductName>전구 6구</CartProductName>
            <CartProductPrice>17,900</CartProductPrice>
          </Cart>

          <CartBtn>장바구니</CartBtn>
          <OrderBtn>바로구매</OrderBtn>
          <Banner>연중 최대 할인가! 7주년 기념 감사대축제 ~87%</Banner>
        </ProductInfo>
      </ProductContainer>
      <ProductDetailBtns>
        <ProductInfoBtn>상품정보</ProductInfoBtn>
        <Review>리뷰</Review>
      </ProductDetailBtns>
      <ProductMainPage>
        <ProductMainPageImg />
        <ProductMainPageImg />
      </ProductMainPage>
    </ProductDetail>
  );
}

const CategoryList = styled.div`
  width: 100px;
`;
const MainCategory = styled.div``;
const SubCategory = styled.div``;
const Arrow = styled.div``;
const ProductContainer = styled.div`
  display: flex;
`;
const ProductImgs = styled.div``;
const ProductImg = styled.img``;
const ProductMainImg = styled.img`
  width: 500px;
`;
const ProductInfo = styled.div``;

const BrandName = styled.div``;
const ProductName = styled.div``;
const Price = styled.div``;
const Cart = styled.div``;
const CartProductName = styled.div``;
const CartProductPrice = styled.div``;
const CartBtn = styled.button``;
const OrderBtn = styled.button``;
const Banner = styled.div``;

const ProductDetailBtns = styled.ul``;
const ProductInfoBtn = styled.li``;
const Review = styled.li``;
const ProductMainPage = styled.div``;
const ProductMainPageImg = styled.img``;

export default ProductDetail;
