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
`;

export const CategoryH4 = styled.h4`
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: inherit;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
`;

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 3rem;
  color: ${(props) => (props.light ? 'black' : '#F6F3EC')};
  background-color: ${(props) => (props.light ? '#F6F3EC' : 'black')};
`;
