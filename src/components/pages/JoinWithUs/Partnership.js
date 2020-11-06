import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { fadeIn } from 'animations/animations';
import { Container, TitleH1 } from 'styles/style';
import mobileImg from 'assets/img/partnership-sm.jpg';
import desktopImg from 'assets/img/partnership-lg.jpg';

const Wrapper = styled(Container)`
  padding-bottom: 10rem;
`;

const Title = styled(TitleH1)`
  font-size: 9.5rem;
  font-weight: 900;
  text-transform: none;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin-left: 2rem;

  @media screen and (max-width: 1200px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 576px) {
    text-orientation: initial;
    writing-mode: initial;
    order: 1;
    padding: 0 0 1rem;
    margin: 0 auto;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    font-size: 5rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-left: 2rem;
    order: 2;
  }
`;

const ImgContainer = styled.div`
  width: 70%;
  height: auto;
  margin-left: 7rem;
  position: relative;
  display: flex;
  align-items: start;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0;
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    width: 70%;
    margin-left: 3rem;
    flex-direction: row;
  }

  img {
    @media screen and (max-width: 576px) {
      order: 2;
    }

    @media screen and (orientation: landscape) and (max-width: 812px) {
      order: 1;
    }
  }
`;

const Partnership = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    fadeIn(0, sectionRef.current, titleRef.current);
  }, []);

  return (
    <Wrapper light>
      <ImgContainer ref={sectionRef}>
        <img
          srcSet={`${mobileImg} 400w, ${desktopImg} 1200w`}
          sizes="(max-width: 36rem) 20vw, 1200px"
          alt="채플린헤어 파트너쉽"
          src={desktopImg}
        />
        <Title ref={titleRef}>Partnership</Title>
      </ImgContainer>
    </Wrapper>
  );
};

export default Partnership;
