import React from 'react';

import HomeHeader from 'components/Layout/Header/HomeHeader';
import HomeVideo from 'components/Home/HomeVideo';
import Instagram from 'components/Home/Instagram';
import HomeInterview from 'components/Home/HomeInterview';
import HomeYoutube from 'components/Home/HomeYoutube';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeVideo />
        <HomeInterview />
        <HomeYoutube />
        <Instagram />
      </main>
    </>
  );
}
