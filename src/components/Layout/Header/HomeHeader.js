import React from 'react';
import styled from 'styled-components';

import HeaderImg from 'assets/img/header.jpg';
import HeaderTitle from 'assets/icons/header-title.svg';

const Container = styled.header`
  width: 100%;
  min-height: 100vh;
  background-color: black;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 1rem;
`;

const Image = styled.img`
  width: 88%;
  height: auto;
`;

const Title = styled.img`
  width: 7rem;
  height: auto;
  display: block;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const HomeHeader = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title src={HeaderTitle} alt="채플린 헤어" />
        <Image src={HeaderImg} alt="채플린 헤어" />
      </HeaderContainer>
    </Container>
  );
};

export default HomeHeader;
