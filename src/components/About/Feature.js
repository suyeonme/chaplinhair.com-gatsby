import React from 'react';
import styled from 'styled-components';

import { Container, TitleH1, CategoryH4 } from 'styles/style';

const Table = styled.table`
  border-collapse: collapse;
  border-style: hidden;
  width: 60%;
  margin: 0 auto;
`;

const Row = styled.tr`
  border-collapse: collapse;
  border: 1px solid #b8ac79;
`;

const Cell = styled.td`
  border-collapse: collapse;
  border: 1px solid #b8ac79;
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CellContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* align-items: center; */}
`;

const Feature = () => {
  return (
    <Container bgColor="black" color="#F6F3EC">
      <CategoryH4>Features</CategoryH4>
      <TitleH1>Pillars of culture</TitleH1>

      <Table>
        <Row>
          <Cell>
            <CellContainer>
              <Title>Originality</Title>
            </CellContainer>
          </Cell>
          <Cell>
            <CellContainer>
              <Title>Team</Title>
            </CellContainer>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <CellContainer>
              <Title>Education</Title>
            </CellContainer>
          </Cell>
          <Cell>
            <CellContainer>
              <Title>Culture</Title>
            </CellContainer>
          </Cell>
        </Row>
      </Table>
    </Container>
  );
};

export default Feature;
