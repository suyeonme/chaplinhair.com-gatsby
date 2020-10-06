import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Chaplin from 'assets/icons/logo.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  color: #b8ac79;
  background-color: black;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const LeftWrapper = styled(RightWrapper)`
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 25%;
  height: auto;
`;

const StyledLink = styled(Link)`
  display: block;
  font-family: Playfair Display;
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.3;
`;

const SocialLink = styled.a`
  font-size: 0.8rem;
  font-weight: 400;
  color: #8f8866;
  margin-right: 3rem;
  letter-spacing: 1px;
  transition: color 0.3s ease-in;

  &:hover {
    color: #b8ac79;
  }
`;

const Nav = ({ show }) => {
  useEffect(() => {
    if (show) document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, [show]);

  const items = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Team', to: '/team' },
    { name: 'Join With Us', to: '/joinWithUs' },
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
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Logo>
            <img src={Chaplin} alt="채플린헤어" />
          </Logo>
          <div>
            {socials.map((social, i) => (
              <SocialLink href={social.link} target="_blank" key={i}>
                {social.name}
              </SocialLink>
            ))}
          </div>
        </LeftWrapper>
        <RightWrapper>
          {items.map((item, i) => (
            <StyledLink to={item.to} key={i}>
              {item.name}
            </StyledLink>
          ))}
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Nav;
