import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { fadeIn } from 'animations/animations';
import SalonInfo from 'components/pages/JoinWithUs/Salons/Salon/SalonInfo';

const Container = styled.div`
  width: 100%;
  height: auto;

  &:not(:last-child) {
    margin-bottom: 8rem;

    @media screen and (max-width: 36rem) {
      margin-bottom: 5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;

    opacity: 0;
    transform: translateY(60px);

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }

    span {
      font-size: 1rem;
      margin-right: 0.5rem;

      @media screen and (max-width: 20rem) {
        font-size: 0.6rem;
      }
    }

    &:before {
      content: '';
      display: block;
      width: 8%;
      border: 1px solid #b8ac79;
      margin: 0 auto 2rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 36rem) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: auto;
  font-size: 0;

  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;

const ImgSubContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-weight: 400;
  text-align: center;
  padding: 3rem 0 3rem 3rem;

  @media screen and (max-width: 48rem) {
    padding: 0 0 0 3rem;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    padding: 0;
    margin-top: 2rem;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 3rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }
  }

  q,
  p {
    font-size: 1rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
    }
  }

  q {
    font-weight: 300;
    line-height: 2;
    text-align: left;
    margin-bottom: 3rem;
  }
`;

const SubImg = styled.div`
  opacity: ${(props) => (props.isCurrent ? '0.7' : '1')};
  cursor: pointer;
`;

const SalonImage = ({ salon }) => {
  const { salonName, images } = salon;
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <ImgContainer>
      <div>
        <img src={mainImg} alt={salonName} />
      </div>
      <ImgSubContainer>
        {images.map((img, i) => (
          <SubImg
            key={i}
            onClick={() => setMainImg(img)}
            isCurrent={img === mainImg}
          >
            <img src={img} alt={salonName} />
          </SubImg>
        ))}
      </ImgSubContainer>
    </ImgContainer>
  );
};

const SalonContent = ({ title, text, owner }) => {
  return (
    <TextContainer>
      <h3>{title}</h3>
      <q>{text}</q>
      <p>{owner}</p>
    </TextContainer>
  );
};

const Salon = ({ salon }) => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const nameRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      fadeIn(0, [[nameRef.current, wrapperRef.current]]);
    }
  }, [intersection]);

  return (
    <Container ref={sectionRef}>
      <h2 ref={nameRef}>
        <span>채플린헤어</span>
        {salon.salonName}
      </h2>

      <Wrapper ref={wrapperRef}>
        <SalonImage salon={salon} />
        <SalonContent
          sectionRef={sectionRef}
          title={salon.title}
          text={salon.text}
          owner={salon.owner}
        />
      </Wrapper>
      <SalonInfo salon={salon} sectionRef={sectionRef} />
    </Container>
  );
};

export default Salon;
