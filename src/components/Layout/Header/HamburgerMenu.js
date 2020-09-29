import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerSVG = styled.svg`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  transition: transform 400ms;
  transform: ${(props) => props.isClicked && `rotate(45deg)`};
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
  stroke-dashoffset: ${(props) => props.isClicked && '-98px'};
`;

const HamburgerLineB = styled(HamburgerLine)`
  stroke-dasharray: 40 180;
  stroke-dashoffset: ${(props) => props.isClicked && '-138px'};
`;

const Hamburger = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <HamburgerSVG
      viewBox="0 0 100 100"
      width="70"
      onClick={() => setIsClicked(!isClicked)}
      isClicked={isClicked}
    >
      <HamburgerLineT
        isClicked={isClicked}
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
      />
      <HamburgerLine isClicked={isClicked} d="m 30,50 h 40" />
      <HamburgerLineB
        isClicked={isClicked}
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
      />
    </HamburgerSVG>
  );
};

export default Hamburger;
