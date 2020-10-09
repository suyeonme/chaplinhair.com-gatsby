import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import HeaderImg from 'assets/img/header.jpg';
import HeaderTitle from 'assets/icons/header-title.svg';

const Container = styled.header`
  width: 100%;
  min-height: 100vh;
  background-color: black;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 0;
  background: url(${HeaderImg});
  background-size: cover;
  background-position: center center;
`;

const Title = styled.img`
  width: 7rem;
  height: auto;
  display: block;
  margin: 0 1rem;
  transform: translateX(30px);
  opacity: 0;
`;

const HomeHeader = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(imgRef.current, 1, {
      height: '100%',
      ease: 'power2.easeInOut',
      delay: 0.4,
    }).to(textRef.current, 1, {
      opacity: 1,
      x: '0',
      ease: 'power2.easeInOut',
    });
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Title src={HeaderTitle} alt="채플린 헤어" ref={textRef} />
        <Image alt="채플린 헤어" ref={imgRef} />
      </HeaderContainer>
    </Container>
  );
};

export default HomeHeader;
