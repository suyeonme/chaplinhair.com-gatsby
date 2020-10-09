import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { fadeIn } from 'animations/animations';
import { Container, TitleH1 } from 'styles/style';
import Image from 'assets/img/partnership.jpg';

const Wrapper = styled(Container)`
  padding-bottom: 10rem;
`;

const Title = styled(TitleH1)`
  font-size: 6rem;
  font-weight: 900;
  text-transform: none;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin-left: 1rem;
`;

const ImgContainer = styled.div`
  width: 70%;
  height: auto;
  margin-left: 5rem;
  position: relative;
  display: flex;
  align-items: start;
`;

const Partnership = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  if (intersection && intersection.isIntersecting >= 1) {
    fadeIn(0, titleRef.current);
  }

  return (
    <Wrapper light>
      <ImgContainer ref={sectionRef}>
        <img src={Image} alt="채플린헤어 파트너쉽" />
        <Title ref={titleRef}>Partnership</Title>
      </ImgContainer>
    </Wrapper>
  );
};

export default Partnership;
