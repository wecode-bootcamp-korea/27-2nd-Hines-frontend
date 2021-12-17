import React from 'react';
import styled from 'styled-components';

function ProductDetail() {
  return (
    <ProductDetailBg>
      <ProductContainer>
        <CategoryList>
          <MainCategory>조명</MainCategory>
          <Arrow>{'>'}</Arrow>
          <SubCategory>무드등 / 장식조명</SubCategory>
        </CategoryList>
        <Product>
          <ProductImgsUl>
            <ProductImgLi>
              <ProductImg src="/images/sample.jpg" alt="item-img" />
            </ProductImgLi>
            <ProductImgLi>
              <ProductImg src="/images/sample.jpg" alt="item-img" />
            </ProductImgLi>
          </ProductImgsUl>
          <ProductMainImg src="/images/sample.jpg" alt="item-Main-img" />
          <ProductInfo>
            <BrandName>마쉬메리골드</BrandName>
            <ProductName>
              한정수량재입고! 크리스마스 조명 몰디브 지네 전구 200구 6미터
            </ProductName>
            <Price>
              <PriceNum>17,000</PriceNum>원
            </Price>
            <Description>
              상품 설명 넣을거임상품 설명 넣을거임상품 설명 넣을거임상품 설명
              넣을거임상품 설명 넣을거임상품 설명 넣을거임상품 설명 넣을거임상품
              설명 넣을거임상품 설명 넣을거임상품 설명 넣을거임상품 설명
              넣을거임
            </Description>
            <BrandName>마쉬메리골드</BrandName>
            <Cart>
              <CartProductName>전구 6구</CartProductName>
              <CountControl>
                <PlusBtn>+</PlusBtn>
                <Count>1</Count>
                <MinusBtn>-</MinusBtn>
                <DeleteBtn>x</DeleteBtn>
              </CountControl>
            </Cart>
            <TotalPriceContainer>
              <TotalPriceTitle>주문금액</TotalPriceTitle>
              <TotalPrice>
                <TotalPriceNum>17,000</TotalPriceNum>원
              </TotalPrice>
            </TotalPriceContainer>
            <BtnList>
              <CartBtn>장바구니</CartBtn>
              <OrderBtn>바로구매</OrderBtn>
            </BtnList>
          </ProductInfo>
        </Product>
      </ProductContainer>
      <ProductDetailBtnList>
        <ProductInfoBtn>상품정보</ProductInfoBtn>
        <ReviewBtn>리뷰</ReviewBtn>
        <Btn>문의</Btn>
        <Btn>배송/환불</Btn>
        <Btn>추천</Btn>
      </ProductDetailBtnList>
      <ProductMainPage>
        <ProductMainPageImg src="/images/sample.jpg" alt="item-img" />
        <ProductMainPageImg src="/images/sample.jpg" alt="item-img" />
      </ProductMainPage>
      <ReviewPage>
        <ReviewTitle>리뷰</ReviewTitle>
        <ReviewFilter>
          <ReviewBest>베스트순</ReviewBest>
          <ReviewLast>최신순</ReviewLast>
          <ReviewPhoto>사진리뷰</ReviewPhoto>
        </ReviewFilter>
        <ReviewContent>
          <ReviewId>오킨비</ReviewId>
          <ReviewDate>2021.11.16</ReviewDate>
          <ReviewOrderWhere>Hines 구매</ReviewOrderWhere>
          <ReviewItemName>블랙라인</ReviewItemName>
          <ReviewImg src="/images/sample.jpg" alt="item-img" />
          <ReviewText>
            150 트리에 4개전구 감았어요! 생각보다 풍성하게 감기네여 :) 너무
            이뻐요 남편이 백화점 트리장식 같다고 고급지다고 하네여 ~ 아기도 너무
            좋아합니다!
          </ReviewText>
        </ReviewContent>
        <ReviewContent>
          <ReviewId>오킨비</ReviewId>
          <ReviewDate>2021.11.16</ReviewDate>
          <ReviewOrderWhere>Hines 구매</ReviewOrderWhere>
          <ReviewItemName>블랙라인</ReviewItemName>
          <ReviewImg src="/images/sample.jpg" alt="item-img" />
          <ReviewText>
            150 트리에 4개전구 감았어요! 생각보다 풍성하게 감기네여 :) 너무
            이뻐요 남편이 백화점 트리장식 같다고 고급지다고 하네여 ~ 아기도 너무
            좋아합니다!
          </ReviewText>
        </ReviewContent>

        <ReviewCreate>
          <ReviewInput />
          <ReviewBtnList>
            <ReviewImgPushBtn>사진 등록</ReviewImgPushBtn>
            <ReviewCreateBtn>리뷰 등록</ReviewCreateBtn>
          </ReviewBtnList>
        </ReviewCreate>
      </ReviewPage>
    </ProductDetailBg>
  );
}

const ProductDetailBg = styled.div`
  margin-bottom: 100px;
`;

const ProductContainer = styled.div`
  margin: 30px auto;
  width: 1050px;
`;

const CategoryList = styled.div`
  margin-bottom: 30px;
`;
const MainCategory = styled.span`
  margin-right: 10px;
  color: ${({ theme }) => theme.deepGrey};
`;

const Arrow = styled(MainCategory)``;

const SubCategory = styled.span`
  color: ${({ theme }) => theme.deepGrey};
`;

const Product = styled.div`
  display: flex;
`;

const ProductImgsUl = styled.ul``;
const ProductImgLi = styled.li`
  width: 52px;
  height: 52px;
  margin: 0 10px 10px 0;
  overflow: hidden;
  border-radius: 5px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 0.1s linear;

  &:hover {
    border-radius: 5px;
    transform: scale(1.2);
  }
`;

