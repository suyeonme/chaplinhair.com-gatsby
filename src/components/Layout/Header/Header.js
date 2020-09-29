import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';
// Link to home on Logo

import ChaplinLogo from 'assets/icons/logo.png';
import HamburgerMenu from 'components/Layout/Header/HamburgerMenu';

const HeaderContainer = styled.div`
  background-color: black;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  padding: 0.6rem 1rem;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 16%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={ChaplinLogo} />
      </LogoContainer>
      <HamburgerMenu />
    </HeaderContainer>
  );
};

export default Header;
