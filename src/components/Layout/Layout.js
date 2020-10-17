import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'assets/fonts/fonts.css';
import intersectionObserver from 'intersection-observer';

import SEO from 'components/Layout/SEO/SEO';
import Navbar from 'components/Layout/Nav/Navbar';
import Footer from 'components/Layout/Footer/Footer';
import PageTransition from 'components/PageTransition/PageTransition';
import Cursor from 'components/Cursor/Cursor';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
  }

  html {
    cursor: none;
  }

  body {
    font-size: 62.5%; 
    font-family: 'Poppins', 'Spoqa Han Sans', sans-serif;
    font-weight: 300;
    color: black;
    overflow-x: hidden;

    @media screen and (max-width: 64rem) {
      font-size: 56.25%;
    }

    @media screen and (max-width: 48rem) {
      font-size: 50%;
    }

    @media screen and (max-width: 36rem) {
      font-size: 31.25%; 
    }

    @media screen and (max-width: 20rem) {
      font-size: 25%; 
    }
  }

  a{
    text-decoration:none;
    color:inherit;
    cursor: none;
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

const Layout = ({ location, children }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <SEO />
      <Cursor />
      <Navbar />
      <GlobalStyle />
      <PageTransition location={location}>{children}</PageTransition>
      <Footer />
    </div>
  );
};

export default Layout;
