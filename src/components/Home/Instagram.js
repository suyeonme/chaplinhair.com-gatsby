import React from 'react';
import styled from 'styled-components';

import WomanIcon from 'assets/icons/instagram-1.png';
import ManIcon from 'assets/icons/instagram-2.png';

import { CategoryH4, Container } from 'styles/style';
import { PrimaryBtn } from 'components/Buttons/Buttons';

const IconContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
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

  span {
    font-weight: 600;
  }
`;

const Instagram = () => {
  return (
    <Container color="black" bgColor="#F6F3EC">
      <CategoryH4>Social</CategoryH4>
      <IconContainer>
        <Icon src={WomanIcon} alt="Woman Icon" />
        <Icon src={ManIcon} alt="Man Icon" />
        <Title>
          Follow us on <span>Instagram</span>
        </Title>
        <PrimaryBtn url="https://www.instagram.com/chaplin__hair/" />
      </IconContainer>
    </Container>
  );
};

export default Instagram;
