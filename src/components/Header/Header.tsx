import React from 'react';
import './Header.scss';
import ArrayIcon from '../Icons/ArrayIcon';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          MY-CO  <ArrayIcon /> Architecture Bureau
        </div>
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
      </div>
    </header>
  );
};

export default Header;
