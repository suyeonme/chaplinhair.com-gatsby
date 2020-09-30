import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';
// Link to home on Logo

import ChaplinLogo from 'assets/icons/logo.png';
import HamburgerMenu from 'components/Layout/Nav/HamburgerMenu';

const NavContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 0.8rem 1rem;
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
    <NavContainer>
      <LogoContainer>
        <Logo src={ChaplinLogo} />
      </LogoContainer>
      <HamburgerMenu />
    </NavContainer>
  );
};

export default Header;
