'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { projects } from '@/lib/projects';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const [locale, setLocale] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    params.then(p => {
      setLocale(p.locale);
      setMounted(true);
    });
  }, [params]);

  if (!mounted) return null;

  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-24 pb-20 bg-white dark:bg-gray-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'es' ? 'Todos los Proyectos' : 'All Projects'}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {locale === 'es' 
                ? 'Una colección de proyectos personales y profesionales que demuestran mi experiencia en desarrollo frontend y fullstack.'
                : 'A collection of personal and professional projects showcasing my frontend and fullstack development experience.'}
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                {/* Link principal que cubre toda la card excepto el botón de GitHub */}
                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="block cursor-pointer"
                >
                  {/* Imagen del proyecto (placeholder) */}
                  <div className="aspect-video relative bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title[locale === 'es' ? 'es' : 'en']}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay de color suave para legibilidad */}
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

                    {/* Badge de destacado */}
                    {project.featured && (
                      <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {locale === 'es' ? 'Destacado' : 'Featured'}
                      </span>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title[locale === 'es' ? 'es' : 'en']}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description[locale === 'es' ? 'es' : 'en']}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Footer de la card con GitHub link */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.techStack.length} tecnologías
                  </span>
                  
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()} // Evita que el click llegue al Link
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <FolderGit2 className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{projects.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'es' ? 'Total proyectos' : 'Total projects'}
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Sparkles className="w-6 h-6 mx-auto mb-2 text-yellow-600 dark:text-yellow-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'es' ? 'Destacados' : 'Featured'}
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Layers className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {Array.from(new Set(projects.flatMap(p => p.techStack))).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'es' ? 'Tecnologías' : 'Technologies'}
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Globe className="w-6 h-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {projects.filter(p => p.links.live).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'es' ? 'Live demos' : 'Live demos'}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}