import React, { useRef } from 'react';
import styled from 'styled-components';

import { fadeIn } from 'animations/animations';
import { Container, TitleH1, CategoryH4 } from 'styles/style';
import Originality from 'assets/icons/originality.svg';
import Team from 'assets/icons/team.svg';
import Education from 'assets/icons/education.svg';
import Culture from 'assets/icons/culture.svg';
import { useEffect } from 'react';

const Wrapper = styled(Container)`
  padding: 10rem 15rem;

  @media screen and (max-width: 1200px) {
    padding: 10rem 6rem;
  }

  @media screen and (max-width: 768px) {
    padding: 10rem 15rem;
  }

  @media screen and (max-width: 576px) {
    padding: 10rem 3rem;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    padding: 10rem 15rem;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  border-style: hidden;
  width: 100%;
  margin: 6rem auto 0;
  opacity: 0;
  transform: translateY(60px);
`;

const Row = styled.tr`
  border-collapse: collapse;
  border: 1px solid rgba(161, 159, 159, 0.659);

  @media screen and (max-width: 768px) {
    display: block;
    border: 1px solid transparent;
  }
`;

const Cell = styled.td`
  border-collapse: collapse;
  border: 1px solid rgba(161, 159, 159, 0.659);
  padding: 5rem;

  @media screen and (max-width: 768px) {
    display: block;
    border: 1px solid transparent;
  }
`;

const CellContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  margin-right: 5rem;
`;

const TextContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-right: auto;
  }

  h3 {
    font-size: 2.3rem;
    font-weight: 400;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
  }

  span {
    font-size: 1.2rem;
    letter-spacing: 0;
    margin-left: 1rem;

    @media screen and (max-width: 576px) {
      display: block;
      margin-left: 0;
      margin-top: 1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 812px) {
      display: block;
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 1.7;
    white-space: pre-line;
  }
`;

const FeatureCell = ({ arr }) => {
  return arr.map((el, i) => (
    <Cell key={i}>
      <CellContainer>
        <Icon src={el.icon} alt={el.subTitle} />
        <TextContainer>
          <h3>
            {el.title}
            <span>{el.subTitle}</span>
          </h3>
          <p>{el.text}</p>
        </TextContainer>
      </CellContainer>
    </Cell>
  ));
};

const Feature = () => {
  const firstRow = [
    {
      title: 'Originality',
      subTitle: '독창성',
      text: `
      더 나은 삶과 문화의 향상.
      미용의 새판`,
      icon: Originality,
    },
    {
      title: 'Team',
      subTitle: '팀',
      text: `
      같은 생각과 비전이 있는 팀
      역경지수와 환대지수가 높은 팀
      행복한 팀
      `,
      icon: Team,
    },
  ];

  const secondRow = [
    {
      title: 'Education',
      subTitle: '교육',
      text: `
      49%의 실력과 51%의 인성.
      자발적, 창조적인 자기발전
      `,
      icon: Education,
    },
    {
      title: 'Culture',
      subTitle: '수평적 조직 문화',
      text: `
      개성있는 사고방식, 자유로운 표현.
      서로에 대한 배려와 존중
      `,
      icon: Culture,
    },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    fadeIn(0, sectionRef.current, titleRef.current, tableRef.current);
  }, []);

  return (
    <Wrapper bgColor="black" color="#F6F3EC" ref={sectionRef}>
      <CategoryH4>Features</CategoryH4>
      <TitleH1 ref={titleRef}>Pillars of culture</TitleH1>
      <Table ref={tableRef}>
        <tbody>
          <Row>
            <FeatureCell arr={firstRow} />
          </Row>
          <Row>
            <FeatureCell arr={secondRow} />
          </Row>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Feature;
