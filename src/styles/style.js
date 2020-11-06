import styled from 'styled-components';

// White: #F6F3EC
// Gold: #B8AC79

export const TitleH1 = styled.h1`
  font-family: Playfair Display;
  font-size: 4.5rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: inherit;
  padding: 1rem 0;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 576px) {
    font-size: 3.8rem;
  }
`;

export const CategoryH4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: inherit;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
`;

export const FirstLetter = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #b8ac79;
`;

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 10rem 6rem;
  color: ${(props) => (props.light ? 'black' : '#F6F3EC')};
  background-color: ${(props) => (props.light ? '#F6F3EC' : 'black')};
  overflow: hidden;

  @media screen and (max-width: 576px) {
    padding: 10rem 3rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.color && props.color};
`;
