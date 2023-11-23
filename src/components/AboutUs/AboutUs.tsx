import React from 'react';

import studio from './../../images/studio.png';
import architector from './../../images/architector.png';

import './AboutUs.scss';

/**
 * Блок "О нас"
 *
 * @returns {JSX.Element}
 */

const AboutUs: React.FC = (): JSX.Element => {
  
  return (
    <section id="about" className="about">
      <h2 className="about__title">О нас</h2>
      <div className="about__content">
        <div className="about__left-side">
          <figure className="about__figure">
            <img
              className="about__img-studio"
              src={studio}
              alt="изображение студии"
            />
            <figcaption className="about__img-text">
              Вид нашей студии
            </figcaption>
          </figure>
          <div className="about__links">
            <a className="about__link" href="http://instagram.com">
              Instagram
            </a>
            <a className="about__link" href="http://vk.com">
              VK
            </a>
            <a className="about__link" href="http://pinterest.com">
              Pinterest
            </a>
          </div>
        </div>
        <div className="about__right-side">
          <figure className="about__figure">
            <p className="about__text">
              & is a connection. Connection between strategy & design, between
              design & business, between business & audience
            </p>
            <img
              className="about__img-architector"
              src={architector}
              alt="архитектор студии"
            />
            <figcaption className="about__img-text">
              Быть творческим во время работы
            </figcaption>
          </figure>
          <p className="about__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            voluptatum sit earum porro eaque soluta corrupti, officia
            blanditiis, nam nostrum temporibus? Nam, fuga labore minima ullam
            veritatis autem nulla, illum officiis, voluptatum quidem iure
            explicabo odit exercitationem similique vel! Molestiae consequatur
            sequi vero ea tenetur nesciunt dolorem inventore quas explicabo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
