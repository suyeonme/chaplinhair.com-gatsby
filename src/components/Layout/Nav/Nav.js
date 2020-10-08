import React, { useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

import Chaplin from 'assets/icons/logo.png';
import { showNav, hideNav } from 'components/Layout/Nav/animations';
import {
  Container,
  Wrapper,
  RightWrapper,
  LeftWrapper,
  Logo,
  StyledLink,
  SocialLink,
  Overlay,
} from 'components/Layout/Nav/NavStyles';

const Nav = ({ show, setShow }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const linkRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    if (show) document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, [show]);

  const handleEnter = () => {
    showNav(
      navRef.current,
      overlayRef.current,
      linkRef.current.childNodes,
      logoRef.current,
      socialRef.current,
    );
  };

  const handleExit = () => {
    hideNav(
      linkRef.current.childNodes,
      logoRef.current,
      socialRef.current,
      overlayRef.current,
      navRef.current,
    );
  };

  const items = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Join With Us', path: '/joinWithUs' },
  ];

  const socials = [
    { name: 'Instagram', link: 'https://www.instagram.com/chaplin__hair' },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/channel/UCsMa9_c-dbnRYOLG1Maa2og',
    },
    { name: 'Blog', link: 'https://blog.naver.com/ckffl4325' },
  ];

  return (
    <>
      <Transition
        in={show}
        timeout={{
          enter: 1600,
          exit: 1600,
        }}
        unmountOnExit
        onEnter={handleEnter}
        onExit={handleExit}
      >
        <Container ref={navRef}>
          <Overlay ref={overlayRef} />
          <Wrapper>
            <LeftWrapper>
              <Logo ref={logoRef}>
                <img src={Chaplin} alt="채플린헤어" />
              </Logo>
              <div ref={socialRef}>
                {socials.map((social, i) => (
                  <SocialLink href={social.link} target="_blank" key={i}>
                    {social.name}
                  </SocialLink>
                ))}
              </div>
            </LeftWrapper>
            <RightWrapper ref={linkRef}>
              {items.map((item, i) => (
                <li key={i}>
                  <StyledLink
                    to={item.path}
                    onClick={() => setShow(false)}
                    onMouseEnter={() => setCurrentIndex(i)}
                    iscurrent={currentIndex === i ? 1 : 0}
                  >
                    {item.name}
                  </StyledLink>
                </li>
              ))}
            </RightWrapper>
          </Wrapper>
        </Container>
      </Transition>
    </>
  );
};

export default Nav;
