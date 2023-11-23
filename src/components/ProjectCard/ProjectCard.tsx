import './ProjectCard.scss';
import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  title: string;
  imgUrl: string;
  description: string;
};

export const ProjectCard: React.FC<CardProps> = forwardRef(
  ({ title, imgUrl, description }, ref: Ref<HTMLDivElement>) => {
    return (
      <div className="card" ref={ref}>
        <img className="card__img" src={imgUrl} alt={title} />
        <div className="card__text">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </div>
      </div>
    );
  }
);

export const MProjectCard = motion<CardProps>(ProjectCard);
