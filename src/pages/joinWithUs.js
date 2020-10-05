import React from 'react';

import Layout from 'components/Layout/Layout';
import SubHeader from 'components/Layout/Header/SubHeader';
import Partnership from 'components/JoinWithUs/Partnership';
import Salons from 'components/JoinWithUs/Salons/Salons';

const JoinWithUsPage = () => {
  const headerObj = {
    title: 'Join With Us',
    subTitle:
      '내가 세 명의 사람에게 영향을 미치고, 그 세 명이 또 다른 세 명에게 영향을 줄 수 있다면, 그렇게 계속된다면 우리는 세상을 바꿀 수 있다고 믿습니다. 채플린헤어는 행복하고 건강한 문화를 만들어나갑니다. 지금이 당신과 함께 할 시간입니다.',
  };

  return (
    <Layout>
      <SubHeader {...headerObj} />
      <main>
        <Partnership />
        <Salons />
      </main>
    </Layout>
  );
};

export default JoinWithUsPage;
