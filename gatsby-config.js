module.exports = {
  siteMetadata: {
    title: '채플린헤어',
    description:
      '채플린헤어, 가맹안내, 채플린헤어 공식 홈페이지, 미용실 프랜차이즈, 지점소개',
    keyword: '채플린헤어, chaplin hair, 광주채플린헤어, 채플린미용실, 채플린',
    siteUrl: 'http://www.chaplinhair.com',
    image: 'assets/icons/logo-chaplin.png',
    author: 'suyeon.dev@gmail.com',
    socialLinks: {
      instagram: 'https://www.instagram.com/chaplin__hair/',
      blog: 'https://blog.naver.com/ckffl4325',
      youtube:
        'https://www.youtube.com/channel/UCsMa9_c-dbnRYOLG1Maa2og?view_as=subscriber',
      email: 'ckffl4325@naver.com',
      tel: '062-262-4325',
      address: '광주 북구 대천로 140-4(문흥동), 채플린헤어',
      addressEn: '140-4, Daecheon-ro, Buk-gu, Gwangju, Republic of Korea',
    },
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.chaplinhair.com',
        sitemap: 'https://www.chaplinhair.com/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/index.html',
            disallow: '/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-158923161-2`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ko',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.js`),
      },
    },
  ],
};
