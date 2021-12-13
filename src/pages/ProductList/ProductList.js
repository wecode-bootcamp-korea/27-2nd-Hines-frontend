import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Product from './Product/Product';
import CategoryAside from './CategoryAside/CategoryAsie';
import { API } from '../../config';

function ProductList() {
  const [productInfo, setProductInfo] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`${API.PRODUCTS}${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data.result);
      });
  }, [location.search]);

  useEffect(() => {
    fetch(`/data/categoryData.json${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      });
  }, [location.search]);

  const goMainCategories = clickedMenu => {
    const category_id = clickedMenu;
    const queryString = `?category_id=${category_id}`;
    navigate(`${queryString}`);
  };

  const goSubCategories = clickedCategory => {
    const sub_category_id = clickedCategory;
    const queryString = `?sub_category_id=${sub_category_id}`;
    navigate(`${queryString}`);
  };

  return (
    <Main>
      <CategoryBox>
        {categories.map(categoryData => {
          return (
            <CategoryAside
              key={categoryData.category_id}
              goMainCategories={goMainCategories}
              goSubCategories={goSubCategories}
              categoryData={categoryData.category}
            />
          );
        })}
      </CategoryBox>
      <ProductBox>
        <TodayDisplay />
        <TitleWrap>
          <MoreText>More</MoreText>
        </TitleWrap>
        <ProductWrap>
          {productInfo &&
            productInfo.map(items => {
              return <Product items={items} key={items.id} />;
            })}
        </ProductWrap>
      </ProductBox>
    </Main>
  );
}

const Main = styled.main`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  width: 1050px;
  margin: 50px auto;
`;

const CategoryBox = styled.aside`
  width: 150px;
`;

const ProductBox = styled.div`
  width: 800px;
`;

const TodayDisplay = styled.div`
  width: 100%;
`;

const TitleWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  margin: 30px 0;
  border-bottom: 1px solid #333;
  padding-bottom: 15px;
`;

const MoreText = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const ProductWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  width: 100%;
  flex-wrap: wrap;
`;

export default ProductList;
