import React from 'react';
import styled, { css } from 'styled-components';

function ProductBox({
  id,
  name,
  brand,
  image,
  price,
  quantity,
  activeDeleteBtn,
  onClickMinus,
  onClickPlus,
  inputTotal,
  count,
  setCount,
  increaseCount,
  decreaseCount,
}) {
  return (
    <ListContainer>
      <BrandBox>{brand}</BrandBox>
      <ListBox>
        <CheckboxThumbnail>
          <Thumbnail>
            <ThumbnailImage art="상품이미지" src={image} />
          </Thumbnail>
        </CheckboxThumbnail>
        <ListTopBottom>
          <ListTop>
            <ProductInfo>{name}</ProductInfo>
            <DeleteBtn onClick={() => activeDeleteBtn(id)}>X</DeleteBtn>
          </ListTop>
          <ListBottom>
            <QuantityBox>
              <MinusBtn onClick={() => decreaseCount(id)}>-</MinusBtn>
              <div>{quantity}</div>
              <PlusBtn onClick={() => increaseCount(id)}>+</PlusBtn>
            </QuantityBox>
            <TotalPrice>총액 {price * quantity} 코인</TotalPrice>
          </ListBottom>
        </ListTopBottom>
      </ListBox>
    </ListContainer>
  );
}

export default ProductBox;

const quantityBtnStyle = css`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: black;
  color: white;
`;
const ListContainer = styled.div`
  margin: 30px 0;
  border: solid 1px gray;
`;

const BrandBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: black;
  color: white;
  font-size: ${({ theme }) => theme.fontRegular};
`;

const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  font-size: ${({ theme }) => theme.fontRegular};
  font-weight: 600;
`;

const CheckboxThumbnail = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 170px;
`;

const Thumbnail = styled.div`
  margin-left: 30px;
`;

const ThumbnailImage = styled.img`
  width: 140px;
  height: 140px;
  border: solid 1px gray;
`;

const ListTopBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 350px;
  margin-right: 30px;
`;
const ListTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const ProductInfo = styled.div`
  width: 350px;
  font-size: ${({ theme }) => theme.fontMedium};
`;
const DeleteBtn = styled.button`
  ${quantityBtnStyle}
`;

const ListBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80px;
`;

const QuantityBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
const MinusBtn = styled.button`
  ${quantityBtnStyle}
  margin-right: 10px;
`;

const PlusBtn = styled(MinusBtn)`
  margin-right: 0px;
  margin-left: 10px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;
