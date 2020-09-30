import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

const StyledLink = styled(Link)`
  width: 16%;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
`;

const Header = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <StyledLink to="/">
          <Logo src={ChaplinLogo} />
        </StyledLink>
      </LogoContainer>
      <HamburgerMenu />
    </NavContainer>
  );
};

export default Header;
