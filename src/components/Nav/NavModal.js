import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

function NavModal() {
  return (
    <NavModalBar>
      <ModalContainer>
        <ModalCategoryBox>
          <ModalCategory>
            <StoreHome to="/">스토어홈</StoreHome>
            <Category to="/category">카테고리</Category>
            <Best to="">베스트</Best>
            <TodayDeal to="">오늘의딜</TodayDeal>
          </ModalCategory>
        </ModalCategoryBox>
      </ModalContainer>
    </NavModalBar>
  );
}

const categoryText = css`
  padding-right: 15px;
  color: white;
  font-size: ${({ theme }) => theme.fontMedium};
  text-decoration: none;
`;
// const ModalBackground = styled.div`
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.3);
//   z-index: 999;
// `;

const NavModalBar = styled.div`
  /* position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999; */
`;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  top: 130px;
  left: 0px;
  border-top: solid 1px white;
  background-color: black;
  z-index: 1;
  /* transition: width 2s;
  transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75); */
`;

const ModalCategoryBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row-reverse;
  width: 1050px;
`;

const ModalCategory = styled.div``;

const StoreHome = styled(Link)`
  ${categoryText}
`;

const Category = styled(Link)`
  ${categoryText}
`;

const Best = styled(Link)`
  ${categoryText}
`;

const TodayDeal = styled(Link)`
  ${categoryText}
`;

export default NavModal;
