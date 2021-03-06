import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerSVG = styled.svg`
  position: relative;
  z-index: 10;
  user-select: none;
  transform: ${(props) => props.show && `rotate(45deg)`};
  transition: transform 400ms;
  width: 7rem;
`;

const HamburgerLine = styled.path`
  fill: none;
  stroke: #b8ac79;
  stroke-width: 5.5;
  stroke-linecap: round;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
`;

const HamburgerLineT = styled(HamburgerLine)`
  stroke-dasharray: 40 139;
  stroke-dashoffset: ${(props) => props.show && '-98px'};
`;

const HamburgerLineB = styled(HamburgerLine)`
  stroke-dasharray: 40 180;
  stroke-dashoffset: ${(props) => props.show && '-138px'};
`;

const Hamburger = ({ setShow, show }) => {
  return (
    <HamburgerSVG
      viewBox="0 0 100 100"
      show={show}
      onClick={() => setShow(!show)}
    >
      <HamburgerLineT
        show={show}
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
      />
      <HamburgerLine show={show} d="m 30,50 h 40" />
      <HamburgerLineB
        show={show}
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
      />
    </HamburgerSVG>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  setShow: PropTypes.func,
  show: PropTypes.bool,
};
