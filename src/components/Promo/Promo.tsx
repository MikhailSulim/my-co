import React from 'react';

import CircleText from '../CircleText/CircleText';
import image from './../../images/promo.jpg';

import './Promo.scss';

const Promo: React.FC = () => {
  return (
    <section className="promo">
      <p className="promo__logo">MY-CO Architecture bureau</p>
      <div className="promo__text">
        <h1 className="promo__title">Studio exchange.</h1>
        <p className="promo__subtitle">
          Swapping our design studios <br /> for 2 weeks for some work and some
          fun.
        </p>
      </div>
      <img className="promo__image" src={image} alt="" />
      

      {/* <div className="image">
        <div className="image__triangle"></div>
        <CircleText className="image__circle" text="Architecture Bureau MY-CO "/>
      </div> */}
    </section>
  );
};

export default Promo;
