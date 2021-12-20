import styled from 'styled-components';

function OrderInfo({ info }) {
  return (
    <OrderInfoWarp>
      <InfoHeader>
        <OrderTopTitle>주문상세정보</OrderTopTitle>
        <OrderInfoNumber>
          <OrderNumber>주문번호: 1231123</OrderNumber>
          <OrderDate>주문일자: 2021.12.15</OrderDate>
        </OrderInfoNumber>
      </InfoHeader>
      <OrderInfoData>
        <OrderInfoContents>
          <OrderProductName>벨로시티에서 나는 귀한 씨앗</OrderProductName>
          <OrderProductPrice>3003원</OrderProductPrice>
          <OrderStatus>배송중</OrderStatus>
        </OrderInfoContents>
      </OrderInfoData>
    </OrderInfoWarp>
  );
}

const OrderInfoWarp = styled.article`
  ${({ theme }) => theme.flexMixin('column', 'flex-start', '')};
`;

const InfoHeader = styled.div`
  ${({ theme }) => theme.flexMixin('column', 'flex-start')};
  font-size: ${({ theme }) => theme.fontSmall};
`;

const OrderTopTitle = styled.div`
  padding-bottom: 20px;
  font-size: ${({ theme }) => theme.fontMedium};
`;

const OrderInfoNumber = styled.div`
  ${({ theme }) => theme.flexMixin('', 'flex-start')};
  padding-bottom: 20px;
`;

const OrderNumber = styled.div`
  padding-right: 20px;
`;

const OrderDate = styled.div``;

const OrderInfoData = styled.article`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  width: 100%;
`;

const OrderInfoContents = styled.div``;

const OrderProductName = styled.h2`
  font-size: ${({ theme }) => theme.fontMedium};
  padding-bottom: 20px;
`;

const OrderProductPrice = styled.div`
  padding-bottom: 20px;
`;

const OrderStatus = styled.div`
  padding-bottom: 20px;
`;

export default OrderInfo;
