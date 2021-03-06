import React from 'react';
import styled from 'styled-components';

import { Container } from 'styles/style';
import Profile from 'components/pages/Team/Profiles/Profile';
import { profileArr } from 'components/pages/Team/Profiles/profilesInfo';

const TeamContainer = styled(Container)`
  background-color: white;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    justify-content: space-around;
  }
`;

const Profiles = () => {
  return (
    <TeamContainer>
      <Wrapper>
        {profileArr.map((profile) => {
          return (
            <Profile
              key={profile.id}
              img={profile.img}
              img2={profile.img2}
              egName={profile.en}
              koName={profile.ko}
              id={profile.id}
            />
          );
        })}
      </Wrapper>
    </TeamContainer>
  );
};

export default Profiles;
