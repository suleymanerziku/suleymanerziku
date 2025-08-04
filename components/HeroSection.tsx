import React from 'react';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-brand-bg px-4">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-heading mb-4 animate-fade-in-down">
          Suleyman Nurhussen
        </h1>
        <p className="text-xl md:text-2xl text-brand-text mb-8 animate-fade-in-up tracking-wider [animation-delay:200ms]">
          Full Stack Web Developer
        </p>
        <div className="space-x-4 animate-fade-in-up [animation-delay:400ms]">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="inline-block bg-brand-gold text-brand-heading font-bold py-3 px-8 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="inline-block bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-md hover:bg-brand-gold hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};