import React from 'react';
import styled from 'styled-components';

import { Container } from 'styles/style';

const VideoContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10rem 0;

  @media screen and (max-width: 36rem) {
    padding: 5rem 0;
  }
`;

const Video = styled.div`
  padding: 0 10rem;

  @media screen and (max-width: 48rem) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 20rem) {
    padding: 0;
  }
`;

const HomeVideo = () => {
  return (
    <VideoContainer bgColor="black">
      <Video
        dangerouslySetInnerHTML={{
          __html: `
          <video loop autoPlay muted>
            <source src="${require('assets/video/chaplin-video.mp4')}" type="video/mp4" />
            Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>            
        `,
        }}
      ></Video>
    </VideoContainer>
  );
};

export default HomeVideo;
