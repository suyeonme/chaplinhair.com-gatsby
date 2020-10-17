import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  transition: color background-color 0.8s;

  opacity: ${(props) => (props.isAnimated ? 0 : 1)};
  transform: ${(props) => props.isAnimated && 'translateY(60px)'};

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

export const PrimaryBtn = ({ url, text, isAnimated }) => {
  if (url === '/') {
    return (
      <Link to="/">
        <PrimaryStyle isAnimated={isAnimated}>Back to Home</PrimaryStyle>
      </Link>
    );
  } else {
    return (
      <PrimaryStyle id="instagram" isAnimated={isAnimated}>
        <a href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
      </PrimaryStyle>
    );
  }
};

PrimaryStyle.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};
