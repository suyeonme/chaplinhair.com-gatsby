import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';

const Container = styled.div`
  width: 280px;
  height: auto;
  padding: 0 2rem;
  margin-bottom: 6rem;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;

const Name = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;

  span {
    display: block;
    font-size: 1.3rem;
    margin-top: 1rem;
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

Profile.propTypes = {
  salon: PropTypes.object,
  sectionRef: PropTypes.object,

  img: PropTypes.string,
  img2: PropTypes.string,
  egName: PropTypes.string,
  koName: PropTypes.string,
  id: PropTypes.number,
};