const ProductMainImg = styled.img`
  width: 558px;
  height: 558px;
  margin-right: 50px;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  width: 460px;
`;

const BrandName = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.deepGrey};
`;

const ProductName = styled.div`
  font-size: 22px;
  margin-bottom: 13px;
`;

const Price = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const PriceNum = styled.span`
  ${({ theme }) => theme.fontWeightBold};
`;

const Description = styled.p`
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  padding-bottom: 95px;
`;
const Cart = styled.div`
  ${({ theme }) => theme.flexMixin('', 'center', 'space-between')};
  height: 55px;
  padding: 10px 20px;
  border-top: 1px solid ${({ theme }) => theme.grey};
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontRegular};
`;

const CartProductName = styled.span``;

const CountControl = styled.div``;

const PlusBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.grey};
  color: #b0b0b0;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

const MinusBtn = styled(PlusBtn)``;

const Count = styled.span`
  padding: 10px;
`;

const DeleteBtn = styled.span`
  padding: 5px;
  margin-left: 50px;

  &:hover {
    cursor: pointer;
  }
`;
const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const TotalPriceTitle = styled.span`
  display: block;
  font-size: 13px;
  ${({ theme }) => theme.fontWeightBold};
`;

const TotalPrice = styled.div`
  font-size: 20px;
  ${({ theme }) => theme.fontWeightBold};
`;

const TotalPriceNum = styled.span``;

const BtnList = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  margin-top: 20px;
`;

const CartBtn = styled.button`
  ${({ theme }) => theme.flexMixin('', 'center', 'center')};
  width: 185px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  color: ${({ theme }) => theme.skyBlue};
  padding: 13px 10px 14px 10px;
  border: 1px solid ${({ theme }) => theme.skyBlue};
  font-size: 15px;
  ${({ theme }) => theme.fontWeightBold};

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const OrderBtn = styled.button`
  ${({ theme }) => theme.flexMixin('', 'center', 'center')};
  width: 185px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.skyBlue};
  color: white;
  padding: 13px 10px 14px 10px;
  border: none;
  font-size: 15px;
  ${({ theme }) => theme.fontWeightBold};

  &:hover {
    background-color: #369fc2;
    cursor: pointer;
  }
`;

const ProductDetailBtnList = styled.ul`
  ${({ theme }) => theme.flexMixin('', 'center', 'center')};
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid ${({ theme }) => theme.grey};
`;

const ProductInfoBtn = styled.li`
  width: 132px;
  padding: 14px 10px 15px 10px;
  font-size: 15px;
  ${({ theme }) => theme.fontWeightBold};
  text-align: center;

  &:hover {
    color: #12acdb;
    cursor: pointer;
  }
`;

const ReviewBtn = styled(ProductInfoBtn)``;
const Btn = styled(ProductInfoBtn)``;

const ProductMainPage = styled.div`
  width: 692px;
  margin: 10px auto;
`;

const ProductMainPageImg = styled.img`
  width: 100%;
  margin-top: 90px;
`;

const ReviewPage = styled.div`
  width: 692px;
  margin: 150px auto 0 auto;
`;

const ReviewTitle = styled.p`
  padding-left: 5px;
  font-size: 18px;
  ${({ theme }) => theme.fontWeightBold};
`;

const ReviewFilter = styled.ul`
  display: flex;
  padding: 12px 0 12px 0;
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.grey};
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const ReviewBest = styled.li`
  padding: 5px;
  margin-right: 6px;
  ${({ theme }) => theme.fontWeightBold};
  font-size: 13px;

  &:hover {
    cursor: pointer;
    color: #adadad;
  }
`;
const ReviewLast = styled(ReviewBest)``;
const ReviewPhoto = styled(ReviewBest)``;

const ReviewContent = styled.div`
  width: 692px;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const ReviewId = styled.p`
  padding: 6px;
  font-size: 13px;
`;

const ReviewOrderWhere = styled.span`
  padding: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.deepGrey};
`;

const ReviewDate = styled(ReviewOrderWhere)`
  margin-right: 10px;
`;

const ReviewItemName = styled.div`
  margin: 10px 0 0px 0px;
  padding: 6px;
  ${({ theme }) => theme.fontWeightBold};
  font-size: 13px;
`;

const ReviewImg = styled.img`
  width: 112px;
  height: 112px;
  margin: 20px 0;
`;

const ReviewText = styled.p`
  font-size: 15px;
`;

const ReviewCreate = styled.form`
  height: 80px;
  width: 100%;
  margin-top: 15px;
`;

const ReviewInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.grey};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.grey};
  }
`;

const ReviewBtnList = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'flex-end')};
  margin-top: 10px;
`;

const ReviewImgPushBtn = styled.button`
  ${({ theme }) => theme.flexMixin('', 'center', 'center')};
  width: 80px;
  height: 35px;
  border-radius: 10px;
  background-color: white;
  color: ${({ theme }) => theme.skyBlue};
  border: 1px solid ${({ theme }) => theme.skyBlue};
  ${({ theme }) => theme.fontWeightBold};

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const ReviewCreateBtn = styled.button`
  ${({ theme }) => theme.flexMixin('', 'center', 'center')};
  width: 80px;
  height: 35px;
  border-radius: 10px;
  background-color: #12acdb;
  color: white;
  border: none;
  ${({ theme }) => theme.fontWeightBold};
  margin-left: 10px;

  &:hover {
    background-color: #369fc2;
    cursor: pointer;
  }
`;

export default ProductDetail;
