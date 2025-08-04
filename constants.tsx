
import React from 'react';
import type { Project } from './types';

// SVG Icons
export const CalculatorIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 17h.01M15 17h.01M9 10h.01M12 10h.01M15 10h.01M3 4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
  </svg>
);

export const FurnitureIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 9H4a1 1 0 00-1 1v10a1 1 0 001 1h4l1-5h6l1 5h4a1 1 0 001-1V10a1 1 0 00-1-1zM7 9V5a2 2 0 012-2h6a2 2 0 012 2v4" />
  </svg>
);

export const VideoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);


// Projects Data
export const PROJECTS: Project[] = [
  {
    icon: CalculatorIcon,
    title: 'Ethiopian Payroll Calculator',
    description: 'A precise tool that calculates Ethiopian income tax, providing clear and accurate payroll information.',
    link: 'https://ethiopian-payroll-calculator.vercel.app/',
  },
  {
    icon: FurnitureIcon,
    title: 'Furnitrack',
    description: 'A comprehensive system designed to track the financial activities of a furniture manufacturing company.',
    link: '#',
  },
  {
    icon: VideoIcon,
    title: 'Dagu Meet',
    description: 'An intuitive and reliable video conferencing platform for seamless virtual communication.',
    link: '#',
  },
];

// Contact Information
export const CONTACT_INFO = {
  email: 'suleymanerziku@gmail.com',
  phone: '+251923623512',
  telegram: '@suleymanerziku',
  telegramLink: 'https://t.me/suleymanerziku'
};