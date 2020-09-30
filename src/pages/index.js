import React from 'react';

import Layout from 'components/Layout/Layout';
import HomeHeader from 'components/Home/HomeHeader';
import HomeVideo from 'components/Home/HomeVideo';
import Instagram from 'components/Home/Instagram';
import HomeInterview from 'components/Home/HomeInterview';
import HomeYoutube from 'components/Home/HomeYoutube';

export default function Home() {
  return (
    <Layout>
      <HomeHeader />
      <main>
        <HomeVideo />
        <HomeInterview />
        <HomeYoutube />
        <Instagram />
      </main>
    </Layout>
  );
}
