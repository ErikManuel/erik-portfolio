'use client';

import { useMode } from '@/contexts/ModeContext';
import { Code2, Server, Wrench, Users } from 'lucide-react';

interface SkillsProps {
  locale: string;
}

export default function Skills({ locale }: SkillsProps) {
  const { mode } = useMode();

  const skills = {
    frontend: ['HTML5', 'CSS/SCSS', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'LitElement', 'Cells'],
    backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PHP', 'Python'],
    tools: ['Git', 'VS Code', 'Postman', 'GitHub', 'Docker'],
    soft: ['Resolución de problemas', 'Atención al detalle', 'Trabajo colaborativo', 'Adaptabilidad', 'Comunicación efectiva', 'Documentación técnica']
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'es' ? 'Habilidades' : 'Skills'}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale === 'es' 
              ? 'Tecnologías y herramientas que uso diariamente'
              : 'Technologies and tools I use daily'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-blue-600" />
              {locale === 'es' ? 'Frontend' : 'Frontend'}
            </h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-blue-600" />
              {locale === 'es' ? 'Backend' : 'Backend'}
            </h3>
            <ul className="space-y-2">
              {skills.backend.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-blue-600" />
              {locale === 'es' ? 'Herramientas' : 'Tools'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              {locale === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Mode */}
        {mode === 'developer' && (
          <div className="mt-12 p-6 bg-gray-900 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-500">$</span>
              <span className="text-green-400">tech-stack --detailed</span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-gray-300">{'{'}</p>
              <p className="text-gray-300 ml-4">&quot;frontend&quot;: [&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;],</p>
              <p className="text-gray-300 ml-4">&quot;backend&quot;: [&quot;Node.js&quot;, &quot;Express&quot;, &quot;MongoDB&quot;],</p>
              <p className="text-gray-300 ml-4">&quot;tools&quot;: [&quot;Git&quot;, &quot;Docker&quot;, &quot;VS Code&quot;],</p>
              <p className="text-gray-300 ml-4">&quot;soft_skills&quot;: [&quot;Problem Solving&quot;, &quot;Team Work&quot;, &quot;Detail Oriented&quot;]</p>
              <p className="text-gray-300">{'}'}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}