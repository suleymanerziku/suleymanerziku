import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-bg py-6 border-t border-brand-border">
      <div className="container mx-auto px-6 text-center text-brand-text">
        <p>&copy; {currentYear} Suleyman Nurhussen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;