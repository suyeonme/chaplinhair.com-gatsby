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
  height: 75%;
  background-color: white;
  border-radius: 3px;

  @media screen and (max-width: 64rem) {
    width: 85%;
    height: 40%;
  }

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    height: 75%;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    height: 85%;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 36rem) {
    flex-direction: column;
    overflow-y: auto;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    justify-content: center;
  }

  @media screen and (max-width: 20rem) {
    justify-content: center;
  }
`;

export const ContentImg = styled.div`
  width: 40%;
  height: 100%;
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 36rem) {
    width: 100%;
    height: 80%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    display: none;
  }

  @media screen and (max-width: 20rem) {
    display: none;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 3rem;

  opacity: 0;
  transform: translateY(60px);

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 48rem) {
    padding: 2rem;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 48rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 36rem) {
      margin-bottom: 0.5rem;
    }

    @media screen and (orientation: landscape) and (max-width: 64rem) {
      font-size: 1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;

    &:not(:first-child) {
      margin-top: 2rem;

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        margin-top: 0.5rem;
      }

      @media screen and (orientation: landscape) and (max-width: 48rem) {
        margin-top: 0.5rem;
      }

      @media screen and (max-width: 36rem) {
        margin-top: 1rem;
      }
    }

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.7rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 0.9rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 0.7rem;
    }
  }

  p {
    font-size: 0.85rem;
    line-height: 2;
    white-space: pre-line;

    @media screen and (orientation: landscape) and (max-width: 64rem) {
      font-size: 0.8rem;
    }

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.6rem;
      margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 0.8rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 0.6rem;
      line-height: 1.7;
      margin-bottom: 0.5rem;
    }
  }
`;
