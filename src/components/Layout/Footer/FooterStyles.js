import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  background-color: black;
  color: #f6f3ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #f6f3ec;
  padding: 6rem 0 1rem;
`;

export const ItemsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const SocialIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
`;

export const Item = styled.div`
  max-width: 400px;

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  h3 {
    font-family: Playfair Display;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 2px;
    padding-bottom: 1.5rem;

    @media screen and (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    align-items: center;
  }

  span,
  p {
    font-size: 1.5rem;
    letter-spacing: 1px;
    opacity: 0.8;
    transition: all 0.2s ease-in;

    &:hover {
      color: #b8ac79;
      opacity: 1;
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
