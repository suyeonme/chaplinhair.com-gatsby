import React from 'react';
import styled from 'styled-components';

import { Container, TitleH1 } from 'styles/style';
import Phone from 'assets/icons/phone.svg';
import Mail from 'assets/icons/mail.svg';
import Image from 'assets/img/partnership.jpg';

const Wrapper = styled(Container)`
  padding-bottom: 10rem;
`;

const Title = styled(TitleH1)`
  font-size: 6rem;
  font-weight: 900;
  text-align: left;
  text-transform: none;
`;

const ImgContainer = styled.div`
  width: 70%;
  height: auto;
  margin-left: 7rem;
  position: relative;
`;

const TextContainer = styled.div`
  width: 19rem;
  height: auto;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  padding: 1.5rem;
  color: black;
  background-color: #f6f3ec;

  h3 {
    font-family: Playfair Display;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 2px;
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.9rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Partnership = () => {
  const info = [
    { img: Phone, content: '062-262-4325', alt: '채플린헤어 연락처' },
    { img: Mail, content: 'ckffl4325@naver.com', alt: '채플린헤어 이메일' },
  ];

  return (
    <Wrapper light>
      <ImgContainer>
        <Title>Partnership</Title>
        <img src={Image} alt="채플린헤어 파트너쉽" />
        <TextContainer>
          <h3>Contact Us</h3>
          {info.map((i, index) => (
            <InfoContainer key={index}>
              <img src={i.img} alt={i.alt} />
              <p>{i.content}</p>
            </InfoContainer>
          ))}
        </TextContainer>
      </ImgContainer>
    </Wrapper>
  );
};

export default Partnership;
