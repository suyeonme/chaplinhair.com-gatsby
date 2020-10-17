import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Instagram from 'assets/icons/instagram.svg';
import Youtube from 'assets/icons/youtube.svg';
import Naver from 'assets/icons/naver.svg';

import {
  Item,
  SocialIcon,
  FooterContainer,
  ItemsContainer,
  SocialContainer,
} from 'components/Layout/Footer/FooterStyles';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            instagram
            youtube
            blog
            tel
            email
            address
            addressEn
          }
        }
      }
    }
  `);

  const info = [
    {
      title: 'Contact Us',
      tel: `Tel: ${data.site.siteMetadata.socialLinks.tel}`,
      email: `Email: ${data.site.siteMetadata.socialLinks.email}`,
    },
    {
      title: 'Adress',
      ko: data.site.siteMetadata.socialLinks.address,
      eg: data.site.siteMetadata.socialLinks.addressEn,
    },
  ];

  const socials = [
    {
      icon: Instagram,
      iconTitle: 'Instagram',
      url: data.site.siteMetadata.socialLinks.instagram,
    },
    {
      icon: Youtube,
      iconTitle: 'Youtube',
      url: data.site.siteMetadata.socialLinks.youtube,
    },
    {
      icon: Naver,
      iconTitle: 'Blog',
      url: data.site.siteMetadata.socialLinks.blog,
    },
  ];

  const infoItems = info.map((item, i) => {
    return (
      <Item key={i}>
        <h3>{item.title}</h3>
        {item.tel ? (
          <a href={`tel:${data.site.siteMetadata.socialLinks.tel}`}>
            <p>{item.tel}</p>
          </a>
        ) : (
          <p>{item.ko}</p>
        )}
        {item.email ? (
          <p>
            <a href={`mailto:${data.site.siteMetadata.socialLinks.email}`}>
              {item.email}
            </a>
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
              <a href={social.url} target="_blank" rel="noopener noreferrer">
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
      <ItemsContainer>
        {infoItems}
        {socialItems}
      </ItemsContainer>
      <p>© Copyright {new Date().getFullYear()} by Chplin Hair</p>
    </FooterContainer>
  );
};
export default Footer;
