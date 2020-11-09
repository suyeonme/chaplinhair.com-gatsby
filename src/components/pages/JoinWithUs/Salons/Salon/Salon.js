import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fadeIn } from 'animations/animations';
import SalonInfo from 'components/pages/JoinWithUs/Salons/Salon/SalonInfo';

const Container = styled.div`
  width: 100%;
  height: auto;

  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(60px);

    span {
      font-size: 1.6rem;
      margin-right: 1rem;
    }

    &:before {
      content: '';
      display: block;
      width: 8%;
      border: 1px solid #b8ac79;
      margin: 0 auto 3rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: auto;
  font-size: 0;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
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
  padding: 5rem 0 5rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 0 0 0 3rem;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 0;
    margin-top: 3rem;
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  q,
  p {
    font-size: 1.6rem;
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

const SalonImage = ({ salon }) => {
  const { salonName, images } = salon;
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <ImgContainer>
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

const SalonContent = ({ title, text, owner }) => {
  return (
    <TextContainer>
      <h3>{title}</h3>
      <q>{text}</q>
      <p>{owner}</p>
    </TextContainer>
  );
};

const Salon = ({ salon }) => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const nameRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    fadeIn(
      0,
      sectionRef.current,
      nameRef.current,
      wrapperRef.current,
      infoRef.current,
    );
  }, []);

  return (
    <Container ref={sectionRef}>
      <h2 ref={nameRef}>
        <span>채플린헤어</span>
        {salon.salonName}
      </h2>
      <Wrapper ref={wrapperRef}>
        <SalonImage salon={salon} />
        <SalonContent
          sectionRef={sectionRef}
          title={salon.title}
          text={salon.text}
          owner={salon.owner}
        />
      </Wrapper>
      <div
        ref={infoRef}
        style={{ opacity: '1', translate: 'translateY(60px)' }}
      >
        <SalonInfo salon={salon} />
      </div>
    </Container>
  );
};

export default Salon;

Salon.propTypes = {
  salon: PropTypes.object,
};
