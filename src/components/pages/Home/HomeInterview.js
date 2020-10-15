import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

import partnerImg from 'assets/img/interview.jpg';
import {
  CategoryH4,
  Container,
  FirstLetter,
  Overlay,
  RevealImg,
} from 'styles/style';

const InterviewContainer = styled(Container)`
  padding: 6rem 3rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 48rem) {
    padding: 6rem 2rem;
  }

  @media screen and (max-width: 36rem) {
    flex-direction: column;
    padding: 3rem 2rem;
  }

  @media screen and (max-width: 20rem) {
    padding: 2rem 1rem;
  }
  }
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;

const H2 = styled.h2`
  font-family: Playfair Display;
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding-top: 0.5rem;

  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 48rem) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 2rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 1.8rem;
  }
`;

const H3 = styled.h3`
  font-family: Spoqa Han Sans;
  font-size: 0.8rem;
  padding-top: 1rem;

  opacity: 0;
  transform: translateY(60px);
`;

const Quote = styled.blockquote`
  font-size: 1rem;
  line-height: 2;
  margin-top: auto;

  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 48rem) {
    font-size: 0.7rem;
    margin-right: 2rem;
  }

  @media screen and (max-width: 36rem) {
    margin: 1.5rem 0;
  }
`;

const PartnerImg = styled(RevealImg)`
  background: url(${partnerImg});
  background-size: cover;
  background-position: center;
  width: 22.5rem;
  height: 29.5rem;

  @media screen and (max-width: 36rem) {
    width: 100%;
    height: 25rem;
  }
`;

const HomeInterview = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'power2.inOut' },
      });

      tl.to('#fade', {
        opacity: 1,
        y: 0,
        stagger: 0.3,
      }).to(overlayRef.current, { duration: 1.2, width: '0%' }, '-=0.5');
    }
  }, [intersection]);

  return (
    <InterviewContainer light ref={sectionRef}>
      <TextContainer>
        <CategoryH4 left>Interview</CategoryH4>
        <H2 id="fade">JEONG HAEMIN</H2>
        <H3 id="fade">채플린헤어 시작점 정해민 점장</H3>
        <Quote id="fade">
          <FirstLetter>같</FirstLetter>은 공간 안에서 힘들 때는 서로 응원해주고,
          잘못된 방향으로 나아갈 때는 붙잡아 줄 수 있는, 진심으로 웃으면서
          행복하게, 그리고 틀에 갇혀있지 않고 날개를 펼칠 수 있는 그런 미용을
          ‘팀워크’로 이루어져 하나가 될 수 있는 그런 팀으로 움직인다면 한 번
          해볼 만하지 않을까요?
        </Quote>
      </TextContainer>
      <PartnerImg ref={imgRef}>
        <Overlay ref={overlayRef} color="#f6f3ec" />
      </PartnerImg>
    </InterviewContainer>
  );
};

export default HomeInterview;
