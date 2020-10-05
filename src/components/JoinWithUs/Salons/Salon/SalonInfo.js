import React from 'react';
import styled from 'styled-components';

import Map from 'components/Map/Map';
import Phone from 'assets/icons/phone-black.svg';
import Address from 'assets/icons/address.svg';
import Clock from 'assets/icons/Time.svg';
import Instagram from 'assets/icons/instagram-black.svg';
import Kakao from 'assets/icons/kakaotalk.svg';

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;

  p,
  a {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 1.4rem;
    }
  }

  p {
    font-size: 1rem;
  }

  a {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0.5rem;
    letter-spacing: 1px;
  }
`;

const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 1rem;
`;

const SocialsWrapper = styled.div`
  margin-top: 1rem;
`;

const SalonInfo = ({ salon }) => {
  const infoArr = [
    { img: Phone, alt: '채플린헤어 전화번호', text: salon.tel },
    { img: Address, alt: '채플린헤어 주소', text: salon.address },
    { img: Clock, alt: '채플린헤어 영업시간', text: salon.hours },
  ];

  const socialsArr = [
    { img: Instagram, alt: '채플린헤어 인스타그램', href: salon.instagram },
    { img: Kakao, alt: '채플린헤어 카카오헤어샵', href: salon.kakaoHairShop },
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
        href={`http://www.instagram.com/${social.href}`}
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
