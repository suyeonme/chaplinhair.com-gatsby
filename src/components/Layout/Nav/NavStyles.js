import { Link } from 'gatsby';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  color: #b8ac79;
  background-color: #b8ac79;
  visibility: hidden;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 0 8rem;
  overflow: auto;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    height: 100%;
    flex-direction: row;
    justify-content: initial;
  }
`;

export const RightWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: auto;

  @media screen and (max-width: 576px) {
    width: 100%;
    order: 1;
    margin: auto;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    margin-top: 8rem;
    margin-bottom: 8rem;
    height: 100%;
    order: 2;
  }

  li {
    opacity: 0;
    transform: translateY(100px);

    @media screen and (max-width: 576px) {
      margin-bottom: 2rem;
    }

    @media screen and (orientation: landscape) and (max-width: 576px) {
      margin-bottom: 0;
    }
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: auto;

  @media screen and (max-width: 576px) {
    width: 100%;
    order: 2;
    padding-bottom: 6rem;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    height: 100%;
    order: 1;
    margin-top: 8rem;
  }
`;

export const Logo = styled.div`
  width: 15rem;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;

export const activeClassName = 'active';
export const StyledLink = styled(Link).attrs({ activeClassName })`
  display: block;
  font-family: Playfair Display;
  font-size: 8rem;
  font-weight: 900;
  line-height: 1.3;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    font-size: 6rem;
    flex-direction: column;
    align-items: start;
  }

  @media screen and (max-width: 576px) {
    font-size: 5rem;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background-color: #b8ac79;
    border-radius: 50%;
    margin-right: 1rem;
    opacity: ${(props) => (props.iscurrent ? 1 : 0)};
    transform: ${(props) =>
      props.iscurrent ? 'translateY(0)' : 'translateY(-10px)'};
    transition: all 0.2s ease-in;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &.${activeClassName} {
    color: #897a44;
  }

  span {
    font-family: Spoqa Han Sans;
    font-size: 1.6rem;
    font-weight: 300;
    margin-left: 5rem;

    @media screen and (max-width: 1200px) {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;
  color: #8f8866;
  margin-right: 3rem;
  letter-spacing: 1px;
  transition: color 0.3s ease-in;

  @media screen and (max-width: 576px) {
    margin-top: 3rem;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    margin-top: 0;
  }

  &:hover {
    color: #b8ac79;
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
`;
