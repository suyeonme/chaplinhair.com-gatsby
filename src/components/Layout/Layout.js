import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import 'normalize.css';
import 'fonts/fonts.css';

import Nav from 'components/Layout/Nav/Nav';
import Footer from 'components/Layout/Footer/Footer';

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
    font-family: 'Poppins', 'Spoqa Han Sans', sans-serif;
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

  img, video {
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

  ::-webkit-scrollbar {
  width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #000000; 
  }
  
  ::-webkit-scrollbar-thumb {
    background:  #B8AC79;
    border-radius: 20px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
