import React, { useState, useEffect } from 'react';

import { useWindowWidth } from '../../hooks/useWindowWidth';

import './Header.scss';
import { MOBILE_SCREEN_WIDTH } from '../../utils/constants';

/**
 * Description placeholder
 *
 * @returns {JSX.Element}
 */

const Header: React.FC = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState<boolean>(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    windowWidth > MOBILE_SCREEN_WIDTH
      ? setIsShowBurgerMenu(false)
      : setIsShowBurgerMenu(true);
  }, [windowWidth]);

  useEffect(() => {
    //
    const handleScroll: () => void = () => {
      const position: number = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${scrollPosition > 100 ? 'header header_scroled' : 'header'}`}
    >
      <div className="header__content">
        <div className="header__logo-container">
          <p className="header__logo">MY-CO</p>
          <p className="header__logo">
            <svg>
              <use xlinkHref="sprite.svg#logo" />
            </svg>
          </p>
          <p className="header__logo">Architecture Bureau</p>
        </div>
        {isShowBurgerMenu ? (
          // <button className="header__burger-menu-btn">&#9776;</button>
          <button className="header__burger-menu-btn">
            <svg>
              <use xlinkHref="sprite.svg#burger" />
            </svg>
          </button>
        ) : (
          <nav className="header__nav">
            <a href="#current" className="header__link">
              Текущий проект
            </a>
            <a href="#our-projects" className="header__link">
              Наши проекты
            </a>
            <a href="#researches" className="header__link">
              Researches
            </a>
            <a href="#about" className="header__link">
              О нас
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
