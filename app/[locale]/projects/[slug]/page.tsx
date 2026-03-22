import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { projects } from '@/lib/projects';
import { 
  Github, 
  ExternalLink, 
  Calendar, 
  User, 
  Code2, 
  Server, 
  Wrench,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Target,
  Shield,
  Zap
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

  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-24 pb-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Botón para volver */}
          <a
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'es' ? 'Volver a proyectos' : 'Back to projects'}
          </a>

          {/* Hero del proyecto */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t(project.title)}
              </h1>
              {project.featured && (
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {locale === 'es' ? 'Destacado' : 'Featured'}
                </span>
              )}
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {t(project.description)}
            </p>

            {/* Tags de tecnologías */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                >
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  {locale === 'es' ? 'Demo en vivo' : 'Live demo'}
                </a>
              )}
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Contenido principal - visible en ambos modos */}
          <div className="space-y-12">
            {/* Problema */}
            <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                {locale === 'es' ? 'Problema' : 'Problem'}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {locale === 'es' 
                  ? 'Descripción del problema que resuelve este proyecto...'
                  : 'Description of the problem this project solves...'}
              </p>
            </section>

            {/* Solución */}
            <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                {locale === 'es' ? 'Solución' : 'Solution'}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {locale === 'es'
                  ? 'Cómo abordé y resolví el problema...'
                  : 'How I approached and solved the problem...'}
              </p>
            </section>

            {/* Stack detallado */}
            <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-600" />
                {locale === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.techStack.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Retos */}
            <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-red-600" />
                {locale === 'es' ? 'Retos' : 'Challenges'}
              </h2>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Descripción del reto {item}...</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Resultados */}
            <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                {locale === 'es' ? 'Resultados' : 'Results'}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {locale === 'es'
                  ? 'Métricas de rendimiento, feedback del cliente y lecciones aprendidas...'
                  : 'Performance metrics, client feedback, and lessons learned...'}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}