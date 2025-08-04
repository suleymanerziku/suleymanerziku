import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-section-bg">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-heading mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-brand-text leading-relaxed">
          I am a passionate Full Stack Web Developer dedicated to building clean, elegant, and efficient applications.
          My focus is on crafting end-to-end solutions that solve real-world problems.
          With a blend of design sensibility and technical expertise, I strive to create web experiences that are not only functional but also beautiful and intuitive to use.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;