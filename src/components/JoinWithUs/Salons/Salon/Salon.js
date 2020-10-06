import React, { useState } from 'react';
import styled from 'styled-components';

import SalonInfo from 'components/JoinWithUs/Salons/Salon/SalonInfo';

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
  return (
    <Container>
      <h2>
        <span>채플린헤어</span>
        {salon.salonName}
      </h2>
      <Wrapper>
        <SalonImage salon={salon} />
        <SalonContent
          title={salon.title}
          text={salon.text}
          owner={salon.owner}
        />
      </Wrapper>
      <SalonInfo salon={salon} />
    </Container>
  );
};

export default Salon;
