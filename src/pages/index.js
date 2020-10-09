import React from 'react';

import HomeHeader from 'components/Layout/Header/HomeHeader';
import HomeVideo from 'components/pages/Home/HomeVideo';
import Instagram from 'components/pages/Home/Instagram';
import HomeInterview from 'components/pages/Home/HomeInterview';
import HomeYoutube from 'components/pages/Home/HomeYoutube';

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
