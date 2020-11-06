import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ceoImg from 'assets/img/ceo-message.jpg';
import signiture from 'assets/img/handwritten.png';
import { TitleH1, Container, FirstLetter, Overlay } from 'styles/style';

import { fadeInWithImg } from 'animations/animations';

const Wrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media screen and (max-width: 812px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  background: url(${ceoImg});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  width: 40%;
  display: inline-block;
  margin: 0 auto;
  transition: all 0.5s;
  position: relative;

  &:after {
    padding-top: 150%; /* height / width (1350/900) */
    display: block;
    content: '';
  }

  @media screen and (max-width: 812px) {
    width: 100%;
  }

  &:hover {
    filter: grayscale(100%);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  padding-left: 5rem;

  @media screen and (max-width: 812px) {
    padding-left: 0;
    width: 100%;
  }

  q,
  p {
    opacity: 0;
    transform: translateY(60px);
  }

  q {
    display: block;
    font-weight: 400;
    font-size: 2.5rem;
    margin-top: 4rem;

    @media screen and (max-width: 812px) {
      margin-top: 6rem;
      margin-bottom: 6rem;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 3rem;
    }
  }

  p {
    line-height: 2.5;

    @media screen and (max-width: 812px) {
      margin-bottom: 10rem;
    }
  }
`;

const NameContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: 0;
  transform: translateY(60px);

  h4 {
    font-size: 1.7rem;
  }

  span {
    font-size: 2rem;
    font-weight: 400;
  }

  img {
    width: 17rem;
    height: auto;
  }
`;

const CEOMessage = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    fadeInWithImg(
      sectionRef.current,
      overlayRef.current,
      titleRef.current,
      '#text',
    );
  }, []);

  return (
    <Container light ref={sectionRef}>
      <TitleH1 ref={titleRef}>CEO Message</TitleH1>
      <Wrapper>
        <ImgContainer>
          <Overlay ref={overlayRef} color="#f6f3ec" />
        </ImgContainer>
        <TextContainer>
          <q id="text">“꿈을 크게 가져라. 부서져도 조각은 크다.”</q>
          <p id="text">
            <FirstLetter>저</FirstLetter>는 참 행복한 사람입니다. 곁에서
            응원해준 분들이 있었기에 지금 여기까지 온 것 같습니다. 고객이
            멘토이자 내 좋은 스승이라는 것을 좌우명으로 28년을 버틸 수 있었던 것
            같습니다. 우리가 여기까지 온 것은, 채플린이라는 꿈을 하나로 뭉쳐
            패밀리로 함께 성장하고픈 열정의 결과라고 생각합니다. 채플린 패밀리의
            성장과 고객의 행복을 위해서 열심히 꿈을 만들어 나가겠습니다.
            채플린은 언제든지 당신이 원한다면 갑니다. 그 길이 없을지언정 그 길을
            만들어서라도 당신의 내민 손을 잡으러 갑니다.
          </p>
          <NameContainer id="text">
            <h4>
              채플린헤어 대표 <span>박 천 웅</span>
            </h4>
            <img src={signiture} alt="채플린 헤어 박천웅 대표 서명" />
          </NameContainer>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default CEOMessage;
