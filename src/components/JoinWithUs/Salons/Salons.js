import React from 'react';
import styled from 'styled-components';

import { salonsArr } from 'components/JoinWithUs/Salons/SalonsInfo';
import { Container, CategoryH4 } from 'styles/style';
import Salon from 'components/JoinWithUs/Salons/Salon/Salon';

const Wrapper = styled.div`
  margin-top: 3rem;
`;

const Salons = () => {
  return (
    <Container light>
      <CategoryH4>Partner Salons</CategoryH4>
      <Wrapper>
        {salonsArr.map((salon) => (
          <Salon salon={salon} key={salon.salonName} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Salons;
