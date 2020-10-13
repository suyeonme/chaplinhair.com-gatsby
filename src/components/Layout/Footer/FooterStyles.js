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
  padding: 3rem 0 0.5rem;
  color: #f6f3ec;
`;

export const ItemsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media screen and (max-width: 64rem) {
    width: 93%;
  }

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    width: 85%;
  }

  @media screen and (max-width: 36rem) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;

export const SocialIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.7rem;
`;

export const Item = styled.div`
  max-width: 400px;

  @media screen and (max-width: 48rem) {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  h3 {
    font-family: Playfair Display;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    padding-bottom: 0.8rem;

    @media screen and (max-width: 48rem) {
      font-size: 0.9rem;
      padding-bottom: 1rem;
    }
  }

  span,
  p {
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 1px;
    opacity: 0.8;
    transition: all 0.2s ease-in;
    margin-bottom: 0.5rem;

    &:hover {
      color: #b8ac79;
      opacity: 1;
    }

    @media screen and (max-width: 48rem) {
      font-size: 0.7rem;
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
