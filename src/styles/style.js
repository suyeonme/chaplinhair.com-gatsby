import styled from 'styled-components';

// White: #F6F3EC
// Gold: #B8AC79

export const TitleH1 = styled.h1`
  font-size: 3rem;
  font-family: Playfair Display;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: inherit;
  padding: 1rem 0;

  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 64rem) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 48rem) {
    font-size: 2rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 1.8rem;
  }
`;

export const CategoryH4 = styled.h4`
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: inherit;
  text-align: ${(props) => (props.left ? 'left' : 'center')};

  @media screen and (max-width: 36rem) {
    font-size: 0.6rem;
  }
`;

export const FirstLetter = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #b8ac79;

  @media screen and (max-width: 48rem) {
    font-size: 1.3rem;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 3rem;
  color: ${(props) => (props.light ? 'black' : '#F6F3EC')};
  background-color: ${(props) => (props.light ? '#F6F3EC' : 'black')};
  overflow: hidden;
`;

export const RevealImg = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: scale(1.6);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f6f3ec;
`;
