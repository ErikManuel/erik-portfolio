import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { projects } from '@/lib/projects';
import { 
  Github, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Target,
  Shield,
  Code2,
  Server,
  Wrench,
  Database,
  Box,
  GitBranch,
  Award
} from 'lucide-react';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = (text: { en: string; es: string }) => 
    locale === 'es' ? text.es : text.en;

  // Mapeo de íconos por tecnología
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('next') || techLower.includes('react')) return <Code2 className="w-4 h-4 text-blue-500" />;
    if (techLower.includes('node') || techLower.includes('express')) return <Server className="w-4 h-4 text-green-500" />;
    if (techLower.includes('mongo') || techLower.includes('sql') || techLower.includes('postgres')) return <Database className="w-4 h-4 text-yellow-500" />;
    if (techLower.includes('type')) return <Box className="w-4 h-4 text-purple-500" />;
    if (techLower.includes('git') || techLower.includes('test')) return <GitBranch className="w-4 h-4 text-gray-500" />;
    if (techLower.includes('stripe')) return <Shield className="w-4 h-4 text-indigo-500" />;
    return <Wrench className="w-4 h-4 text-gray-500" />;
  };

  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-24 pb-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Botón para volver */}
          <a
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {locale === 'es' ? 'Volver a proyectos' : 'Back to projects'}
          </a>

          {/* Hero del proyecto */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t(project.title)}
              </h1>
              {project.featured && (
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  {locale === 'es' ? 'Destacado' : 'Featured'}
                </span>
              )}
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {t(project.description)}
            </p>

            {/* Tags de tecnologías con íconos */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                >
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>

            {/* Links del proyecto */}
            <div className="flex gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  {locale === 'es' ? 'Demo en vivo' : 'Live demo'}
                </a>
              )}
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-8">
            {/* Problema */}
            {project.problem && (
              <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 hover-lift">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  {locale === 'es' ? 'Problema' : 'Problem'}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t(project.problem)}
                </p>
              </section>
            )}

            {/* Solución */}
            {project.solution && (
              <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 hover-lift">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  {locale === 'es' ? 'Solución' : 'Solution'}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t(project.solution)}
                </p>
              </section>
            )}

            {/* Arquitectura */}
            {project.technicalDetails?.architecture && (
              <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 hover-lift">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Box className="w-6 h-6 text-purple-500" />
                  {locale === 'es' ? 'Arquitectura' : 'Architecture'}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t(project.technicalDetails.architecture)}
                </p>
              </section>
            )}

            {/* Stack detallado */}
            <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 hover-lift">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-blue-500" />
                {locale === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.techStack.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover-lift">
                    {getTechIcon(tech)}
                    <span className="text-gray-900 dark:text-white font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Retos */}
            {project.technicalDetails?.challenges && (
              <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 hover-lift">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-orange-500" />
                  {locale === 'es' ? 'Retos' : 'Challenges'}
                </h2>
                <ul className="space-y-3">
                  {project.technicalDetails.challenges[locale === 'es' ? 'es' : 'en'].map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Decisiones de diseño */}
            {project.technicalDetails?.decisions && (
              <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 hover-lift">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-500" />
                  {locale === 'es' ? 'Decisiones de Diseño' : 'Design Decisions'}
                </h2>
                <ul className="space-y-3">
                  {project.technicalDetails.decisions[locale === 'es' ? 'es' : 'en'].map((decision, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Resultados */}
            {project.technicalDetails?.results && (
              <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 hover-lift">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  {locale === 'es' ? 'Resultados' : 'Results'}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t(project.technicalDetails.results)}
                </p>
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}