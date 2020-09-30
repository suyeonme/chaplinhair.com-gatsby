import React from 'react';
import styled from 'styled-components';

import Image from 'assets/img/interview.jpg';
import { CategoryH4, Container } from 'styles/style';

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

const Title = styled.h2`
  font-family: Playfair Display;
  font-size: 5.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding-top: 0.5rem;

  span {
    display: block;
    font-family: Spoqa Han Sans;
    font-size: 0.8rem;
    padding-top: 0.5rem;
  }
`;

const Quote = styled.blockquote`
  font-size: 1rem;
  line-height: 2;
  margin-top: auto;
`;

const PartnerImg = styled.img`
  width: 27%;
  height: auto;
`;

const HomeInterview = () => {
  return (
    <InterviewContainer bgColor="#F6F3EC" color="black">
      <TextContainer>
        <CategoryH4 left>Interview</CategoryH4>
        <Title>
          JEONG HAEMIN<span>채플린헤어 시작점 정해민 점장 </span>
        </Title>
        <Quote>
          같은 공간 안에서 힘들 때는 서로 응원해주고, 잘못된 방향으로 나아갈
          때는 붙잡아 줄 수 있는, 진심으로 웃으면서 행복하게, 그리고 틀에
          갇혀있지 않고 날개를 펼칠 수 있는 그런 미용을 ‘팀워크’로 이루어져
          하나가 될 수 있는 그런 팀으로 움직인다면 한 번 해볼 만하지 않을까요?
        </Quote>
      </TextContainer>
      <PartnerImg src={Image} />
    </InterviewContainer>
  );
};

export default HomeInterview;
