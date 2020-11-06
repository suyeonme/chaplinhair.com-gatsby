import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Container, Overlay } from 'styles/style';
import { revealImg } from 'animations/animations';

const VideoContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10rem 0;
  position: relative;
`;

const Video = styled.div`
  padding: 0 10rem;

  @media screen and (max-width: 576px) {
    padding: 0 3rem;
  }
`;

const HomeVideo = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    revealImg(sectionRef.current, overlayRef.current);
  }, []);

  return (
    <VideoContainer bgColor="black" ref={sectionRef}>
      <Overlay ref={overlayRef} color="black" />
      <Video
        dangerouslySetInnerHTML={{
          __html: `
          <video loop autoPlay muted playsinline>
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
