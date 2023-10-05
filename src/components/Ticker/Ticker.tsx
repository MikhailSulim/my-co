import React from 'react';
import './Ticker.scss';
import Marquee from 'react-fast-marquee';

type tickerProps ={
  text: string;
  direction: 'left' | 'right';
}

const Ticker: React.FC<tickerProps> = ({text, direction}) => {
  return (
    <Marquee className="ticker" autoFill={true} direction={direction}>
      <span className="ticker__text">{text}</span>
    </Marquee>
  );
};

export default Ticker;
