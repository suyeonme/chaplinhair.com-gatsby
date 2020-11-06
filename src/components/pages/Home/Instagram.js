import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { fadeIn } from 'animations/animations';
import WomanIcon from 'assets/icons/instagram-1.png';
import ManIcon from 'assets/icons/instagram-2.png';
import { CategoryH4, Container } from 'styles/style';
import { PrimaryBtn } from 'components/Buttons/Buttons';

const Wrapper = styled(Container)`
  text-align: center;
`;

const IconContainer = styled.div`
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(60px);
`;

const Icon = styled.img`
  width: 13rem;
  height: 13rem;
`;

const Title = styled.h2`
  font-family: Playfair Display;
  font-size: 3.8rem;
  letter-spacing: 0.2rem;
  text-align: center;
  padding: 6rem 0;
  opacity: 0;
  transform: translateY(60px);

  span {
    font-weight: 600;
  }
`;

const Instagram = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    fadeIn(0, sectionRef.current, '#instagram');
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            instagram
          }
        }
      }
    }
  `);

  return (
    <Wrapper light ref={sectionRef}>
      <CategoryH4>Social</CategoryH4>
      <IconContainer id="instagram">
        <Icon src={WomanIcon} alt="Woman Icon" />
        <Icon src={ManIcon} alt="Man Icon" />
      </IconContainer>
      <Title id="instagram">
        Follow us on <span>Instagram</span>
      </Title>
      <PrimaryBtn
        url={data.site.siteMetadata.socialLinks.instagram}
        text="Show More"
        isAnimated={true}
      />
    </Wrapper>
  );
};

export default Instagram;
