import React from 'react';
import styled, { css } from 'styled-components';

function OrderBox({ totalPrice, activeOrderBtn }) {
  return (
    <>
      <OrderBoxSection>
        <ProductAmount>
          <div>총 상품금액</div>
          <div>{totalPrice} 코인</div>
        </ProductAmount>
        <DeliveryFee>
          <div>총 배송비</div>
          <div>0 코인</div>
        </DeliveryFee>
        <DiscountAmount>
          <div>총 할인금액</div>
          <div>0 코인</div>
        </DiscountAmount>
        <PaymentAmount>
          <div>결제금액</div>
          <div>{totalPrice} 코인</div>
        </PaymentAmount>
      </OrderBoxSection>
      <OrderBtnSection>
        <OrderBtn onclick={activeOrderBtn}>구매하기</OrderBtn>
      </OrderBtnSection>
    </>
  );
}

export default OrderBox;

const spaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const orderBoxText = css`
  ${spaceBetween}
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: 600;
`;

const orderBoxTextBottom = css`
  margin-bottom: 15px;
`;

const OrderBoxSection = styled.div`
  height: 180px;
  padding: 10px 15px 0 15px;
  border: solid 1px gray;
`;

const ProductAmount = styled.div`
  ${orderBoxText}
  ${orderBoxTextBottom}
`;
const DeliveryFee = styled.div`
  ${orderBoxText}
  ${orderBoxTextBottom}
`;
const DiscountAmount = styled.div`
  ${orderBoxText}
  ${orderBoxTextBottom}
`;
const PaymentAmount = styled.div`
  ${orderBoxText}
`;

const OrderBtnSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderBtn = styled.button`
  width: 400px;
  height: 60px;
  margin-top: 15px;
  background-color: black;
  color: white;
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: 600;
`;
