import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 60vh;
  background-color: black;
  color: #f6f3ec;
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
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

export const SocialIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.7rem;
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
    cursor: pointer;
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
