import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import PropTypes from 'prop-types';

import Map from 'components/Map/Map';
import Phone from 'assets/icons/phone-black.svg';
import Address from 'assets/icons/address.svg';
import Clock from 'assets/icons/time.svg';
import Instagram from 'assets/icons/instagram-black.svg';
import Kakao from 'assets/icons/kakaotalk.svg';
import { useEffect } from 'react';

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 3rem;

  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 36rem) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;

  @media screen and (max-width: 36rem) {
    margin-left: 0;
    margin-top: 2rem;
  }

  p,
  a {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 1.4rem;

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        margin-bottom: 1rem;
      }

      @media screen and (max-width: 48rem) {
        margin-bottom: 1rem;
      }
    }
  }

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

  a {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0.5rem;
    letter-spacing: 1px;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.8rem;
      margin-top: 0;
    }

    @media screen and (max-width: 48rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
    }
  }
`;

const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 1rem;

  @media screen and (max-width: 48rem) {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (max-width: 20rem) {
    margin-right: 0.5rem;
  }
`;

const SocialsWrapper = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 48rem) {
    margin-top: 0;
  }
`;

const SalonInfo = ({ salon, sectionRef }) => {
  const { tel, address, hours, instagram, kakaoHairShop } = salon;

  const infoRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      gsap.to(infoRef.current, {
        duration: 0.5,
        delay: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.inOut',
      });
    }
  }, [intersection]);

  const infoArr = [
    { img: Phone, alt: '채플린헤어 전화번호', text: tel },
    { img: Address, alt: '채플린헤어 주소', text: address },
    { img: Clock, alt: '채플린헤어 영업시간', text: hours },
  ];

  const socialsArr = [
    { img: Instagram, alt: '채플린헤어 인스타그램', href: instagram },
    { img: Kakao, alt: '채플린헤어 카카오헤어샵', href: kakaoHairShop },
  ];

  const info = infoArr.map((i, index) => (
    <p key={index}>
      <Icon src={i.img} alt={i.alt} />
      {i.text}
    </p>
  ));

  let socials;
  if (salon.instagram && salon.kakaoHairShop) {
    socials = socialsArr.map((social, i) => (
      <a
        key={i}
        target="_blank"
        rel="noreferrer"
        href={
          social.img === Instagram
            ? `http://www.instagram.com/${social.href}`
            : `https://hairshop.kakao.com/store/${social.href}`
        }
      >
        <Icon src={social.img} alt={social.alt} />
        {social.img === Instagram ? salon.instagram : 'Kakao Hairshop'}
      </a>
    ));
  }

  return (
    <InfoWrapper ref={infoRef}>
      <Map
        lat={salon.lat}
        lng={salon.lng}
        mapId={salon.mapId}
        name={salon.salonName}
      />
      <InfoContainer>
        {info}
        <SocialsWrapper>{socials}</SocialsWrapper>
      </InfoContainer>
    </InfoWrapper>
  );
};

export default SalonInfo;

SalonInfo.propTypes = {
  salon: PropTypes.object,
  sectionRef: PropTypes.object,
};
