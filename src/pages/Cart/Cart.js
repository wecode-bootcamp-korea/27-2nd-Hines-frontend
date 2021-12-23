import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import styled from 'styled-components';
import ProductBox from './ProductBox';
import OrderBox from './OrderBox';

function Cart() {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.CART}`, {
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data.result);
      });
  }, []);

  const activeDeleteBtn = (targetId, cartId) => {
    fetch(`${API.CART}?cartIds=${cartId}`, {
      method: 'DELETE',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        cartIds: cartId,
      }),
    }).then(result => {
      if (result.status === 204) {
        alert('장바구니에서 삭제되었습니다.');
        setProductList(
          productList.filter(item => item.product_id !== targetId)
        );
      } else {
        alert('다시 시도해 주세요');
      }
    });
  };

  const increaseCount = (targetId, targetQuantity) => {
    fetch(`${API.CART}/${targetId}`, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        product_id: targetId,
        quantity: targetQuantity + 1,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if ((result.message = 'SUCCESS')) {
          const newProductList = productList.map(item => {
            if (item.product_id === targetId) {
              return {
                ...item,
                quantity: parseInt(item.quantity) + 1,
              };
            } else {
              return item;
            }
          });
          setProductList(newProductList);
        }
      });
  };

  const decreaseCount = (targetId, targetQuantity) => {
    if (targetQuantity === 1) {
      alert('수량은 1개 미만으로 선택할 수 없습니다.');
      return;
    }
    fetch(`${API.CART}/${targetId}`, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        product_id: targetId,
        quantity: targetQuantity - 1,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if ((result.message = 'SUCCESS')) {
          const newProductList = productList.map(item => {
            if (item.product_id === targetId) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else {
              return item;
            }
          });
          setProductList(newProductList);
        }
      });
  };

  const totalPrice = () =>
    productList.reduce(
      (acc, current) =>
        acc + parseInt(current.product_price * current.quantity),
      0
    );

  const activeOrderBtn = () => {
    const orderCart = productList.map(item => item.cart_id);
    fetch(`${API.ORDERS}`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        cart_ids: orderCart,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'INVALID_CART') {
          alert('카트가 비어있습니다');
        }
        if (result.message === 'Created') {
          navigate('/orderlist');
          alert('주문이 완료되었습니다');
        }
      });
  };

  return (
    <CartAll>
      <CartContainer>
        <CartListSection>
          <ProductBoxSection>
            {productList.map(abc => {
              return (
                <ProductBox
                  key={abc.cart_id}
                  cartId={abc.cart_id}
                  quantity={abc.quantity}
                  id={abc.product_id}
                  name={abc.product_name}
                  price={abc.product_price}
                  brand={abc.product_brand}
                  image={abc.product_image}
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
