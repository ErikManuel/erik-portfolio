'use client';

import Link from 'next/link';
import { projects } from '@/lib/projects';

interface FeaturedProjectsProps {
  locale: string;
}

export default function FeaturedProjects({ locale }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale === 'es' 
              ? 'Selección de proyectos que demuestran mi experiencia en desarrollo frontend y fullstack.'
              : 'A selection of projects showcasing my frontend and fullstack development experience.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link
                key={project.slug}
                href={`/${locale}/projects/${project.slug}`}
                className="block bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover-lift"
              >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center">
                <span className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                  🚀
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title[locale === 'es' ? 'es' : 'en']}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description[locale === 'es' ? 'es' : 'en']}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <span>{locale === 'es' ? 'Ver proyecto' : 'View project'}</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}