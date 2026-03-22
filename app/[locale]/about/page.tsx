'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { 
  GraduationCap, Award, Languages, Briefcase, 
  Shield, Users, BookOpen, Target, Code2,
  Server, Database, GitBranch, FileText,
  Calendar, MapPin, Building2, CheckCircle2,
  ExternalLink, Linkedin, Mail, Phone
} from 'lucide-react';

export default function AboutPage({
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

  const isEs = locale === 'es';

  const profile = {
    title: isEs ? 'Frontend Developer' : 'Frontend Developer',
    description: isEs 
      ? 'Frontend Developer con experiencia en desarrollo de interfaces web para entornos empresariales y proyectos fullstack. Especializado en JavaScript (ES6+), HTML, CSS/SCSS y construcción de componentes reutilizables. Experiencia práctica con React.js y Next.js, consumo de APIs REST, control de versiones con Git y trabajo colaborativo con equipos de diseño, QA y backend bajo metodologías ágiles.'
      : 'Frontend Developer with experience in web interface development for enterprise environments and fullstack projects. Specialized in JavaScript (ES6+), HTML, CSS/SCSS and building reusable components. Hands-on experience with React.js and Next.js, REST API consumption, version control with Git, and collaborative work with design, QA, and backend teams under agile methodologies.'
  };

  const experiences = [
    {
      period: isEs ? 'Enero 2026 - Actualidad' : 'Jan 2026 - Present',
      company: 'Babel (Cliente: BBVA)',
      role: isEs ? 'Frontend Developer' : 'Frontend Developer',
      description: isEs 
        ? 'Desarrollo de nuevos flujos de negocio y mantenimiento evolutivo para operaciones bancarias.'
        : 'Development of new business flows and evolutionary maintenance for banking operations.',
      achievements: [
        isEs ? 'Implementación de interfaces con HTML, CSS/SCSS, JavaScript, Cells y LitElement' : 'Implementation of interfaces with HTML, CSS/SCSS, JavaScript, Cells and LitElement',
        isEs ? 'Integración y consumo de servicios/APIs, validando respuestas y manejando estados del flujo' : 'Integration and consumption of services/APIs, validating responses and managing flow states',
        isEs ? 'Colaboración con equipos de diseño, QA y backend para liberar soluciones estables y escalables' : 'Collaboration with design, QA, and backend teams to deliver stable and scalable solutions'
      ]
    },
    {
      period: isEs ? 'Mayo 2022 - Febrero 2025' : 'May 2022 - Feb 2025',
      company: 'IDs Comercial (Cliente: BBVA)',
      role: isEs ? 'Desarrollador Web' : 'Web Developer',
      description: isEs 
        ? 'Resolución de bugs, mantenimiento correctivo y revisión de nuevos flujos en operaciones bancarias internacionales.'
        : 'Bug resolution, corrective maintenance, and review of new flows in international banking operations.',
      achievements: [
        isEs ? 'Desarrollo y mantenimiento de componentes web con HTML, CSS, SCSS, JavaScript, Cells y LitElement' : 'Development and maintenance of web components with HTML, CSS, SCSS, JavaScript, Cells and LitElement',
        isEs ? 'Optimización de rendimiento front-end mediante mejoras en renderizado y reducción de carga' : 'Front-end performance optimization through rendering improvements and load reduction',
        isEs ? 'Documentación técnica de procesos y componentes, asegurando trazabilidad entre versiones' : 'Technical documentation of processes and components, ensuring traceability across versions',
        isEs ? 'Evaluación y gestión de cambios en ambientes de ventas' : 'Evaluation and management of changes in sales environments'
      ]
    },
    {
      period: isEs ? '2025' : '2025',
      company: 'Freelancer - Proyecto SAPAHU (Huetamo)',
      role: isEs ? 'Fullstack Developer (React/Node)' : 'Fullstack Developer (React/Node)',
      description: isEs 
        ? 'Desarrollo de una solución web fullstack con arquitectura moderna basada en frontend + API backend.'
        : 'Development of a fullstack web solution with modern architecture based on frontend + API backend.',
      achievements: [
        isEs ? 'Construcción del frontend con React.js + Next.js, creando vistas y componentes reutilizables' : 'Frontend development with React.js + Next.js, creating views and reusable components',
        isEs ? 'Implementación del backend con Node.js + Express, desarrollando endpoints y lógica de negocio' : 'Backend implementation with Node.js + Express, developing endpoints and business logic',
        isEs ? 'Integración con MongoDB, modelando colecciones y gestionando operaciones CRUD' : 'Integration with MongoDB, modeling collections and managing CRUD operations',
        isEs ? 'Manejo de validaciones, consumo de servicios y control de respuestas del servidor' : 'Validation handling, service consumption, and server response control'
      ]
    },
    {
      period: isEs ? 'Agosto 2021 - Enero 2022' : 'Aug 2021 - Jan 2022',
      company: 'IMCED',
      role: isEs ? 'Desarrollador Web' : 'Web Developer',
      description: isEs 
        ? 'Desarrollo y mejora de aplicaciones educativas utilizando tecnologías web.'
        : 'Development and improvement of educational applications using web technologies.',
      achievements: [
        isEs ? 'Construcción de vistas, componentes y lógica del sistema con HTML, CSS y JavaScript' : 'Building views, components, and system logic with HTML, CSS, and JavaScript',
        isEs ? 'Implementación de funcionalidades backend con PHP, integración con datos y validaciones' : 'Backend implementation with PHP, data integration and validations',
        isEs ? 'Optimización de rendimiento y tiempos de carga mediante ajustes en estructura' : 'Performance and load time optimization through structural adjustments',
        isEs ? 'Participación en pruebas, corrección de incidencias y mejoras continuas' : 'Participation in testing, incident resolution, and continuous improvements'
      ]
    }
  ];

  const certifications = [
    'Hacker Ético Profesional',
    'Pentester MASTER',
    'OSINT Máster',
    'Redes y Seguridad',
    'Programación Orientada a Ciberseguridad',
    'Normativas de Seguridad',
    'Sistemas Operativos (Linux, Windows, MacOS)'
  ];

  const education = [
    {
      title: isEs ? 'Especialización en Ciberseguridad' : 'Cybersecurity Specialization',
      institution: isEs ? 'Academia de Ciberseguridad' : 'Cybersecurity Academy',
      period: '2021 – 2023'
    },
    {
      title: isEs ? 'Ingeniería en Sistemas Computacionales' : 'Computer Systems Engineering',
      institution: isEs ? 'Instituto Tecnológico Superior de Huetamo' : 'Higher Technological Institute of Huetamo',
      period: '2016 – 2021'
    }
  ];

  const hardSkills = [
    { name: 'HTML/CSS/SCSS', icon: Code2 },
    { name: 'JavaScript (ES6+)', icon: Code2 },
    { name: 'React.js / Next.js', icon: Code2 },
    { name: 'Node.js / Express', icon: Server },
    { name: 'MongoDB / MySQL', icon: Database },
    { name: 'Git / GitHub', icon: GitBranch },
    { name: 'Cells / LitElement', icon: FileText },
    { name: 'PHP / Python', icon: Code2 },
  ];

  const softSkills = [
    { name: isEs ? 'Adaptabilidad y autodidacta' : 'Adaptability and self-taught', icon: Users },
    { name: isEs ? 'Resolución de problemas' : 'Problem solving', icon: Target },
    { name: isEs ? 'Atención al detalle' : 'Attention to detail', icon: Shield },
    { name: isEs ? 'Trabajo colaborativo' : 'Collaborative work', icon: Users },
    { name: isEs ? 'Documentación técnica' : 'Technical documentation', icon: BookOpen },
    { name: isEs ? 'Metodologías ágiles' : 'Agile methodologies', icon: Briefcase },
  ];

  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-24 pb-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {isEs ? 'Sobre Mí' : 'About Me'}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a href="mailto:erik.manuel.calderon@gmail.com" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
                erik.manuel.calderon@gmail.com
              </a>
              <a href="tel:+524351206760" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                +52 435 120 6760
              </a>
              <a href="https://mx.linkedin.com/in/erik-manuel-c-0b172911b" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna izquierda - Perfil y Educación */}
            <div className="lg:col-span-2 space-y-8">
              {/* Perfil */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  {isEs ? 'Perfil Profesional' : 'Professional Profile'}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Experiencia Laboral */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  {isEs ? 'Experiencia Profesional' : 'Work Experience'}
                </h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-blue-600">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.role}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Educación */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  {isEs ? 'Educación' : 'Education'}
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha - Certificaciones y Habilidades */}
            <div className="space-y-8">
              {/* Certificaciones */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  {isEs ? 'Certificaciones' : 'Certifications'}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Habilidades Técnicas */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-blue-600" />
                  {isEs ? 'Habilidades Técnicas' : 'Technical Skills'}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {hardSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Icon className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Habilidades Blandas */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  {isEs ? 'Habilidades Blandas' : 'Soft Skills'}
                </h2>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Icon className="w-4 h-4 text-blue-500" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Idiomas */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Languages className="w-6 h-6 text-blue-600" />
                  {isEs ? 'Idiomas' : 'Languages'}
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-900 dark:text-white font-medium">Español</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Nativo</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="h-full w-full bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-900 dark:text-white font-medium">Inglés</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Básico</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="h-full w-[40%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}