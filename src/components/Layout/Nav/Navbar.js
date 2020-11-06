import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from 'assets/icons/logo.png';
import HamburgerMenu from 'components/Layout/Nav/HamburgerMenu';
import Nav from 'components/Layout/Nav/Nav';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  padding: 0 2rem;
  z-index: 15;
  position: ${(props) => (props.isScrolled ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
`;

const LogoContainer = styled.div`
  width: 17rem;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
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
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>

      <HamburgerMenu setShow={setShow} show={show} />
      <Nav show={show} setShow={setShow} />
    </NavbarContainer>
  );
};

export default Navbar;
