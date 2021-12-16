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
  increaseCount,
  decreaseCount,
}) {
  return (
    <ListContatiner>
      <BrandBox>{brand}</BrandBox>
      <ListBox>
        <CheckboxThumbnail>
          <Checkbox type="checkbox" />
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
            <TotalPrice>{price * quantity} 코인</TotalPrice>
          </ListBottom>
        </ListTopBottom>
      </ListBox>
    </ListContatiner>
  );
}

export default ProductBox;

const quantityBtnStyle = css`
  width: 25px;
  height: 25px;
`;
const ListContatiner = styled.div`
  margin-bottom: 30px;
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
`;

const CheckboxThumbnail = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 170px;
`;
const Checkbox = styled.input`
  width: 30px;
  height: 30px;
  margin: 0 0 0 15px;
`;

const Thumbnail = styled.div`
  margin-left: 15px;
`;

const ThumbnailImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ListTopBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 390px;
  margin-right: 15px;
`;
const ListTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const ProductInfo = styled.div`
  width: 350px;
`;
const DeleteBtn = styled.button``;

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

const Quantity = styled.input`
  width: 40px;
  height: 20px;
`;

const MinusBtn = styled.button`
  ${quantityBtnStyle}
  margin-right: 5px;
`;

const PlusBtn = styled(MinusBtn)`
  margin-left: 5px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;
