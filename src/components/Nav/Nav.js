import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import SecondNav from '../Nav/SecondNav';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import { Cart } from '@styled-icons/bootstrap/Cart';
import { Pencil } from '@styled-icons/bootstrap/Pencil';

function Nav() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch('/data/navTest.json')
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // }, []);

  // const [inputSearch, setInputSearch] = useState('');
  // const searchValue = e => setInputSearch(e.target.value);

  //const doSth = () => {
  //  navigate(`productions/feed?query=${inputSearch}`);
  //};

  // const reultSearch = setInputSearch.filter; //(data)가 들어가는게 아니라?

  return (
    <>
      <Navbar>
        <NavSection>
          <LogoSection>
            <Link to="">
              <Logo alt="로고" src="/images/symbolwhite.png" />
            </Link>
          </LogoSection>
          <CategorySection>
            <CommunityCategoryLink to="/">
              <CommunityCategory>스토어</CommunityCategory>
            </CommunityCategoryLink>
            <StoreCategory>커뮤니티</StoreCategory>
          </CategorySection>
          <RightSection>
            <SearchBox>
              <SearchIcon /* onClick={doSth} */ />
              <SearchInput type="text" /* onChange={searchValue}  */ />
            </SearchBox>
            <LoginLink to="login">로그인</LoginLink>
            <CartLink to="/cart">
              <CartIcon />
            </CartLink>
            <WritingICon />
          </RightSection>
        </NavSection>
      </Navbar>
      <SecondNav />
    </>
  );
}

const stopMouseDrag = css`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Navbar = styled.nav`
  ${stopMouseDrag}
  position: sticky;
  z-index: 20;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
  height: 60px;
  padding: 10px 0;
`;

const LogoSection = styled.div`
  width: 140px;
`;

const Logo = styled.img`
  width: 112px;
  height: 25px;
`;

// const Logo = styled.img.attrs(props => ({
//   alt: '로고',
//   src:
//     props.color === 'white'
//       ? '/images/symbolwhite.png'
//       : '/images/symbolbk.png',
// }))`
//   width: 75px;
//   height: 30px;
// `;

const CategorySection = styled.div`
  width: 300px;
`;

const CommunityCategoryLink = styled(Link)`
  text-decoration: none;
`;

const CommunityCategory = styled.a`
  color: white;
  font-size: ${({ theme }) => theme.fontRegular};
  cursor: pointer;
`;

const StoreCategory = styled(CommunityCategory)`
  margin-left: 10px;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 720px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(MagnifyingGlass)`
  height: 25px;
  color: white;
  cursor: pointer;
`;

const SearchInput = styled.input`
  margin-left: 5px;
`;

const CartLink = styled(Link)`
  margin-left: 10px;
`;

const CartIcon = styled(Cart)`
  height: 25px;
  color: white;
`;

const LoginLink = styled(Link)`
  margin-left: 100px;
  border: none;
  background-color: none;
  color: white;
  font-size: ${({ theme }) => theme.fontRegular};
  text-decoration: none;
  cursor: pointer;
`;

const WritingICon = styled(Pencil)`
  height: 25px;
  margin-left: 10px;
  color: white;
  cursor: pointer;
`;

export default Nav;
