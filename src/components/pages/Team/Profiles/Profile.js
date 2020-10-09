import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from 'components/Modal/Modal';

const Container = styled.div`
  width: 25%;
  height: auto;
  padding: 0 2rem 4rem;
  cursor: pointer;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 0.6rem;

  span {
    display: block;
    font-size: 0.8rem;
    margin-top: 0.8rem;
    font-weight: 400;
  }
`;

const Profile = ({ img, img2, egName, koName, id }) => {
  const [isHover, setIsHover] = useState(false);
  const [show, setShow] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);

  const handleClick = (id) => {
    setShow(!show);
    setCurrentProfile(id);
  };

  return (
    <>
      <Container
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => handleClick(id)}
      >
        <div>
          <img src={isHover ? img2 : img} alt={koName} />
        </div>
        <Name>
          {egName}
          <span>{koName}</span>
        </Name>
      </Container>
      <Modal show={show} setShow={setShow} id={currentProfile} />
    </>
  );
};

export default Profile;
