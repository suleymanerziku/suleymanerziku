import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-section-bg">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-heading mb-4">Get In Touch</h2>
        <p className="text-lg text-brand-text mb-12">
          I'm currently available for freelance work and new opportunities. If you have a project in mind or just want to say hello, feel free to reach out.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-brand-text hover:text-brand-gold transition-colors duration-300 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {CONTACT_INFO.email}
          </a>
          <a href={CONTACT_INFO.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-text hover:text-brand-gold transition-colors duration-300 text-lg">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.9994 1.34155C5.93944 1.34155 1.01245 5.70617 1.01245 12.0163C1.01245 18.3245 5.93944 22.6891 11.9994 22.6891C18.0614 22.6891 22.9884 18.3245 22.9884 12.0163C22.9884 5.70617 18.0614 1.34155 11.9994 1.34155ZM17.4044 8.76123L15.3944 17.5898C15.2284 18.3211 14.7334 18.5133 14.1204 18.1994L10.7414 15.8239L9.23145 17.2743C9.04345 17.453 8.88345 17.6133 8.52745 17.6133L8.69845 14.1685L15.1484 8.24359C15.4674 7.95423 15.0864 7.78859 14.6904 8.07792L7.00045 13.0906L3.68845 12.0832C2.96245 11.8549 2.94345 11.2335 3.82045 10.8622L16.4884 5.92323C17.1124 5.67285 17.6254 6.00767 17.4044 8.76123Z"/></svg>
            {CONTACT_INFO.telegram}
          </a>
           <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-brand-text hover:text-brand-gold transition-colors duration-300 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;