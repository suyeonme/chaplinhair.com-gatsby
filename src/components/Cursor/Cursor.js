import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const MouseCursor = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  ${'' /* z-index: 9999; */}
  z-index: 80;
  width: 30px;
  height: 30px;
  border: 2px solid #b8ac79;
  border-radius: 100%;
  pointer-events: none;
  mix-blend-mode: difference;
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transform: ${(props) =>
    props.isClicked && `translate(-50%, -50%) scale(0.9)`};
  background-color: ${(props) => props.isClicked && `#b8ac79`};
  transition: opacity background-color transform, mix-blend-mode 0.2s ease;
`;

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
  const onMouseEnter = () => setHidden(false);
  const onMouseLeave = () => setHidden(true);
  const onMouseDown = () => setClicked(true);
  const onMouseUp = () => setClicked(false);

  const addEventListeners = useCallback(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  }, []);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <MouseCursor
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      hidden={hidden}
      isClicked={clicked}
    />
  );
};

export default Cursor;
