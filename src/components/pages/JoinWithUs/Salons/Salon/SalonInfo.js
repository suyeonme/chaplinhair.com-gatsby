import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Map from 'components/Map/Map';
import Phone from 'assets/icons/phone-black.svg';
import Address from 'assets/icons/address.svg';
import Clock from 'assets/icons/time.svg';
import Instagram from 'assets/icons/instagram-black.svg';
import Kakao from 'assets/icons/kakaotalk.svg';

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 5rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;

  @media screen and (max-width: 576px) {
    margin-left: 0;
    margin-top: 3rem;
  }

  p,
  a {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  p {
    font-size: 1.6rem;
  }

  a {
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 1rem;
    letter-spacing: 1px;

    @media screen and (orientation: landscape) and (max-width: 812px) {
      margin-top: 0;
    }
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
`;

const SocialsWrapper = styled.div`
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const SalonInfo = ({ salon }) => {
  const { tel, address, hours, instagram, kakaoHairShop } = salon;

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
    <InfoWrapper>
      <Map lat={salon.lat} lng={salon.lng} mapId={salon.mapId} />
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
