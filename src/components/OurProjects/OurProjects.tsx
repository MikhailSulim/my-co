import React from 'react';

import { PROJECTS } from '../../utils/constants';
import { ProjectCard, MProjectCard } from '../ProjectCard/ProjectCard';
import { motion } from 'framer-motion';

import './OurProjects.scss';

/**
 * Description placeholder
 * @date 10/15/2023 - 11:49:13 PM
 *
 * @returns {JSX.Element}
 */

const Animation = {
  hidden: (custom: number) => ({
    x: custom * 300,
    opacity: 0,
  }),
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
   
  }),
};

const OurProjects: React.FC = (): JSX.Element => {
  return (
    <section id="our-projects" className="our-projects">
      <h2 className="our-projects__title">
        Наши <br />
        проекты
      </h2>
      <div className="our-projects__cards">
        {PROJECTS.map((item, index) => {
          const odd = (index + 1) % 2 === 0 ? 1 : -1;
          return (
            <MProjectCard
              key={index}
              initial="hidden"
              whileInView="visible"
              custom={odd}
              variants={Animation}
              viewport={{ amount: 0.4 }}
              title={item.title}
              imgUrl={item.imgUrl}
              description={item.description}
            />
          );
        })}
        ;
      </div>
    </section>
  );
};

export default OurProjects;
