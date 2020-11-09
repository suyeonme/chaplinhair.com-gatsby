import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  @supports (backdrop-filter: blur(3px)) {
    backdrop-filter: blur(3px);
  }
`;

export const Container = styled.div`
  width: 75%;
  height: auto;
  background-color: white;
  border-radius: 0.3rem;
  overflow-y: auto;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    max-height: 80%;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    height: 75%;
    max-height: 75%;
  }
`;

export const Content = styled.div`
  display: flex;
  height: auto;
  overflow: hidden;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ContentImg = styled.div`
  width: 40%;
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: inline-block;
  position: relative;
  margin: 0 auto;

  &:after {
    padding-top: 118.84%;
    display: block;
    content: '';
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 5rem;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 60%;
    padding: 3rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.5rem;

    &:not(:first-child) {
      margin-top: 3rem;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 2;
    white-space: pre-line;
  }
`;
