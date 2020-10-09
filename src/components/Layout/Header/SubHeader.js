import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: auto;
  padding: 6rem 0;
  color: #f6f3ec;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: Playfair Display;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: inherit;
  padding: 1rem 0;
`;

const SubTitle = styled.p`
  max-width: 45%;
  font-size: 1.2rem;
  line-height: 2;
  text-align: center;
  margin-top: 1rem;
`;

const SubHeader = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default SubHeader;
