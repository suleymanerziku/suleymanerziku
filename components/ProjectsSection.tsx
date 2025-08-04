import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-heading text-center mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;