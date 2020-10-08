import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import styled from 'styled-components';
import gsap from 'gsap';

import { Overlay } from 'components/Layout/Nav/NavStyles';

const ColorOverlay = styled(Overlay)`
  background-color: #b8ac79;
  z-index: 3;
  visibility: hidden;
`;

const PageTransition = ({ location, children }) => {
  const handleShow = (el) => {
    const target = el.firstChild;
    const tl = gsap.timeline();

    tl.to(target, { duration: 0, css: { visibility: 'visible' } })
      .to(target, {
        height: 0,
        duration: 0.8,
        transformOrigin: 'right top',
        ease: 'power4.inOut',
      })
      .to(target, { duration: 0, css: { visibility: 'hidden' } });
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
