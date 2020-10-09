import React, { useRef } from 'react';
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
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  font-family: Playfair Display;
  font-size: 5.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding-top: 0.5rem;

  opacity: 0;
  transform: translateY(-60px);
`;

const H3 = styled.h3`
  font-family: Spoqa Han Sans;
  font-size: 0.8rem;
  padding-top: 0.5rem;

  opacity: 0;
`;

const Quote = styled.blockquote`
  font-size: 1rem;
  line-height: 2;
  margin-top: auto;

  opacity: 0;
`;

const PartnerImg = styled(RevealImg)`
  background: url(${partnerImg});
  background-size: 110% 110%;
  background-position: center center;
  width: 22.5rem;
  height: 29.5rem;
  ${'' /* width: 361px; */}
  ${'' /* height: 465px; */}
  ${'' /* width: 27%;
  height: auto; */}
`;

const HomeInterview = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  });

  if (intersection && intersection.isIntersecting) {
    const tl = gsap.timeline();

    tl.to(overlayRef.current, 1, { width: '0%', ease: 'power2.easeInOut' })
      .to(
        imgRef.current,
        0.8,
        {
          backgroundSize: '100% 100%',
          ease: 'power2.easeInOut',
        },
        '-=0.7',
      )
      .to('#fade', 1, {
        opacity: 1,
        y: 0,
        ease: 'power2.easeInOut',
        stagger: {
          amount: 0.5,
        },
      });
  }

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
        <Overlay ref={overlayRef} />
      </PartnerImg>
    </InterviewContainer>
  );
};

export default HomeInterview;
