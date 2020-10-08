import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ChaplinLogo from 'assets/icons/logo.png';
import HamburgerMenu from 'components/Layout/Nav/HamburgerMenu';
import Nav from 'components/Layout/Nav/Nav';

const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: black;
  z-index: 5;
  transition: all 0.3s ease-in-out;
  padding: ${(props) => (props.isScrolled ? '0.3rem 1rem' : '0.8rem 1rem')};
  position: ${(props) => props.isScrolled && 'fixed'};
  top: ${(props) => props.isScrolled && '0'};
  left: ${(props) => props.isScrolled && '0'};
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

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <LogoContainer>
        <StyledLink to="/">
          <Logo src={ChaplinLogo} />
        </StyledLink>
      </LogoContainer>
      <HamburgerMenu setShow={setShow} show={show} />
      <Nav show={show} setShow={setShow} />
    </NavbarContainer>
  );
};

export default Navbar;
