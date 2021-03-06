import React, { useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import chaplin from 'assets/icons/logo.png';
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
    if (show) document.body.style.overflowY = 'hidden';
    return () => (document.body.style.overflowY = 'auto');
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

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            instagram
            youtube
            blog
          }
        }
      }
    }
  `);

  const items = [
    { path: '/', en: 'Home', ko: '홈' },
    { path: '/about', en: 'About', ko: '소개' },
    { path: '/team', en: 'Team', ko: '팀' },
    { path: '/joinWithUs', en: 'Join With Us', ko: '파트너쉽' },
  ];

  const socials = [
    { name: 'Instagram', link: data.site.siteMetadata.socialLinks.instagram },
    { name: 'Youtube', link: data.site.siteMetadata.socialLinks.youtube },
    { name: 'Blog', link: data.site.siteMetadata.socialLinks.blog },
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
                <img src={chaplin} alt="채플린헤어" />
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
                    {item.en}
                    <span>{item.ko}</span>
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

Nav.propTypes = {
  setShow: PropTypes.func,
  show: PropTypes.bool,
};
