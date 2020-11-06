import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import mobileImg from 'assets/img/header-mobile.jpg';
import desktopImg from 'assets/img/header.jpg';
import { Overlay } from 'styles/style';

const Container = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: auto;
  transform: translateX(2rem);

  @media screen and (max-width: 576px) {
    order: 2;
    width: 100%;
    transform: translateX(0);
  }
`;

const DesktopImg = styled.img`
  @media screen and (max-width: 576px) {
    display: none;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    display: block;
  }
`;

const MobileImg = styled.img`
  display: none;

  @media screen and (max-width: 576px) {
    display: block;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    display: none;
  }
`;

const Title = styled.h1`
  display: block;
  font-family: 'Great Vibes';
  color: #b8ac79;
  writing-mode: vertical-rl;
  font-size: 11rem;
  letter-spacing: 0.5rem;
  padding-top: 2rem;
  transform: translateX(-2rem);
  opacity: 0;

  @media screen and (max-width: 1200px) {
    font-size: 7rem;
  }

  @media screen and (max-width: 576px) {
    order: 1;
    writing-mode: initial;
    transform: translateX(0) translateY(2rem);
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    padding-top: 0;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    font-size: 10rem;
  }
`;

const HomeHeader = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.4, ease: 'power4.inOut' },
    });

    tl.to(imgRef.current, { width: 0, delay: 0.8 }).to(
      titleRef.current,
      {
        opacity: 1,
      },
      '-=0.7',
    );
  }, []);

  return (
    <Container>
      <ImageContainer>
        <DesktopImg src={desktopImg} alt="채플린 헤어" />
        <MobileImg src={mobileImg} alt="채플린 헤어" />
        <Overlay ref={imgRef} color="black" />
      </ImageContainer>
      <Title ref={titleRef}>Chaplin Hair</Title>
    </Container>
  );
};

export default HomeHeader;
