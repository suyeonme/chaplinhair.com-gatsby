import React from 'react';
import styled from 'styled-components';

import { TitleH1 } from 'styles/style';

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

const SubTitle = styled.p`
  max-width: 45%;
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 2;
  text-align: center;
  margin-top: 1rem;
`;

const SubHeader = ({ title, subTitle }) => {
  return (
    <Container>
      <TitleH1>{title}</TitleH1>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default SubHeader;
