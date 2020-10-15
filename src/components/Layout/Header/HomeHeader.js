import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import mobileImg from 'assets/img/header-mobile.jpg';
import desktopImg from 'assets/img/header.jpg';
import titleImg from 'assets/icons/header-title.svg';
import { Overlay } from 'styles/style';

const Container = styled.header`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  padding-top: 3rem;

  @media screen and (max-width: 36rem) {
    position: relative;
    padding-top: 4.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  height: auto;

  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;

const DesktopImg = styled.img`
  @media screen and (max-width: 36rem) {
    display: none;
  }
`;

const MobileImg = styled.img`
  display: none;

  @media screen and (max-width: 36rem) {
    display: block;
  }
`;

const Title = styled.div`
  width: 10%;
  height: auto;

  opacity: 0;
  transform: translateX(60px);

  @media screen and (max-width: 36rem) {
    width: 14%;
    position: absolute;
    top: -5rem;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    top: -10rem;
  }

  @media screen and (max-width: 20rem) {
    width: 16%;
  }
`;

const HomeHeader = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.4, ease: 'power4.inOut' },
    });

    tl.to(imgRef.current, { width: 0, delay: 0.5 })
      .to(
        textRef.current,
        {
          opacity: 1,
          x: 0,
        },
        '-=0.9',
      )
      .to(
        textRef.current,
        {
          x: 0,
          scale: 1,
          duration: 0.4,
        },
        '-=0.4',
      );
  }, []);

  return (
    <Container>
      <Title ref={textRef}>
        <img src={titleImg} alt="채플린 헤어" />
      </Title>

      <ImageContainer>
        <DesktopImg src={desktopImg} alt="채플린 헤어" />
        <MobileImg src={mobileImg} alt="채플린 헤어" />
        <Overlay ref={imgRef} color="black" />
      </ImageContainer>
    </Container>
  );
};

export default HomeHeader;
