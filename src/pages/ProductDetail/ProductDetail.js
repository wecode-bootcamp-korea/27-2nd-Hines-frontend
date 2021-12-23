import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Plus } from '@styled-icons/bootstrap/Plus';
import { Dash } from '@styled-icons/bootstrap/Dash';
import { API } from '../../config';
import ReviewPageMoveBtn from '../../components/ReviewPageMoveBtnList';
// 컴포넌트를 쓰려면 import 를 해와야 한다.
// 이때 이름 별칭은 다르게 지정해줘도 된다.

function ProductDetail(isvaildToken) {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const { product_id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`${API.PRODUCTS}/${product_id}`)
      .then(res => res.json())
      .then(data => setProduct(data.result));
  }, [product_id]);

  const AddToCartBtn = () => {
    fetch(`${API.CART}`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        product_id,
        quantity: quantity,
      }),
    }).then(res => {
      if (res.ok) {
        alert('장바구니에 정상적으로 담겼습니다.');
      } else {
        alert('로그인을 해주세요.');
        navigate('/login');
      }
    });
  };

  const goToOrderBtn = () => {
    fetch(`${API.CART}`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        product_id,
        quantity: quantity,
      }),
    }).then(res => {
      if (res.ok) {
        alert('주문내역으로 이동합니다');
        navigate('/cart');
      } else {
        alert('로그인을 해주세요.');
        navigate('/login');
      }
    });
  };

  const onPlusQuantityBtn = () => {
    setQuantity(quantity => quantity + 1);
  };

  const onMinusQuantityBtn = () => {
    if (quantity === 1) {
      alert('최소 수량은 1개입니다.');
      return;
    }
    setQuantity(quantity => quantity - 1);
  };

  const [imgUrl, setImgUrl] = useState(true);
  // 1. state 변수에 변수를 넣어서는 안됨
  // 2. onClick

  useEffect(() => {
    //http://localhost:8000/users${location.search || `limit=5&offset=0`}
    fetch(
      //
      `${API.PRODUCTS}/${product_id}/review?${
        location.search || `limit=5&offset=0`
      }`
    )
      .then(res => res.json())
      .then(data => {
        setReviews(data.result.results);
        setTotalCount(data.result.total_count);
      });
  }, [location.search]);

  const reviewLength = totalCount;
  const createBtnNum =
    reviewLength % 5 === 0
      ? Math.floor(reviewLength / 5)
      : Math.floor(reviewLength / 5) + 1;

  const updateOffset = buttonIndex => {
    const limit = 5; // 화면에 보여줄 데이터 갯수
    const offset = buttonIndex * limit; // 데이터 시작점
    const queryString = `limit=${limit}&offset=${offset}`;

    navigate(`?${queryString}`); // 물음표의 뜻: 쿼리스트링의 시작
  };

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
                  <PriceNum>{Math.floor(product.price)}</PriceNum>B
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
                    <TotalPriceNum>
                      {Math.floor(product.price) * quantity}
                    </TotalPriceNum>
                    B
                  </TotalPrice>
                </TotalPriceContainer>
                <BtnList>
                  <CartBtn onClick={AddToCartBtn}>장바구니</CartBtn>
                  <OrderBtn onClick={goToOrderBtn}>바로구매</OrderBtn>
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
              <ReviewOld>오래된순</ReviewOld>
              <ReviewLast>최신순</ReviewLast>
              <ReviewPhoto>사진리뷰</ReviewPhoto>
            </ReviewFilter>
            {reviews.map((review, i) => {
              return (
                <ReviewContent key={i}>
                  <ReviewId>{review.kakao_id}</ReviewId>
                  <ReviewDate>{review.date}</ReviewDate>
                  <ReviewOrderWhere>Hines 구매</ReviewOrderWhere>
                  <ReviewItemName>{review.product_name}</ReviewItemName>
                  <ReviewImg src={review.image_url[0]} alt="item-img" />
                  <ReviewText>{review.content}</ReviewText>
                </ReviewContent>
              );
            })}

            <ReviewCreate>
              <ReviewInput />
              <ReviewBtnList>
                <ReviewImgPushBtn>사진 등록</ReviewImgPushBtn>
                <ReviewCreateBtn>리뷰 등록</ReviewCreateBtn>
              </ReviewBtnList>
            </ReviewCreate>
            <ReviewPageMoveBtnList>
              <ReviewPageMoveBtn
                createBtnNum={createBtnNum}
                updateOffset={updateOffset}
              />
            </ReviewPageMoveBtnList>
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
  object-fit: cover;
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
  object-fit: cover;
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

const ReviewOld = styled.li`
  padding: 5px;
  margin-right: 6px;
  ${({ theme }) => theme.fontWeightBold};
  font-size: 13px;

  &:hover {
    cursor: pointer;
    color: #adadad;
  }
`;
const ReviewLast = styled(ReviewOld)``;
const ReviewPhoto = styled(ReviewOld)``;

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

const ReviewPageMoveBtnList = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const ReviewPageMoveBtn = styled.button`
//   margin: 5px;
// `;

export default ProductDetail;
