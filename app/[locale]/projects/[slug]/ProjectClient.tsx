'use client';

import { useMode } from '@/contexts/ModeContext';
import { Project } from '@/types';
import Link from 'next/link';

interface ProjectClientProps {
  project: Project;
  locale: string;
}

export default function ProjectClient({ project, locale }: ProjectClientProps) {
  const { mode } = useMode();
  const t = (text: { en: string; es: string }) => 
    locale === 'es' ? text.es : text.en;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero del proyecto */}
      <div className="mb-12">
        <Link 
          href={`/${locale}/projects`}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 inline-block"
        >
          ← {locale === 'es' ? 'Volver a proyectos' : 'Back to projects'}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t(project.title)}
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          {t(project.description)}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              {locale === 'es' ? 'Demo en vivo' : 'Live Demo'}
            </a>
          )}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Contenido principal - visible siempre */}
      <div className="space-y-12 mb-16">
        {/* Problema */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'es' ? 'Problema' : 'Problem'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {locale === 'es' 
              ? 'Descripción del problema que resuelve este proyecto...' 
              : 'Description of the problem this project solves...'}
          </p>
        </section>

        {/* Solución */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'es' ? 'Solución' : 'Solution'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {locale === 'es'
              ? 'Cómo abordé y resolví el problema...'
              : 'How I approached and solved the problem...'}
          </p>
        </section>

        {/* Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Developer Mode: Contenido técnico extendido */}
      {mode === 'developer' && project.technicalDetails && (
        <div className="mt-12 p-6 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gray-500">$</span>
            <span>cat technical-details.md</span>
          </div>

          {/* Arquitectura */}
          <div className="mb-6">
            <p className="text-yellow-400 mb-2">## Architecture</p>
            <p className="text-gray-300 ml-4">
              {t(project.technicalDetails.architecture)}
            </p>
          </div>

          {/* Retos */}
          <div className="mb-6">
            <p className="text-yellow-400 mb-2">## Challenges</p>
            <ul className="list-disc list-inside text-gray-300 ml-4">
              {project.technicalDetails.challenges[locale === 'es' ? 'es' : 'en'].map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Decisiones de diseño */}
          <div className="mb-6">
            <p className="text-yellow-400 mb-2">## Design Decisions</p>
            <ul className="list-disc list-inside text-gray-300 ml-4">
              {project.technicalDetails.decisions[locale === 'es' ? 'es' : 'en'].map((decision, i) => (
                <li key={i}>{decision}</li>
              ))}
            </ul>
          </div>

          {/* Resultado */}
          <div>
            <p className="text-yellow-400 mb-2">## Results</p>
            <p className="text-gray-300 ml-4">
              {locale === 'es'
                ? 'Métricas de rendimiento, feedback del cliente, y lecciones aprendidas...'
                : 'Performance metrics, client feedback, and lessons learned...'}
            </p>
          </div>

          <p className="text-green-400 mt-6">$ <span className="animate-pulse">█</span></p>
        </div>
      )}
    </div>
  );
} 