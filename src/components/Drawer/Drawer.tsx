import { Link, NavLink } from 'react-router-dom';
import './Drawer.scss';

import React from 'react';

interface DrawerProps {
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  return (
    <div className="drawer__overlay">
      <div className="drawer__body">
        <button type="button" className="drawer__close-btn" onClick={onClose}>
          <svg>
            <use xlinkHref="sprite.svg#close" />
          </svg>
        </button>
        <div className="drawer__link-box">
          <a href="#current" className="drawer__link" onClick={onClose}>
            Текущий проект
          </a>
          <a href="#our-projects" className="drawer__link" onClick={onClose}>
            Наши проекты
          </a>
          <a href="#researches" className="drawer__link" onClick={onClose}>
            Researches
          </a>
          <a href="#about" className="drawer__link" onClick={onClose}>
            О нас
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
