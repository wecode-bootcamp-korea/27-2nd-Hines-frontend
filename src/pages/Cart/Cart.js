import React, { useEffect, useState, useNavigate } from 'react';
import styled, { css } from 'styled-components';
import ProductBox from './ProductBox';
import OrderBox from './OrderBox';

function Cart() {
  // MEMO: 데이터 가져오기 -----> 완료!
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/cartTest.json', {
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
  // useEffect(() => {
  //   fetch('/data/cartTest.json', {
  //     method: 'PATCH',
  //     header: {
  //       Authorization: sessionStorage.getItem('hines_token'),
  //     },
  //     body: JSON.stringify({
  //       product_id: 'id', // id ???
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {});
  // }, []);

  // MEMO: 삭제 버튼
  const activeDeleteBtn = product_id => {
    fetch('/data/cartTest.json', {
      method: 'DELETE',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
    }).then(result => {
      result.status === 204
        ? setProductList(
            productList.filter(item => item.product_id !== product_id)
          )
        : alert('실패');
    });
  };

  const increaseCount = id => {};

  const decreaseCount = id => {
    const changeQuantity = productList.filter(item => {
      if (item.product_id === id) {
        return productList.filter(item => item.product_quantity - 1);
      }
    });
  };

  // MEMO: 수량 - 서버와 주고 받기
  const interactQuantity = (itemId, itemQuantity) => {
    fetch('/data/cartTest.json', {
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

  // MEMO: 총 결제금액 -----> 완료!
  const totalQuantity = productList.reduce(
    (acc, current) => acc + parseInt(current.product_quantity),
    0
  );
  const totalPrice = productList.reduce(
    (acc, current) => acc + parseInt(current.product_price),
    0
  );
  const totalAcc = totalQuantity * totalPrice;

  // MEMO: 결제버튼
  const [orderButton, setOrderButton] = useState(false);

  function activeOrderBtn(id) {
    if (orderButton !== true) {
      return alert('먼저 로그인을 하시오');
    }

    fetch('/data/cartTest.json', {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('hines_token'),
      },
      body: JSON.stringify({
        product_id: id, // ???
      }),
    })
      .then(res => res.json())
      .then(result => {
        setOrderButton(true);
        if (result.message === 'SUCCESS') {
          setOrderButton(true);
          alert('주문이 완료되었습니다');
        }
      });
  }

  return (
    <CartAll>
      <CartContainer>
        <CartListSection>
          <CheckboxSection>
            <AllCheckboxSection>
              <AllCheckbox type="checkbox" />
              <div>모두선택</div>
            </AllCheckboxSection>
            <OptionDelete>선택삭제</OptionDelete>
          </CheckboxSection>
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
                />
              );
            })}
          </ProductBoxSection>
        </CartListSection>
        <CartOrderSection>
          <OrderBox totalAccProps={totalAcc} activeOrderBtn={activeOrderBtn} />
        </CartOrderSection>
      </CartContainer>
    </CartAll>
  );
}

export default Cart;

const spaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const checkboxText = css`
  font-size: ${({ theme }) => theme.fontRegular};
  font-weight: 600;
`;

const CartAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1050px;
  padding-top: 30px;
`;

const CartListSection = styled.div`
  width: 600px;
`;

const CheckboxSection = styled.div`
  ${spaceBetween}
  height: 22px;
`;

const ProductBoxSection = styled.div``;

const AllCheckboxSection = styled.div`
  ${checkboxText}
  display: flex;
  align-items: center;
`;
const AllCheckbox = styled.input`
  width: 14px;
  height: 14px;
`;

const OptionDelete = styled.div`
  ${checkboxText}
`;

const CartOrderSection = styled.div`
  padding-top: 22px;
  width: 400px;
`;
