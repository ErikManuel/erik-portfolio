'use client';

import { useMode } from '@/contexts/ModeContext';

interface ExperienceProps {
  locale: string;
}

export default function Experience({ locale }: ExperienceProps) {
  const { mode } = useMode();

  const experiences = [
    {
      period: 'Ene 2026 - Actualidad',
      company: 'BBVA (Babel)',
      role: 'Frontend Developer',
      description: {
        en: 'Development of new business flows and evolutionary maintenance for banking operations.',
        es: 'Desarrollo de nuevos flujos de negocio y mantenimiento evolutivo para operaciones bancarias.'
      },
      achievements: [
        'Integración y consumo de servicios/APIs',
        'Validación de respuestas y manejo de estados',
        'Colaboración con equipos de diseño, QA y backend'
      ]
    },
    {
      period: 'May 2022 - Feb 2025',
      company: 'BBVA (IDs Comercial)',
      role: 'Desarrollador Web',
      description: {
        en: 'Bug resolution, corrective maintenance, and review of new flows in international banking.',
        es: 'Resolución de bugs, mantenimiento correctivo y revisión de nuevos flujos en banca internacional.'
      },
      achievements: [
        'Optimización de rendimiento front-end',
        'Documentación técnica de procesos',
        'Evaluación y gestión de cambios en ambientes de ventas'
      ]
    },
    {
      period: '2025',
      company: 'Proyecto SAPAHU',
      role: 'Fullstack Developer',
      description: {
        en: 'Fullstack web solution with modern architecture.',
        es: 'Solución web fullstack con arquitectura moderna.'
      },
      achievements: [
        'Frontend con React.js + Next.js',
        'Backend con Node.js + Express',
        'Integración con MongoDB',
        'Manejo de validaciones y control de respuestas'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'es' ? 'Experiencia' : 'Experience'}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale === 'es' 
              ? 'Mi trayectoria profesional en desarrollo'
              : 'My professional journey in development'}
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                {exp.period}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {exp.company}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.role}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.description[locale === 'es' ? 'es' : 'en']}
              </p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Developer Mode */}
        {mode === 'developer' && (
          <div className="mt-12 p-6 bg-gray-900 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-500">$</span>
              <span className="text-green-400">cat experience-bbva.md</span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-gray-300">## BBVA (2022-presente)</p>
              <p className="text-gray-400 ml-4">### Tecnologías:</p>
              <p className="text-gray-400 ml-8">- JavaScript/ES6+</p>
              <p className="text-gray-400 ml-8">- HTML/CSS/SCSS</p>
              <p className="text-gray-400 ml-8">- Cells Framework</p>
              <p className="text-gray-400 ml-8">- LitElement</p>
              <p className="text-gray-400 ml-4">### Logros:</p>
              <p className="text-gray-400 ml-8">- Optimización de renderizado</p>
              <p className="text-gray-400 ml-8">- Reducción de carga</p>
              <p className="text-gray-400 ml-8">- Documentación técnica</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}