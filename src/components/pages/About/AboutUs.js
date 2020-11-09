import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import AboutUsImg from 'assets/img/about-1.jpg';
import { TitleH1, CategoryH4, Container } from 'styles/style';

const Title = styled(TitleH1)`
  width: 60%;
  font-size: 5rem;
  letter-spacing: 0.3rem;
  line-height: 1.2;
  margin: 0 auto;
  opacity: 1;
  transform: translateY(0);

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    font-size: 4rem;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 576px) {
    font-size: 2rem;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  margin: 0 auto;
  background: url(${AboutUsImg});
  background-size: cover;
  background-position: center;
  margin-top: 6rem;

  @media screen and (max-width: 1200px) {
    padding-bottom: 60%;
  }
`;

const TextContainer = styled.div`
  background-color: #f6f3ec;
  position: absolute;
  width: 40%;
  top: 5rem;
  left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  height: 0;
  visibility: hidden;

  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    position: static;
    top: auto;
    left: auto;
    margin-top: 3rem;
    padding: 0;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    width: 100%;
    position: static;
    top: auto;
    left: auto;
    margin-top: 3rem;
    padding: 0;
  }

  p,
  span {
    line-height: 2;
    opacity: 0;
    transform: translateY(60px);
  }

  p {
    margin-top: 2rem;
  }

  span {
    display: block;
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    padding-top: 2rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const AboutUs = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
      },
    });

    tl.to(titleRef.current, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power2.inOut',
    })
      .set(boxRef.current, {
        css: { visibility: 'visible' },
      })
      .to(boxRef.current, {
        height: 'auto',
        duration: 0.7,
        ease: 'power2.inOut',
      })
      .to('#fade', {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power2.inOut',
      });
  }, []);

  return (
    <Container light ref={sectionRef}>
      <CategoryH4>About Us</CategoryH4>
      <Title>The person who leads Chaplin Hair is you.</Title>
      <SubTitle ref={titleRef}>
        채플린 헤어를 이끄는 사람은 여러분입니다.
      </SubTitle>
      <Wrapper>
        <AboutContainer />
        <TextContainer ref={boxRef}>
          <TitleH1 id="fade">Chaplin Hair is,</TitleH1>
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
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
