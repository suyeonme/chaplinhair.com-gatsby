import React from 'react';
import styled from 'styled-components';

import { Container, TitleH1 } from 'styles/style';

import Phone from 'assets/icons/phone.svg';
import Mail from 'assets/icons/mail.svg';
import Image from 'assets/img/partnership.jpg';

const Wrapper = styled(Container)`
  position: relative;
  padding-bottom: 10rem;
`;

const Title = styled(TitleH1)`
  font-family: Poppins;
  font-size: 6rem;
  font-weight: 800;
  text-align: left;
  text-transform: none;
`;

const ImgContainer = styled.div`
  width: 65%;
  height: auto;
  margin-left: 10rem;
`;

const TextContainer = styled.div`
  width: 22rem;
  height: auto;
  background-color: black;
  position: absolute;
  right: 7rem;
  bottom: 2rem;
  padding: 2rem;
  color: #f6f3ec;

  h3 {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    color: #b8ac79;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 2px;
  }

  img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.7rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Partnership = () => {
  const info = [
    { img: Phone, content: '062-262-4325' },
    { img: Mail, content: 'ckffl4325@naver.com' },
  ];

  return (
    <Wrapper bgColor="#F6F3EC" color="black">
      <ImgContainer>
        <Title>Partnership</Title>
        <img src={Image} alt="채플린헤어 파트너쉽" />
      </ImgContainer>
      <TextContainer>
        <h3>Contact Us</h3>
        {info.map((i, index) => (
          <InfoContainer key={index}>
            <img src={i.img} />
            <p>{i.content}</p>
          </InfoContainer>
        ))}
      </TextContainer>
    </Wrapper>
  );
};

export default Partnership;
