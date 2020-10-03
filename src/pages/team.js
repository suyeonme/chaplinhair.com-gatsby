import React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout/Layout';
import SubHeader from 'components/Layout/Header/SubHeader';
import Profiles from 'components/Team/Profiles/Profiles';

const TeamPage = () => {
  const headerObj = {
    title: 'We are team',
    subTitle:
      '좋은 사람이 모여 좋은 팀을 만들고 프로페셔널한 팀은 개개인을 프로로 만듭니다. 팀워크는 가장 중요한 요소입니다. 우리가 함께 할 때 혁신적인 변화를 만들 수 있습니다.',
  };

  return (
    <Layout>
      <SubHeader {...headerObj} />
      <main>
        <Profiles />
      </main>
    </Layout>
  );
};

export default TeamPage;
