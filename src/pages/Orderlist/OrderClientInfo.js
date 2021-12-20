import styled from 'styled-components';

function OrderClientInfo({ info }) {
  return (
    <ClientAddressInfo>
      <div>
        <ClientInfoTitle>배송지 정보</ClientInfoTitle>
        <ClientInfoDataWrap>
          <ClientDataTag>받는사람</ClientDataTag>
          <ClientDataContents>홍길동</ClientDataContents>
        </ClientInfoDataWrap>
        <ClientInfoDataWrap>
          <ClientDataTag>연락처</ClientDataTag>
          <ClientDataContents>010-3322-9788</ClientDataContents>
        </ClientInfoDataWrap>
        <ClientInfoDataWrap>
          <ClientDataTag>주소</ClientDataTag>
          <ClientDataContents>서울특별시 강남구</ClientDataContents>
        </ClientInfoDataWrap>
        <ClientInfoDataWrap>
          <ClientDataTag>배송메모</ClientDataTag>
          <ClientDataContents>조심히 와주셈요</ClientDataContents>
        </ClientInfoDataWrap>
      </div>
      <ClientPayInfo>
        <ClientInfoTitle>결제정보</ClientInfoTitle>
        <ClientInfoDataWrap>
          <ClientDataTag>상품금액</ClientDataTag>
          <ClientDataContents>홍길동</ClientDataContents>
        </ClientInfoDataWrap>
        <ClientInfoDataWrap>
          <ClientDataTag>결제금액</ClientDataTag>
          <ClientDataContents>1000원</ClientDataContents>
        </ClientInfoDataWrap>
        <ClientInfoDataWrap>
          <ClientDataTag>결제방법</ClientDataTag>
          <ClientDataContents>포인트 결제</ClientDataContents>
        </ClientInfoDataWrap>
      </ClientPayInfo>
    </ClientAddressInfo>
  );
}

const ClientAddressInfo = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  div {
    width: 500px;
  }
`;

const ClientInfoTitle = styled.div`
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontMedium};
`;

const ClientInfoDataWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  padding: 20px 0;
`;

const ClientDataTag = styled.span``;

const ClientDataContents = styled.span`
  padding-left: 20px;
`;

const ClientPayInfo = styled.div``;

export default OrderClientInfo;
