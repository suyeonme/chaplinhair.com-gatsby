import React from 'react';
import styled from 'styled-components';

import ChaplinLogo from 'assets/icons/logo.png';
import HamburgerMenu from 'components/Header/HamburgerMenu';

const HeaderContainer = styled.div`
  background-color: black;
  width: 100%;
  height: auto;
`;

const Logo = styled.img`
  width: 15%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={ChaplinLogo} />
      <HamburgerMenu />
    </HeaderContainer>
  );
};

export default Header;
