import React from 'react';
import './Ticker.scss';
import Marquee from 'react-fast-marquee';

const Ticker: React.FC = () => {
  return (
    <Marquee className="ticker" autoFill={true}>
      <span className="ticker__text"> #TOMATO </span>
    </Marquee>
  );
};

export default Ticker;
