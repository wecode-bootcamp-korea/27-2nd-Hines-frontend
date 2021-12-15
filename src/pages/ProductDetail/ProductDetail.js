import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Plus } from '@styled-icons/bootstrap/Plus';
import { Dash } from '@styled-icons/bootstrap/Dash';

function ProductDetail() {
  // Router.js 파일에
  // <Route path="/productdetail:productId" element={<ProductDetail />} />
  // 이렇게 작성하고 그 다음 useParams() 로 id 값을 가져온다.
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // console.log(product_id); // id 값이 2이면 2가 출력

  // // 콘솔로그 했을 때 monsterId 프로퍼티는 아무데서나 나오는 것이 아니라
  // // Router.js 파일에서 나오는 것

  useEffect(() => {
    // useParams 로 갖고 온 product_id 와 router.js 파일에 작성한 productId 값
    // ${:product_id} 이게 맞나?
    fetch(`http://10.58.0.184:8000/products/${product_id}`)
      // 그 id 를 보여주세요 get
      .then(res => res.json())
      .then(data => setProduct(data.result));
  }, [product_id]); // product_id

  // console.log(product);

  // useEffect 는 랜더링 후 무조건 한 번은 useEffect 가 실행된다.
  // 그러나 dependency 안에 변수를 지정하게 되면
  // 다른 값들과 상관없이 지정된 값이 변해야 지만
  // useEffect 가 실행된다.
  // dependenfy 는 배열로 되어있기 때문에
  // 여러 변수를 dependency로 사용할 수 있다.

  const AddToCartBtn = () => {
    useEffect(() => {
      fetch('', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('hines_token'),
        },
        body: JSON.stringify({
          product_id,
          quantity: quantity,
        }),
      })
        .then(res => {
          if (res.status === 200) {
            alert('장바구니에 상품이 담겼습니다.');
          } else if (res.status === 403) {
            return res.json();
          }
        })
        .then(res => {
          console.log('에러 메시지 ->', res.message);
        });
    }, []);
  };

  const onPlusQuantityBtn = () => {
    setQuantity(quantity + 1);
  };

  const onMinusQuantityBtn = () => {
    if (quantity === 1) {
      alert('최소 수량은 1개입니다.');
      return;
    }
    setQuantity(quantity - 1);
  };

  const [imgUrl, setImgUrl] = useState(true);
  // 1. state 변수에 변수를 넣어서는 안됨
  // 2. onClick

  // product 하면 안되고 product.image_url 하면 됨
  return (
    <ProductDetailBg>
      {product.image_url && (
        <div>
          <ProductContainer>
            <CategoryList>
              <MainCategory>{product.category_name}</MainCategory>
              <Arrow>{'>'}</Arrow>
              <SubCategory>{product.sub_category_name}</SubCategory>
            </CategoryList>
            <Product>
              <ProductImgsUl>
                <ProductImgLi
                  onClick={() => {
                    setImgUrl(true);
                  }}
                >
                  <ProductImg
                    src={product.thumbnail_image_url}
                    alt="item-img"
                  />
                </ProductImgLi>
                <ProductImgLi
                  onClick={() => {
                    setImgUrl(false);
                  }}
                >
                  <ProductImg src={product.image_url[1]} alt="item-img" />
                </ProductImgLi>
              </ProductImgsUl>
              <ProductMainImg>
                <ProductMainImgUrl
                  src={
                    imgUrl ? product.thumbnail_image_url : product.image_url[1]
                  }
                  alt="item-Main-img"
                />
              </ProductMainImg>

              <ProductInfo>
                <BrandName>{product.brand}</BrandName>
                <ProductName>{product.product_name}</ProductName>
                <Price>
                  <PriceNum>{product.price}</PriceNum>원
                </Price>
                <Description>{product.description}</Description>
                <BrandName>{product.brand}</BrandName>
                <Cart>
                  <CartText>수량</CartText>
                  <CountControl>
                    <Count>{quantity}</Count>
                    <MinusBtn onClick={onMinusQuantityBtn} quantity={quantity}>
                      -
                    </MinusBtn>
                    <PlusBtn onClick={onPlusQuantityBtn}>+</PlusBtn>
                  </CountControl>
                </Cart>
                <TotalPriceContainer>
                  <TotalPriceTitle>주문금액</TotalPriceTitle>
                  <TotalPrice>
                    <TotalPriceNum>{product.price * quantity}</TotalPriceNum>원
                  </TotalPrice>
                </TotalPriceContainer>
                <BtnList>
                  <CartBtn onClick={AddToCartBtn}>장바구니</CartBtn>
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
            <ProductMainPageImg
              src={product.thumbnail_image_url}
              alt="item-img"
            />
            <ProductMainPageImg src={product.image_url[1]} alt="item-img" />
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
              <ReviewImg src="/images/sample.png" alt="item-img" />
              <ReviewText>
                150 트리에 4개전구 감았어요! 생각보다 풍성하게 감기네여 :) 너무
                이뻐요 남편이 백화점 트리장식 같다고 고급지다고 하네여 ~ 아기도
                너무 좋아합니다!
              </ReviewText>
            </ReviewContent>
            <ReviewContent>
              <ReviewId>오킨비</ReviewId>
              <ReviewDate>2021.11.16</ReviewDate>
              <ReviewOrderWhere>Hines 구매</ReviewOrderWhere>
              <ReviewItemName>블랙라인</ReviewItemName>
              <ReviewImg src="/images/sample.png" alt="item-img" />
              <ReviewText>
                150 트리에 4개전구 감았어요! 생각보다 풍성하게 감기네여 :) 너무
                이뻐요 남편이 백화점 트리장식 같다고 고급지다고 하네여 ~ 아기도
                너무 좋아합니다!
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
        </div>
      )}
    </ProductDetailBg>
  );
}

const ProductDetailBg = styled.div`
  margin-bottom: 100px;
`;

const ProductContainer = styled.div`
  margin: 30px auto 50px auto;
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
  margin: 0 20px 10px 0;
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

const ProductMainImg = styled.div`
  width: 500px;
  height: 500px;
  margin-right: 50px;
`;

const ProductMainImgUrl = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  width: 380px;
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
  padding-bottom: 65px;
`;
const Cart = styled.div`
  ${({ theme }) => theme.flexMixin('', 'center', 'space-between')};
  height: 55px;
  padding: 10px 40px;
  border-top: 1px solid ${({ theme }) => theme.grey};
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontRegular};
`;

const CartText = styled.span`
  ${({ theme }) => theme.flexMixin('', 'center', '')};
`;

const CountControl = styled.div``;

const PlusBtn = styled(Plus)`
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const MinusBtn = styled(Dash)`
  margin-left: 50px;
  height: 20px;
  color: ${({ theme, quantity }) =>
    quantity === 1 ? theme.middleGrey : 'black'};
  cursor: ${({ quantity }) => (quantity === 1 ? 'default' : 'pointer')};
`;

const Count = styled.span`
  padding: 10px;
  margin-left: 50px;
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
