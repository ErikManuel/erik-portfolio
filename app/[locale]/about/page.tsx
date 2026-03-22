import Navbar from '@/components/Navbar';
import { GraduationCap, Award, Languages, Briefcase, Shield, Users, BookOpen, Target } from 'lucide-react';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  const education = [
    {
      title: 'Ingeniería en Sistemas Computacionales',
      institution: 'Instituto Tecnológico Superior de Huetamo',
      period: '2016 - 2021',
      description: 'Formación en desarrollo de software, bases de datos y arquitectura de sistemas.'
    },
    {
      title: 'Academia de Ciberseguridad',
      institution: 'Especialización en Ciberseguridad',
      period: '2021 - 2023',
      description: 'Especialización en seguridad informática, ethical hacking y protección de datos.'
    }
  ];

  const certifications = [
    'Hacker Ético Profesional',
    'Pentester MASTER',
    'OSINT Máster',
    'Redes y Seguridad',
    'Programación Orientada a Ciberseguridad',
    'Normativas de Seguridad'
  ];

  const softSkills = [
    { name: 'Resolución de problemas', icon: Target },
    { name: 'Atención al detalle', icon: Shield },
    { name: 'Trabajo colaborativo', icon: Users },
    { name: 'Adaptabilidad', icon: Briefcase },
    { name: 'Documentación técnica', icon: BookOpen },
    { name: 'Comunicación efectiva', icon: Languages }
  ];

  const languages = [
    { name: 'Español', level: 'Nativo', percentage: 100 },
    { name: 'Inglés', level: 'Básico', percentage: 40 }
  ];

  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-24 pb-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'es' ? 'Sobre Mí' : 'About Me'}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {locale === 'es' 
                ? 'Frontend Developer con experiencia en banca empresarial y desarrollo fullstack. Apasionado por crear interfaces intuitivas y escribir código limpio y mantenible.'
                : 'Frontend Developer with experience in enterprise banking and fullstack development. Passionate about creating intuitive interfaces and writing clean, maintainable code.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna izquierda - Educación y Certificaciones */}
            <div className="lg:col-span-2 space-y-8">
              {/* Educación */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  {locale === 'es' ? 'Educación' : 'Education'}
                </h2>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-1">{item.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.period}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificaciones */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  {locale === 'es' ? 'Certificaciones' : 'Certifications'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha - Habilidades Blandas e Idiomas */}
            <div className="space-y-8">
              {/* Soft Skills */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  {locale === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}
                </h2>
                <div className="space-y-4">
                  {softSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Idiomas */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Languages className="w-6 h-6 text-blue-600" />
                  {locale === 'es' ? 'Idiomas' : 'Languages'}
                </h2>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-900 dark:text-white font-medium">{lang.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{lang.level}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contacto Rápido */}
              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">
                  {locale === 'es' ? '¿Interesado en colaborar?' : 'Interested in collaborating?'}
                </h3>
                <p className="mb-4 text-blue-100">
                  {locale === 'es' 
                    ? 'Estoy disponible para oportunidades freelance y posiciones remotas.'
                    : "I'm available for freelance opportunities and remote positions."}
                </p>
                <a
                  href={`/${locale}/contact`}
                  className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  {locale === 'es' ? 'Contáctame' : 'Contact me'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}