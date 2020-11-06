import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.header`
  width: 100%;
  height: auto;
  padding: 10rem 0;
  color: #f6f3ec;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Playfair Display;
  font-size: 5rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: inherit;
  padding: 1.5rem 0;

  @media screen and (max-width: 576px) {
    font-size: 4rem;
  }
`;

const SubTitle = styled.p`
  max-width: 45%;
  line-height: 2;
  text-align: center;
  margin-top: 1rem;

  @media screen and (max-width: 1200px) {
    max-width: 60%;
  }

  @media screen and (max-width: 768px) {
    max-width: 70%;
  }

  @media screen and (max-width: 576px) {
    max-width: 85%;
  }
`;

const SubHeader = ({ title, subTitle }) => {
  return (
    <Container>
      <Title> {title} </Title> <SubTitle> {subTitle} </SubTitle>{' '}
    </Container>
  );
};

export default SubHeader;

SubHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
