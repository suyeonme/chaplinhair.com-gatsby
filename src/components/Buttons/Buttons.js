import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  background-color: #eb8242;
  border-radius: 50%;
  margin: 0 auto;
`;

const Content = styled.a`
  position: absolute;
  top: 0.6rem;
  left: -0.1rem;

  &,
  &:link,
  &:visited {
    border-radius: 50%;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    color: black;
    border: 1px solid currentColor;
    text-decoration: none;
    padding: 1.4rem 1rem;
  }
`;

export const CircleBtn = ({ url }) => {
  return (
    <Container>
      <Content href={url} target="_blank">
        Go
      </Content>
    </Container>
  );
};
