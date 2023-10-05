import React from 'react';
import Promo from '../../components/Promo/Promo';
import RecentProject from '../../components/RecentProject/RecentProject';
import Ticker from '../../components/Ticker/Ticker';
import './MainPage.scss';
import OurProjects from '../../components/OurProjects/OurProjects';
import AboutUs from '../../components/AboutUs/AboutUs';
import Researches from '../../components/Researches/Researches';

const MainPage: React.FC = () => {
  return (
    <main className="main">
      <Promo />
      <RecentProject />
      <Ticker text="#TOMATO" direction="left" />
      <OurProjects />
      <Ticker text="#POTATO" direction="right" />
      <Researches />
      <AboutUs />
    </main>
  );
};

export default MainPage;
