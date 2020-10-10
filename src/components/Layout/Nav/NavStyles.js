import { Link } from 'gatsby';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  color: #b8ac79;
  background-color: #b8ac79;
  visibility: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5rem;
`;

export const RightWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 60%;

  li {
    opacity: 0;
    transform: translateY(100px);
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
`;

export const Logo = styled.div`
  width: 25%;
  height: auto;
`;

export const activeClassName = 'active';
export const StyledLink = styled(Link).attrs({ activeClassName })`
  display: block;
  font-family: Playfair Display;
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.3;
  display: flex;
  align-items: center;

  &.${activeClassName} {
    color: #897a44;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    background-color: #b8ac79;
    border-radius: 50%;
    margin-right: 1rem;
    opacity: ${(props) => (props.iscurrent ? 1 : 0)};
    transform: ${(props) =>
      props.iscurrent ? 'translateY(0)' : 'translateY(-10px)'};
    transition: all 0.2s ease-in;
  }

  span {
    font-size: 1rem;
    font-family: Spoqa Han Sans;
    font-weight: 300;
    margin-left: 3rem;
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 400;
  color: #8f8866;
  margin-right: 3rem;
  letter-spacing: 1px;
  transition: color 0.3s ease-in;

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
