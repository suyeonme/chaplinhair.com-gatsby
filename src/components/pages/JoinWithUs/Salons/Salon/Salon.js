import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { fadeIn } from 'animations/animations';
import SalonInfo from 'components/pages/JoinWithUs/Salons/Salon/SalonInfo';

const Container = styled.div`
  width: 100%;
  height: auto;

  &:not(:last-child) {
    margin-bottom: 8rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;

    opacity: 0;
    transform: translateY(60px);

    span {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    &:before {
      content: '';
      display: block;
      width: 8%;
      border: 1px solid #b8ac79;
      margin: 0 auto 2rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const ImgContainer = styled.div`
  width: 50%;
  height: auto;
  font-size: 0;

  opacity: 0;
  transform: translateY(60px);
`;

const ImgSubContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-weight: 400;
  text-align: center;
  padding: 3rem 0 3rem 3rem;

  opacity: 0;
  transform: translateY(60px);

  h3 {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }

  q,
  p {
    font-size: 1rem;
  }

  q {
    font-weight: 300;
    line-height: 2;
    text-align: left;
    margin-bottom: 3rem;
  }
`;

const SubImg = styled.div`
  opacity: ${(props) => (props.isCurrent ? '0.7' : '1')};
  cursor: pointer;
`;

const SalonImage = ({ salon, sectionRef }) => {
  const { salonName, images } = salon;
  const [mainImg, setMainImg] = useState(images[0]);

  const imgRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  if (intersection && intersection.isIntersecting) {
    fadeIn(0.2, imgRef.current);
  }

  return (
    <ImgContainer ref={imgRef}>
      <div>
        <img src={mainImg} alt={salonName} />
      </div>
      <ImgSubContainer>
        {images.map((img, i) => (
          <SubImg
            key={i}
            onClick={() => setMainImg(img)}
            isCurrent={img === mainImg}
          >
            <img src={img} alt={salonName} />
          </SubImg>
        ))}
      </ImgSubContainer>
    </ImgContainer>
  );
};

const SalonContent = ({ title, text, owner, sectionRef }) => {
  const contentRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  if (intersection && intersection.isIntersecting) {
    fadeIn(0.4, contentRef.current);
  }

  return (
    <TextContainer ref={contentRef}>
      <h3 id="content">{title}</h3>
      <q id="content">{text}</q>
      <p id="content">{owner}</p>
    </TextContainer>
  );
};

const Salon = ({ salon }) => {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  if (intersection && intersection.isIntersecting) {
    fadeIn(0, nameRef.current);
  }

  return (
    <Container ref={sectionRef}>
      <h2 ref={nameRef}>
        <span>채플린헤어</span>
        {salon.salonName}
      </h2>
      <Wrapper>
        <SalonImage salon={salon} sectionRef={sectionRef} />
        <SalonContent
          sectionRef={sectionRef}
          title={salon.title}
          text={salon.text}
          owner={salon.owner}
        />
      </Wrapper>
      <SalonInfo salon={salon} sectionRef={sectionRef} />
    </Container>
  );
};

export default Salon;
