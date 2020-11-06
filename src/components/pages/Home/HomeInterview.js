import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import partnerImg from 'assets/img/interview.jpg';
import { CategoryH4, Container, FirstLetter, Overlay } from 'styles/style';

const InterviewContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 10rem;

  @media screen and (max-width: 1200px) {
    padding: 10rem 6rem;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 10rem 3rem;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    flex-direction: row;
    padding: 10rem 6rem;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    width: 50%;
  }
`;

const H2 = styled.h2`
  font-family: Playfair Display;
  font-size: 8rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  padding-top: 1rem;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 1200px) {
    font-size: 7rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 4.7rem;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    font-size: 7rem;
  }
`;

const H3 = styled.h3`
  font-family: Spoqa Han Sans;
  font-size: 1.6rem;
  padding-top: 2rem;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 576px) {
    padding-bottom: 5rem;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.7rem;
  line-height: 2;
  margin-top: auto;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const PartnerImg = styled.div`
  background: url(${partnerImg});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 37rem;
  height: 48rem;
  overflow: hidden;
  transition: all 0.5s;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 33rem;
    height: 44rem;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 60rem;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    width: 33rem;
    height: 44rem;
  }

  @media screen and (orientation: landscape) and (max-width: 667px) {
    margin-left: 4rem;
  }

  &:hover {
    filter: grayscale(100%);
    background-size: 102%;

    ${'' /* IE */}
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      background-size: cover;
    }
  }
`;

const HomeInterview = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
      },
    });

    tl.to('#interview', {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power2.inOut',
    }).to(overlayRef.current, { duration: 1.2, width: '0%' }, '-=0.5');
  }, []);

  return (
    <InterviewContainer light>
      <TextContainer>
        <CategoryH4 left>Interview</CategoryH4>
        <H2 id="interview">JEONG HAEMIN</H2>
        <H3 id="interview">채플린헤어 시작점 정해민 점장</H3>
        <Quote id="interview">
          <FirstLetter>같</FirstLetter>은 공간 안에서 힘들 때는 서로 응원해주고,
          잘못된 방향으로 나아갈 때는 붙잡아 줄 수 있는, 진심으로 웃으면서
          행복하게, 그리고 틀에 갇혀있지 않고 날개를 펼칠 수 있는 그런 미용을
          ‘팀워크’로 이루어져 하나가 될 수 있는 그런 팀으로 움직인다면 한 번
          해볼 만하지 않을까요?
        </Quote>
      </TextContainer>
      <PartnerImg ref={sectionRef}>
        <Overlay ref={overlayRef} color="#f6f3ec" />
      </PartnerImg>
    </InterviewContainer>
  );
};

export default HomeInterview;
