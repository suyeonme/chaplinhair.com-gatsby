import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import styled from 'styled-components';
import gsap from 'gsap';

import { Overlay } from 'components/Layout/Nav/NavStyles';

const ColorOverlay = styled(Overlay)`
  background-color: #b8ac79;
  z-index: 3;
  display: none;
`;

const PageTransition = ({ location, children }) => {
  const handleShow = (el) => {
    const target = el.firstChild;
    const tl = gsap.timeline();

    tl.to(target, { duration: 0, autoAlpha: 1, display: 'block' })
      .to(target, {
        duration: 0.8,
        height: 0,
        transformOrigin: 'right top',
        ease: 'power4.inOut',
      })
      .to(target, { duration: 0, autoAlpha: 0, display: 'none' });
  };

  return (
    <TransitionGroup>
      <Transition
        key={location.pathname}
        timeout={800}
        unmountOnExit
        onEnter={(node) => handleShow(node)}
      >
        <div>
          <ColorOverlay />
          {children}
        </div>
      </Transition>
    </TransitionGroup>
  );
};

export default PageTransition;
