import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import OrderInfo from './OrderInfo';
import OrderClientInfo from './OrderClientInfo';
import { API } from '../../config';

function Orderlist() {
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    fetch(`${API.ORDERS}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setOrderInfo(data));
  }, []);

  return (
    <OrderlistWrap>
      {orderInfo.map(info => {
        return (
          <Fragment key={info.id}>
            <OrderInfo items={info} />
            <OrderClientInfo items={info} />
          </Fragment>
        );
      })}
    </OrderlistWrap>
  );
}

const OrderlistWrap = styled.main`
  width: 1050px;
  margin: 50px auto;
  font-size: ${({ theme }) => theme.fontRegular};
`;

export default Orderlist;
