import React from 'react';
import { Link } from 'react-router-dom';
import NavModal from '../Nav/NavModal';
import styled, { css } from 'styled-components';
import { useNavModal } from '../../hooks/useNavModal';

function SecondNav() {
  const { navModal, openModal, closeModal } = useNavModal();

  return (
    <SecondNavBar>
      <SecondNavSection onMouseLeave={closeModal}>
        <NavHome to="/">스토어홈</NavHome>
        <NavCategory to="/productlist" onMouseEnter={openModal}>
          카테고리
        </NavCategory>
        {navModal && <NavModal />}
        <NavBest to="">베스트</NavBest>
        <NavTodayDeal to="">오늘의딜</NavTodayDeal>
      </SecondNavSection>
    </SecondNavBar>
  );
}

const stopMouseDrag = css`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const sectionText = css`
  padding-right: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontRegular};
  text-decoration: none;
`;

const SecondNavBar = styled.nav`
  ${stopMouseDrag}
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  background-color: black;
  border-top: solid 1px white;
  z-index: 10;
`;

const SecondNavSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 1050px;
  height: 50px;
`;

const NavHome = styled(Link)`
  ${sectionText}
`;

const NavCategory = styled(Link)`
  ${sectionText}
`;

const NavBest = styled(Link)`
  ${sectionText}
`;

const NavTodayDeal = styled(Link)`
  ${sectionText}
`;

export default SecondNav;
