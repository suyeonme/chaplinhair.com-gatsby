import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'assets/fonts/fonts.css';

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

    ${'' /* 10px = 1rem */}
    font-size: 62.5%; 

    @media (max-width: 992px) {
      ${'' /* 9px = 1rem */}
      font-size: 56.25%; 
    }

    @media (max-width: 768px) {
      ${'' /* 8px = 1rem */}
      font-size: 50%; 
    }

    @media (max-width: 576px) {
      ${'' /* 7px = 1rem */}
      font-size: 43.75%; 
    }

    @media (max-width: 320px) {
      ${'' /* 5.5px = 1rem */}
      font-size: 37%;
    }
  }

  body {
    font-family: 'Poppins', 'Spoqa Han Sans', sans-serif;
    font-weight: 300;
    color: black;
    overflow-x: hidden;
  }

  p, a, li {
    font-size: 1.7rem;
  }

  a {
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
