import './ProjectCard.scss';
import React from 'react';

type cardProps = {
  title: string;
  imgUrl: string;
  description: string;
};

const ProjectCard: React.FC<cardProps> = ({ title, imgUrl, description }) => {
  return (
    <div className="card">
      <img className="card__img" src={imgUrl} alt={title} />
      <div className="card__text">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
