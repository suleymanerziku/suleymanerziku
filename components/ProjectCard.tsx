import React from 'react';
import type { ReactNode } from 'react';

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, link }) => {
  const isClickable = link && link !== '#';

  const cardClasses = "bg-brand-section-bg h-full p-8 rounded-lg shadow-xl border border-transparent hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start";

  const CardContent = (
    <>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-serif text-brand-heading mb-3">{title}</h3>
      <p className="text-brand-text flex-grow">{description}</p>
    </>
  );

  if (isClickable) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
        aria-label={`View project: ${title}`}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      {CardContent}
    </div>
  );
};

export default ProjectCard;