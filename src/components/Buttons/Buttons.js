import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PrimaryStyle = styled.div`
  display: inline-block;
  position: relative;
  padding: 1.4rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: 0.3rem;
  word-spacing: 0.3rem;
  text-decoration: none;
  overflow: hidden;
  color: black;
  border: 1px solid black;
  transition: all 0.8s;

  &::before {
    content: '';
    width: 100%;
    height: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.8s;
    background-color: black;
  }

  &:hover {
    z-index: 1;
    color: white;

    &::before {
      height: 100%;
    }
  }
`;

export const PrimaryBtn = ({ url, text }) => {
  if (url === '/') {
    return (
      <Link to="/">
        <PrimaryStyle>Back to Home</PrimaryStyle>
      </Link>
    );
  } else {
    return (
      <PrimaryStyle>
        <a href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
      </PrimaryStyle>
    );
  }
};
