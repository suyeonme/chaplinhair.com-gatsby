import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import WomanIcon from 'assets/icons/instagram-1.png';
import ManIcon from 'assets/icons/instagram-2.png';

import { fadeIn } from 'animations/animations';
import { CategoryH4, Container } from 'styles/style';
import { PrimaryBtn } from 'components/Buttons/Buttons';

const Wrapper = styled(Container)`
  text-align: center;
`;

const IconContainer = styled.div`
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(-60px);
`;

const Icon = styled.img`
  width: 9rem;
  height: 9rem;
`;

const Title = styled.h2`
  font-family: Playfair Display;
  font-size: 2.2rem;
  letter-spacing: 0.2rem;
  padding: 3rem 0;
  text-align: center;
  opacity: 0;
  transform: translateY(-60px);

  span {
    font-weight: 600;
  }
`;

const Instagram = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  if (intersection && intersection.isIntersecting) {
    fadeIn(0, '#instagram');
  }

  return (
    <Wrapper light ref={sectionRef}>
      <CategoryH4>Social</CategoryH4>
      <IconContainer id="instagram">
        <Icon src={WomanIcon} alt="Woman Icon" />
        <Icon src={ManIcon} alt="Man Icon" />
      </IconContainer>
      <Title id="instagram">
        Follow us on <span>Instagram</span>
      </Title>
      <PrimaryBtn
        url="https://www.instagram.com/chaplin__hair/"
        text="Show More"
      />
    </Wrapper>
  );
};

export default Instagram;