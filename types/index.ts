export type Locale = 'en' | 'es';
export type Theme = 'light' | 'dark';
export type Mode = 'recruiter' | 'developer';

export interface Project {
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  image: string;
  featured: boolean;
  techStack: string[];
  links: { live?: string; github: string };
}