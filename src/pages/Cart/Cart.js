import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../src/config';
import styled from 'styled-components';
import ProductBox from './ProductBox';
import OrderBox from './OrderBox';

function Cart() {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.cart, {
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setProductList(result);
      });
  }, []);

  // MEMO: 페이지 유지
  useEffect(() => {
    fetch(API.cart, {
      method: 'PATCH',
      header: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        product_id: 'id', // id ???
      }),
    })
      .then(res => res.json())
      .then(result => {});
  }, []);

  // MEMO: 삭제 버튼 ---> 오류
  const activeDeleteBtn = product_id => {
    fetch(API.cart, {
      method: 'DELETE',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
    }).then(result => {
      result.status === 204
        ? setProductList(
            productList.filter(item => item.product_id !== product_id)
          )
        : alert('다시 시도해 주세요');
    });
  };

  const increaseCount = targetId => {
    const newProductList = productList.map(item => {
      if (item.product_id === targetId) {
        return {
          ...item,
          product_quantity: parseInt(item.product_quantity) + 1,
        };
      } else {
        return item;
      }
    });
    setProductList(newProductList);
    interactQuantity();
  };

  const decreaseCount = targetId => {
    const newProductList = productList.map(item => {
      if (item.product_id === targetId) {
        return {
          ...item,
          product_quantity: item.product_quantity - 1,
        };
      } else {
        return item;
      }
    });
    setProductList(newProductList);
    interactQuantity();
  };

  // MEMO: 수량 - 서버와 주고 받기
  const interactQuantity = (itemId, itemQuantity) => {
    fetch(API.cart, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        product_id: itemId,
        product_quantity: itemQuantity,
      }),
    })
      .then(res => res.json())
      .then(result => {}); // ???
  };

  const totalPrice = productList.reduce(
    (acc, current) =>
      acc + parseInt(current.product_price * current.product_quantity),
    0
  );

  // MEMO: 결제버튼
  const [orderButton, setOrderButton] = useState(false);

  function activeOrderBtn() {
    if (orderButton !== true) {
      return alert('먼저 로그인을 하시오');
    }

    fetch(API.cart, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(result => {
        setOrderButton(true);
        if (result.message === 'SUCCESS') {
          setOrderButton(true);
          navigate('/orders');
          alert('주문이 완료되었습니다');
        }
      });
  }

  return (
    <CartAll>
      <CartContainer>
        <CartListSection>
          <ProductBoxSection>
            {productList.map(abc => {
              return (
                <ProductBox
                  key={abc.product_id}
                  id={abc.product_id}
                  name={abc.product_name}
                  brand={abc.product_brand}
                  image={abc.product_image}
                  price={abc.product_price}
                  quantity={abc.product_quantity}
                  increaseCount={increaseCount}
                  decreaseCount={decreaseCount}
                  activeDeleteBtn={activeDeleteBtn}
                />
              );
            })}
          </ProductBoxSection>
        </CartListSection>
        <CartOrderSection>
          <OrderBox totalPrice={totalPrice} activeOrderBtn={activeOrderBtn} />
        </CartOrderSection>
      </CartContainer>
    </CartAll>
  );
}

export default Cart;

const CartAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 1050px;
  padding-top: 30px;
`;

const CartListSection = styled.div`
  width: 600px;
`;
const ProductBoxSection = styled.div``;

const CartOrderSection = styled.div`
  position: sticky;
  top: 80px;
  padding-top: 30px;
  width: 400px;
`;
