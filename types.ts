
import type { ReactNode } from 'react';

export interface Project {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}