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
              </CountControl>
              <CartProductPrice>17,900</CartProductPrice>
              <DeleteBtn>x</DeleteBtn>
            </Cart>
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
  color: gray;
`;
const Arrow = styled.span`
  margin-right: 10px;
  color: gray;
`;
const SubCategory = styled.span`
  color: gray;
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
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: bold;
  color: gray;
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
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  padding-bottom: 100px;
`;
const Cart = styled.div`
  /* background-color: #f2f2f2; */
  border-top: 1px solid ${({ theme }) => theme.grey};
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  border-radius: 3px;
  height: 55px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
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
const MinusBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.grey};
  color: #b0b0b0;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;
const Count = styled.span`
  padding: 10px;
`;

const DeleteBtn = styled.span`
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const CartProductPrice = styled.span``;

const BtnList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const CartBtn = styled.button`
  background-color: white;
  width: 185px;
  height: 50px;
  padding: 13px 10px 14px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  color: #12acdb;
  border: 1px solid #12acdb;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const OrderBtn = styled.button`
  background-color: #12acdb;
  width: 185px;
  height: 50px;
  padding: 13px 10px 14px 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: #369fc2;
    cursor: pointer;
  }
`;

const ProductDetailBtnList = styled.ul`
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.grey};
`;
const ProductInfoBtn = styled.li`
  padding: 14px 10px 15px 10px;
  width: 132px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    color: #12acdb;
  }
`;
const ReviewBtn = styled.li`
  padding: 14px 10px 15px 10px;
  width: 132px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    color: #12acdb;
  }
`;

const Btn = styled.li`
  padding: 14px 10px 15px 10px;
  width: 132px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    color: #12acdb;
  }
`;
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
  font-size: 18px;
  font-weight: bold;
  padding-left: 5px;
`;

const ReviewFilter = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.grey};
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  display: flex;
  padding: 12px 0 12px 0;
  margin-top: 20px;
`;

const ReviewBest = styled.li`
  font-weight: bold;
  padding: 5px;
  font-size: 13px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
    color: #adadad;
  }
`;
const ReviewLast = styled.li`
  font-weight: bold;
  padding: 5px;
  font-size: 13px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
    color: #adadad;
  }
`;
const ReviewPhoto = styled.li`
  font-weight: bold;
  padding: 5px;
  font-size: 13px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
    color: #adadad;
  }
`;

const ReviewContent = styled.div`
  width: 692px;
  height: 300px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  box-sizing: border-box;
`;
const ReviewId = styled.p`
  font-size: 13px;
  padding: 6px;
`;
const ReviewOrderWhere = styled.span`
  font-size: 13px;
  padding: 6px;
  color: gray;
`;
const ReviewDate = styled(ReviewOrderWhere)`
  margin-right: 10px;
`;
const ReviewItemName = styled.div`
  font-size: 13px;
  padding: 6px;
  font-weight: bold;
  margin: 10px 0 0px 0px;
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
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
const ReviewImgPushBtn = styled.button`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 10px;
  color: #12acdb;
  border: 1px solid #12acdb;
  width: 80px;
  height: 35px;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const ReviewCreateBtn = styled.button`
  background-color: #12acdb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  width: 80px;
  height: 35px;

  &:hover {
    background-color: #369fc2;
    cursor: pointer;
  }
`;

export default ProductDetail;
