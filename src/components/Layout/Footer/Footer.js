import React from 'react';

import ChaplinIcon from 'assets/icons/logo-2.png';
import Instagram from 'assets/icons/instagram.svg';
import Youtube from 'assets/icons/youtube.svg';
import Naver from 'assets/icons/naver.svg';

import {
  FooterContainer,
  Logo,
  ItemsContainer,
  Item,
  SocialContainer,
  SocialIcon,
} from 'components/Layout/Footer/FooterStyles';

const Footer = () => {
  const items = [
    {
      title: 'Contact Us',
      tel: 'Tel: 062-262-4325',
      email: 'Email: ckffl4325@naver.com',
    },
    {
      title: 'Adress',
      ko: '광주 북구 대천로 140-4(문흥동), 채플린헤어',
      eg: '140-4, Daecheon-ro, Buk-gu, Gwangju, Republic of Korea',
    },
  ];

  const socials = [
    {
      icon: Instagram,
      iconTitle: 'Instagram',
      url: 'https://www.instagram.com/chaplin__hair/',
    },
    {
      icon: Youtube,
      iconTitle: 'Youtube',
      url:
        'https://www.youtube.com/channel/UCsMa9_c-dbnRYOLG1Maa2og?view_as=subscriber',
    },
    { icon: Naver, iconTitle: 'Blog', url: 'https://blog.naver.com/ckffl4325' },
  ];

  const info = items.map((item, i) => {
    return (
      <Item key={i}>
        <h3>{item.title}</h3>
        {item.tel ? (
          <a href="tel:062-262-4325">
            <p>{item.tel}</p>
          </a>
        ) : (
          <p>{item.ko}</p>
        )}
        {item.email ? (
          <p>
            <a href="mailto:ckffl4325@naver.com">{item.email}</a>
          </p>
        ) : (
          <p>{item.eg}</p>
        )}
      </Item>
    );
  });

  const socialItems = (
    <Item>
      <h3>Socials</h3>
      <div>
        {socials.map((social, i) => {
          return (
            <SocialContainer key={i}>
              <SocialIcon src={social.icon} />
              <a href={social.url} target="_blank">
                <span>{social.iconTitle}</span>
              </a>
            </SocialContainer>
          );
        })}
      </div>
    </Item>
  );

  return (
    <FooterContainer>
      <Logo src={ChaplinIcon} />
      <ItemsContainer>
        {info}
        {socialItems}
      </ItemsContainer>
      <p>© Copyright {new Date().getFullYear()} by Chplin Hair</p>
    </FooterContainer>
  );
};
export default Footer;
