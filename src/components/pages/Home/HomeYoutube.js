import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { fadeIn } from 'animations/animations';
import YoutubeImg from 'assets/img/youtube-profile.jpg';
import { TitleH1, CategoryH4, Container } from 'styles/style';

const Wrapper = styled(Container)`
  padding: 10rem 20rem;

  @media screen and (max-width: 1200px) {
    padding: 10rem 12rem;
  }

  @media screen and (max-width: 768px) {
    padding: 10rem 8rem;
  }

  @media screen and (max-width: 576px) {
    padding: 10rem 3rem;
  }
`;

const ProfileContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(60px);
`;

const ProfileImg = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  margin-right: 2rem;
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

const HomeYoutube = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    fadeIn(0, sectionRef.current, '#youtube');
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            youtube
          }
        }
      }
    }
  `);

  return (
    <Wrapper bgColor="black" color="#F6F3EC" ref={sectionRef}>
      <CategoryH4>Social</CategoryH4>
      <TitleH1 id="youtube">Youtube</TitleH1>
      <ProfileContainer
        href={data.site.siteMetadata.socialLinks.youtube}
        target="_black"
        id="youtube"
      >
        <ProfileImg src={YoutubeImg} alt="채플린헤어 유튜브" />
        <p>찰리의 미용 TV</p>
      </ProfileContainer>

      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AZHwLvx3rUc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          title="채플린 헤어 유튜브 채널, 찰리의 미용tv"
        ></iframe>
      </VideoContainer>
    </Wrapper>
  );
};

export default HomeYoutube;
