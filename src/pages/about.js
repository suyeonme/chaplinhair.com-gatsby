import React from 'react';

import SubHeader from 'components/Layout/Header/SubHeader';
import AboutUs from 'components/About/AboutUs';
import CEOMessage from 'components/About/CEOMessage';
import Feature from 'components/About/Feature';

const AboutPage = () => {
  const headerObj = {
    title: 'Who we are',
    subTitle:
      '열정을 따라 이 길을 걷다 보면, 역경과 외로움이 찾아올 때가 있습니다. 우리는 당신의 가족, 친구, 그리고 동반자입니다. 채플린헤어는 늘 당신과 함께합니다.',
  };

  return (
    <>
      <SubHeader {...headerObj} />
      <main>
        <AboutUs />
        <CEOMessage />
        <Feature />
      </main>
    </>
  );
};

export default AboutPage;
