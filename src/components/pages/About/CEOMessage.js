import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

import ceoImg from 'assets/img/ceo-message.jpg';
import signiture from 'assets/img/handwritten.png';
import { TitleH1, Container, FirstLetter, Overlay } from 'styles/style';

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  background: url(${ceoImg});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  width: 80%;
  height: auto;
  min-height: 90vh;
  filter: ${(props) => props.isHover && `grayscale(100%)`};
  background-size: ${(props) => (props.isHover ? `103%` : `100%`)};
  transition: all 0.5s;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 64rem) {
    min-height: 50vh;
  }

  @media screen and (max-width: 48rem) {
    width: 100%;
    min-height: 70vh;
  }

  @media screen and (max-width: 36rem) {
    min-height: 60vh;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-left: 3rem;

  @media screen and (max-width: 48rem) {
    padding-left: 0;
  }

  q,
  p {
    opacity: 0;
    transform: translateY(60px);
  }

  q {
    display: block;
    font-weight: 400;
    font-size: 1.6rem;
    margin-top: 4rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    @media screen and (max-width: 48rem) {
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1rem;
      line-height: 1.5;
      margin-top: 2rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1rem;
      line-height: 1.5;
      margin-top: 2rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 2.5;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.9rem;
      line-height: 2.2;
    }

    @media screen and (max-width: 48rem) {
      margin-bottom: 3rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
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
    font-size: 1rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 0.7rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.5rem;
    }
  }

  span {
    font-size: 1.3rem;
    font-weight: 400;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }
  }

  img {
    width: 10rem;
    height: auto;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      width: 8rem;
    }

    @media screen and (max-width: 36rem) {
      width: 7rem;
    }

    @media screen and (max-width: 20rem) {
      width: 5.5rem;
    }
  }
`;

const CEOMessage = () => {
  const [isHover, setIsHover] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  if (intersection && intersection.isIntersecting) {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: 'power2.inOut' },
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
    })
      .to(overlayRef.current, {
        width: '0%',
      })
      .to(
        '#text',
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
        },
        '-=0.7',
      );
  }

  return (
    <Container light ref={sectionRef}>
      <TitleH1 ref={titleRef}>CEO Message</TitleH1>
      <Wrapper>
        <ImgContainer
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          isHover={isHover}
        >
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
