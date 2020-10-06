import React from 'react';
import styled from 'styled-components';

import { PrimaryBtn } from 'components/Buttons/Buttons';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f6f3ec;
  color: black;

  h1,
  h2 {
    font-family: Playfair Display;
  }

  h1 {
    font-weight: 900;
    font-size: 8rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
  }

  p {
    font-family: Spoqa Han Sans;
    font-weight: 300;
    line-height: 2;
    margin-bottom: 3rem;
  }

  span {
    display: block;
  }
`;

const NotFound = () => {
  return (
    <Wrapper bgColor="#F6F3EC" color="black">
      <h1>Oops!</h1>
      <h2>404 Page Not Found</h2>
      <p>
        요청하신 페이지를 찾을 수 없습니다.
        <span>
          페이지가 존재하지 않거나 사용할 수 없는 페이지 입니다. <br />
          입력하신 주소가정확한지 다시 한 번 확인해주세요.
        </span>
      </p>
      <PrimaryBtn url="/" text="Go back" />
    </Wrapper>
  );
};

export default NotFound;
