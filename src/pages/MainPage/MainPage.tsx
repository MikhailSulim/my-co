import React from 'react';
import Promo from '../../components/Promo/Promo';
import RecentProject from '../../components/RecentProject/RecentProject';
import Ticker from '../../components/Ticker/Ticker';
import './MainPage.scss';

const MainPage: React.FC = () => {
  return (
    <main className="main">
      <Promo />
      <RecentProject />
      <Ticker />
    </main>
  );
};

export default MainPage;
