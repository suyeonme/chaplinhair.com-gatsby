import React, { useRef } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { InterviewArr } from 'components/pages/Team/Profiles/profilesInfo';
import { showModal, hideModal } from 'animations/animations';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);

  @supports (backdrop-filter: blur(3px)) {
    backdrop-filter: blur(3px);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  ${'' /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */}
  ${'' /* height: 70%; */}
  width: 75%;
  height: 75%;
  background-color: white;
  border-radius: 3px;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
`;

const ContentImg = styled.div`
  width: 40%;
  height: 100%;
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 3rem;

  opacity: 0;
  transform: translateY(60px);

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  p {
    font-size: 0.85rem;
    line-height: 2;
    white-space: pre-line;
  }
`;

const Modal = ({ show, setShow, id }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const currentProfile = InterviewArr.find((i) => i.id === id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target.id === 'overlay') setShow(false);
  };

  const handleEnter = () => {
    showModal(modalRef.current, contentRef.current);
  };

  const handleExit = () => {
    hideModal(contentRef.current, modalRef.current);
  };

  return (
    <>
      <Transition
        in={show}
        timeout={700}
        unmountOnExit
        onEnter={handleEnter}
        onExit={handleExit}
      >
        <Overlay onClick={handleClick} id="overlay">
          <Container ref={modalRef}>
            {currentProfile && (
              <Content>
                <ContentImg img={currentProfile.img} />
                <ContentText ref={contentRef}>
                  <h2>{currentProfile.title}</h2>
                  <h3>{currentProfile.question1}</h3>
                  <p>{currentProfile.answer1}</p>
                  {currentProfile.question2 && (
                    <h3>{currentProfile.question2}</h3>
                  )}
                  {currentProfile.answer2 && <p>{currentProfile.answer2}</p>}
                  {currentProfile.question3 && (
                    <h3>{currentProfile.question2}</h3>
                  )}
                  {currentProfile.answer3 && <p>{currentProfile.answer3}</p>}
                </ContentText>
              </Content>
            )}
          </Container>
        </Overlay>
      </Transition>
    </>
  );
};

export default Modal;
