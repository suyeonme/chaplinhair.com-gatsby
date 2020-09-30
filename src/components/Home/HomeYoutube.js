import React from 'react';
import styled from 'styled-components';

import Woman from 'assets/icons/youtube-1.png';
import Man from 'assets/icons/youtube-2.png';

import YoutubeImg from 'assets/img/youtube-profile.jpg';
import { TitleH1, CategoryH4, Container } from 'styles/style';

const Wrapper = styled(Container)`
  padding: 6rem 16rem;

  position: relative;
`;

const ProfileContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ProfileTitle = styled.p`
  color: inherit;
  font-size: 1.1rem;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const WomanIcon = styled.img`
  position: absolute;
  width: 10rem;
  height: 10rem;
  top: 5rem;
  left: 9rem;
  transform: rotate(-9deg);
`;

const ManIcon = styled.img`
  position: absolute;
  width: 9rem;
  height: 9rem;
  bottom: 3rem;
  right: 5rem;
`;

const HomeYoutube = () => {
  return (
    <Wrapper bgColor="black" color="#F6F3EC">
      <CategoryH4>Social</CategoryH4>
      <TitleH1>Youtube</TitleH1>
      <ProfileContainer
        href="https://www.youtube.com/channel/UCsMa9_c-dbnRYOLG1Maa2og?view_as=subscriber"
        target="_black"
      >
        <ProfileImg src={YoutubeImg} alt="채플린헤어 유튜브" />
        <ProfileTitle>찰리의 미용 TV</ProfileTitle>
      </ProfileContainer>

      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AZHwLvx3rUc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </VideoContainer>

      <WomanIcon src={Woman} alt="찰리의 미용tv" />
      <ManIcon src={Man} alt="찰리의 미용tv" />
    </Wrapper>
  );
};

export default HomeYoutube;
