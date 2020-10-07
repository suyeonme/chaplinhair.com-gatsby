import React from 'react';
import styled from 'styled-components';

import CEOImg from 'assets/img/ceo-message.jpg';
import HandWritten from 'assets/img/handwritten.png';

import { TitleH1, Container, FirstLetter } from 'styles/style';

const Wrapper = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  background: url(${CEOImg});
  background-size: cover;
  width: 100%;
  height: auto;
  min-height: 95vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-left: 3rem;

  q {
    display: block;
    margin-top: 4rem;
    font-weight: 400;
    font-size: 1.6rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 2.5;
  }
`;

const NameContainer = styled.div`
  margin-left: auto;

  p {
    font-size: 1rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: 400;
  }

  img {
    width: 10rem;
    height: auto;
  }
`;

const CEOMessage = () => {
  return (
    <Container light>
      <TitleH1>CEO Message</TitleH1>
      <Wrapper>
        <ImgContainer src={CEOImg} alt="채플린 헤어 박천웅 대표" />
        <TextContainer>
          <q>“꿈을 크게 가져라. 부서져도 조각은 크다.”</q>
          <p>
            <FirstLetter>저</FirstLetter>는 참 행복한 사람입니다. 곁에서
            응원해준 분들이 있었기에 지금 여기까지 온 것 같습니다. 고객이
            멘토이자 내 좋은 스승이라는 것을 좌우명으로 28년을 버틸 수 있었던 것
            같습니다. 우리가 여기까지 온 것은, 채플린이라는 꿈을 하나로 뭉쳐
            패밀리로 함께 성장하고픈 열정의 결과라고 생각합니다. 채플린 패밀리의
            성장과 고객의 행복을 위해서 열심히 꿈을 만들어 나가겠습니다.
            채플린은 언제든지 당신이 원한다면 갑니다. 그 길이 없을지언정 그 길을
            만들어서라도 당신의 내민 손을 잡으러 갑니다.
          </p>
          <NameContainer>
            <p>
              채플린헤어 대표 <span>박 천 웅</span>
            </p>
            <img src={HandWritten} alt="채플린 헤어 박천웅 대표 서명" />
          </NameContainer>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default CEOMessage;
