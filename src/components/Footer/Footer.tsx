import React from 'react';

import './Footer.scss';

/**
 * Description placeholder
 *
 *
 * @returns {JSX.Element}
 */

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <h3 className="footer__title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            dignissimos?{' '}
          </h3>
          <p className="footer__copyright">
            2023 &copy; MY-CO Arcitecture Bureau
          </p>
        </div>
        <div className="footer__column">
          <div className="footer__contacts">
            <p className="footer__to-us">Свяжитесь с нами</p>
            <div className="footer__contact">
              {/* <EmailIcon /> */}
              <svg>
                <use xlinkHref="sprite.svg#email" />
              </svg>
              <span className="footer__contact-text">mail@mail.com</span>
            </div>
            <div className="footer__contact">
              <svg>
                <use xlinkHref="sprite.svg#phone" />
              </svg>
              <span className="footer__contact-text">+7 495 1234567</span>
            </div>
          </div>
          <div className="footer__social-media">
            <a className="footer__link" href="http://instagram.com">
              <svg>
                <use xlinkHref="sprite.svg#instagram" />
              </svg>
            </a>
            <a className="footer__link" href="http://vk.com">
              <svg>
                <use xlinkHref="sprite.svg#vk" />
              </svg>
            </a>
            <a className="footer__link" href="http://pinterest.com">
              <svg>
                <use xlinkHref="sprite.svg#pinterest" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
