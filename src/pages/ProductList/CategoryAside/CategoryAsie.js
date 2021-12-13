import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CategoryAside({ categoryData, goMainCategories, goSubCategories }) {
  return (
    <CategoryListWrap>
      <CategoryList>
        {categoryData.map(categories => {
          return (
            <CategoryTitle
              key={categories.category_id}
              onClick={() => goMainCategories}
              to={`?category_id=${categories.category_id}`}
            >
              {categories.category_name}
              {categories.sub_category.map(subCategory => {
                return (
                  <SubCategoryTitle
                    key={subCategory.sub_category_id}
                    onClick={() => goSubCategories}
                    to={`?sub_category_id=${subCategory.sub_category_id}`}
                  >
                    {subCategory.sub_category_name}
                  </SubCategoryTitle>
                );
              })}
            </CategoryTitle>
          );
        })}
      </CategoryList>
    </CategoryListWrap>
  );
}

export default CategoryAside;
const CategoryListWrap = styled.ul`
  border-right: 1px so]id #333;
  padding-right: 20px;
`;

const CategoryList = styled.li`
  padding: 10px;
`;

const CategoryTitle = styled(Link)`
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: 500;
  color: #333;
`;

const SubCategoryTitle = styled(Link)`
  display: block;
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 5px 0 0 10px;
  color: #333;
`;
