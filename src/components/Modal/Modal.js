import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';

import { showModal, hideModal } from 'animations/animations';
import { InterviewArr } from 'components/pages/Team/Profiles/profilesInfo';
import {
  Overlay,
  Container,
  Content,
  ContentImg,
  ContentText,
} from 'components/Modal/ModalStyle';

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
