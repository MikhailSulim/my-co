import { PROJECTS } from '../../utils/constants';
import ProjectCard from '../ProjectCard/ProjectCard';
import './OurProjects.scss';

import React from 'react';

const OurProjects: React.FC = () => {
  return (
    <section id="our-projects" className="our-projects">
      <h2 className="our-projects__title">
        Наши <br />
        проекты
      </h2>
      <div className="our-projects__cards">
        {PROJECTS.map((item) => (
          <ProjectCard
            title={item.title}
            imgUrl={item.imgUrl}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
