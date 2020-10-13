import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

import AboutUsImg from 'assets/img/about-1.jpg';
import { TitleH1, Container } from 'styles/style';

const Title = styled(TitleH1)`
  width: 60%;
  font-size: 3.1rem;
  letter-spacing: 3px;
  line-height: 1.2;
  margin: 0 auto;
  opacity: 1;
  transform: translateY(0);
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;

  opacity: 0;
  transform: translateY(60px);
`;

const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  ${'' /* Keep a ratio */}
  height: 0;
  padding-bottom: 55%;
  margin: 0 auto;
  ${'' /* height: 100vh; */}
  ${'' /* height: auto; */}
  background: url(${AboutUsImg});
  background-size: cover;
  background-position: center;
  margin-top: 5rem;
`;

const TextContainer = styled.div`
  background-color: #f6f3ec;
  position: absolute;
  top: 7rem;
  left: 3rem;
  width: 0%;
  height: 462px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  visibility: hidden;

  p,
  span {
    opacity: 0;
    transform: translateY(60px);
  }

  p {
    font-size: 1.1rem;
    line-height: 2;
  }

  span {
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2;
    text-align: center;
    padding-top: 1rem;
  }
`;

const AboutUs = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.inOut' },
      });

      tl.to(titleRef.current, { duration: 0.5, opacity: 1, y: 0 })
        .to(boxRef.current, {
          duration: 0,
          delay: 0.3,
          css: { visibility: 'visible' },
        })
        .to(boxRef.current, { width: '40%' })
        .to('#fade', {
          opacity: 1,
          y: 0,
          stagger: 0.3,
        });
    }
  }, [intersection]);

  return (
    <Container light>
      <Title>The person who leads Chaplin Hair is you.</Title>
      <SubTitle ref={titleRef}>
        채플린 헤어를 이끄는 사람은 여러분입니다.
      </SubTitle>

      <AboutContainer ref={sectionRef}>
        <TextContainer ref={boxRef}>
          <TitleH1 id="fade">About Us</TitleH1>
          <p id="fade">
            트렌드(Trend)는 시간이 지나면 사라지기 마련입니다. 그러나 견고하게
            세워진 문화(Culture)는 끝까지 지속됩니다. 혁신적이고 행복한 뷰티
            문화를 만들어 나가는 곳이 채플린 헤어입니다. 외롭지 않은 미용을 할
            수 있도록 우리는 언제나 당신의 동반자가 되겠습니다. 우리는 당신의
            파트너이자 가족이며 항상 서로의 행복을 응원해주는 팀입니다.
          </p>
          <span id="fade">
            진심으로 우리 함께 행복하고 자유로운 미용을 했으면 좋겠습니다.
          </span>
        </TextContainer>
      </AboutContainer>
    </Container>
  );
};

export default AboutUs;
