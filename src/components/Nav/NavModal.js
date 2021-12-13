import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import CATEGORY_DATA from './categoryData';

function NavModal() {
  return (
    <div>
      <ModalContainer>
        <ModalCategoryBox>
          <ModalCategory>
            {CATEGORY_DATA.map(categories => {
              return (
                <Category
                  key={categories.id}
                  to={`productlist?category_id=${categories.id}`}
                >
                  {categories.menuName}
                </Category>
              );
            })}
          </ModalCategory>
        </ModalCategoryBox>
      </ModalContainer>
    </div>
  );
}

const categoryText = css`
  padding-right: 15px;
  color: white;
  font-size: ${({ theme }) => theme.fontRegular};
  text-decoration: none;
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
`;

const ModalCategoryBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row-reverse;
  width: 1050px;
`;

const ModalCategory = styled.div``;

const Category = styled(Link)`
  ${categoryText}
`;

export default NavModal;
