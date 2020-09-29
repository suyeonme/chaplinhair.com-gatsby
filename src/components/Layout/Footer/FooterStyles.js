import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 3.8rem;
  height: auto;
  margin-top: 2rem;
`;

export const ItemsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const SocialIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
`;

export const Item = styled.div`
  max-width: 400px;

  h3 {
    font-size: 1.4rem;
    letter-spacing: 1px;
    padding-bottom: 1.5rem;
  }

  span,
  p {
    font-size: 1.1rem;
    letter-spacing: 1px;
    line-height: 1.3;
    opacity: 0.7;
    font-weight: 100;
    cursor: default;
    transition: all 0.2s ease-in;
    margin-bottom: 0.5rem;

    &:hover {
      color: #b8ac79;
      opacity: 1;
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
