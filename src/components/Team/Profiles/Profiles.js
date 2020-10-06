import React from 'react';
import styled from 'styled-components';

import { Container } from 'styles/style';
import Profile from 'components/Team/Profiles/Profile';
import { profileArr } from 'components/Team/Profiles/profilesInfo';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TeamContainer = styled(Container)`
  background-color: white;
  color: black;
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
