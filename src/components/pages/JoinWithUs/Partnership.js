import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { fadeIn } from 'animations/animations';
import { Container, TitleH1 } from 'styles/style';
import mobileImg from 'assets/img/partnership-sm.jpg';
import desktopImg from 'assets/img/partnership-lg.jpg';

const Wrapper = styled(Container)`
  padding-bottom: 10rem;

  @media screen and (max-width: 48rem) {
    padding-bottom: 6rem;
  }

  @media screen and (max-width: 36rem) {
    padding-bottom: 3rem;
  }
`;

const Title = styled(TitleH1)`
  font-size: 6rem;
  font-weight: 900;
  text-transform: none;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin-left: 1rem;

  @media screen and (max-width: 64rem) {
    font-size: 4rem;
  }

  @media screen and (max-width: 48rem) {
    font-size: 2.7rem;
  }

  @media screen and (max-width: 36rem) {
    text-orientation: initial;
    writing-mode: initial;
    order: 1;
    padding: 0 0 1rem;
    margin: 0 auto;
  }
`;

const ImgContainer = styled.div`
  width: 70%;
  height: auto;
  margin-left: 5rem;
  position: relative;
  display: flex;
  align-items: start;

  @media screen and (max-width: 48rem) {
    margin-left: 2.5rem;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    margin-left: 0;
    flex-direction: column;
  }

  img {
    @media screen and (max-width: 36rem) {
      order: 2;
    }
  }
`;

const Partnership = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      fadeIn(0, titleRef.current);
    }
  }, [intersection]);

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
