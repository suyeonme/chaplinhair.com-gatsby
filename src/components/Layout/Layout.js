import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import 'normalize.css';
import GlobalFonts from 'fonts/fonts';

import Header from 'components/Header/Header';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
  }

  body{
    font-size: 62.5%;
    font-family: 'Spoqa Han Sans', 'Poppins', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    overscroll-behavior: smooth;
    color: black;
  }
  a{
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  img {
    width: 100%;
    height: 100%;
  }
  button {
    color: inherit; 
    font-family: inherit; 
    font-size: inherit;
    outline: none; 
    background-color: transparent;
  }

  ::selection {
    background-color: #B8AC79;
    color: #fff;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <GlobalFonts />
      {children}
    </>
  );
};

export default Layout;
