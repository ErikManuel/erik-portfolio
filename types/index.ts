// types/index.ts

export type Locale = 'en' | 'es';
export type Theme = 'light' | 'dark';
export type Mode = 'recruiter' | 'developer';

export interface Project {
  slug: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  image: string;
  featured: boolean;
  techStack: string[];
  problem?: {
    en: string;
    es: string;
  };
  solution?: {
    en: string;
    es: string;
  };
  technicalDetails?: {
    architecture: {
      en: string;
      es: string;
    };
    challenges: {
      en: string[];
      es: string[];
    };
    decisions: {
      en: string[];
      es: string[];
    };
    results?: {
      en: string;
      es: string;
    };
  };
  links: {
    live?: string;
    github: string;
  };
}