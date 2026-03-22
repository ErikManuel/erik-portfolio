'use client';

import Link from 'next/link';
import { useMode } from '@/contexts/ModeContext';
import { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, GitBranch, Database, Box, Code2, Gauge, Zap, Shield } from 'lucide-react';

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const { mode } = useMode();
  const [mounted, setMounted] = useState(false);
  const [history, setHistory] = useState<string[]>([
    locale === 'es' 
      ? 'Bienvenido al modo desarrollador. Escribe "help" para comandos.'
      : 'Welcome to developer mode. Type "help" for commands.'
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const commands = {
    help: {
      en: 'Available commands: help, about, skills, projects, experience, metrics, stack, clear',
      es: 'Comandos disponibles: help, about, skills, projects, experience, metrics, stack, clear'
    },
    about: {
      en: 'Erik Manuel - Senior Frontend Developer | 4+ years | Current: BBVA',
      es: 'Erik Manuel - Frontend Developer Senior | 4+ años | Actual: BBVA'
    },
    skills: {
      en: 'Expert: React, Next.js, TypeScript | Intermediate: Node.js, Express, MongoDB | Tools: Git, Docker',
      es: 'Experto: React, Next.js, TypeScript | Intermedio: Node.js, Express, MongoDB | Herramientas: Git, Docker'
    },
    projects: {
      en: '📁 Featured Projects:\n  • Ecommerce Demo (Next.js + MongoDB)\n  • Freelance Case Study (React + Node.js)\n  • Auth Dashboard (Next.js + Prisma)\n\n👉 Click on "View Projects" above to see details!',
      es: '📁 Proyectos Destacados:\n  • Demo Ecommerce (Next.js + MongoDB)\n  • Caso Freelance (React + Node.js)\n  • Dashboard Auth (Next.js + Prisma)\n\n👉 ¡Haz clic en "Ver Proyectos" arriba para más detalles!'
    },
    experience: {
      en: '💼 Experience:\n  • BBVA (2022-present): Frontend Developer\n  • SAPAHU Project (2025): Fullstack Developer',
      es: '💼 Experiencia:\n  • BBVA (2022-presente): Frontend Developer\n  • Proyecto SAPAHU (2025): Fullstack Developer'
    },
    metrics: {
      en: '📊 Performance: 98/100 | Accessibility: 96/100 | SEO: 100/100 | Best Practices: 95/100',
      es: '📊 Rendimiento: 98/100 | Accesibilidad: 96/100 | SEO: 100/100 | Buenas prácticas: 95/100'
    },
    stack: {
      en: 'Frontend: Next.js 15.1, React 19, TypeScript 5.3, Tailwind 3.4 | Backend: Node 20, Express 4.18',
      es: 'Frontend: Next.js 15.1, React 19, TypeScript 5.3, Tailwind 3.4 | Backend: Node 20, Express 4.18'
    },
    clear: { en: '', es: '' }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      setCurrentCommand('');
      setTimeout(() => inputRef.current?.focus(), 0);
      return;
    }

    if (trimmedCmd in commands) {
      const response = commands[trimmedCmd as keyof typeof commands][locale === 'es' ? 'es' : 'en'];
      if (response) {
        const lines = response.split('\n');
        setHistory(prev => [...prev, `$ ${cmd}`, ...lines]);
      }
    } else if (trimmedCmd === '') {
      setHistory(prev => [...prev, `$ ${cmd}`]);
    } else {
      const errorMsg = locale === 'es' 
        ? `Comando no reconocido: ${trimmedCmd}. Escribe 'help'`
        : `Command not recognized: ${trimmedCmd}. Type 'help'`;
      setHistory(prev => [...prev, `$ ${cmd}`, errorMsg]);
    }
    
    setCurrentCommand('');
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand);
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-8 animate-fade-in">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {locale === 'es' ? 'Disponible Remoto' : 'Remote Ready'}
              </span>
            </span>
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-up delay-100">
            Erik Manuel
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-up delay-200">
            Frontend Developer
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-300">
            {locale === 'es' 
              ? 'Especialista en React/Next.js con experiencia en banca empresarial (BBVA) y desarrollo fullstack.'
              : 'React/Next.js specialist with enterprise banking experience (BBVA) and fullstack development.'}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center hover-scale">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">4+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase">Años</div>
            </div>
            <div className="text-center hover-scale">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">BBVA</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase">Empresarial</div>
            </div>
            <div className="text-center hover-scale">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Fullstack</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase">React + Node</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              href={`/${locale}/projects`}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105"
            >
              {locale === 'es' ? 'Ver Proyectos' : 'View Projects'}
            </Link>
            
            {/* Botón de descarga de CV con idioma dinámico */}
            <a
              href={locale === 'es' ? '/cv/Erik_Manuel_CV_ES.pdf' : '/cv/Erik_Manuel_CV_EN.pdf'}
              download="Erik_Manuel_CV.pdf"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
            >
              {locale === 'es' ? 'Descargar CV' : 'Download CV'}
            </a>
          </div>

          {/* Developer Mode */}
          {mode === 'developer' && (
            <div className="mt-8 space-y-6 animate-fade-up delay-500">
              {/* Terminal */}
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                  <Terminal className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">developer@erik:~/portfolio</span>
                </div>
                <div className="p-4 font-mono text-sm h-48 overflow-y-auto bg-gray-950">
                  {history.map((line, i) => (
                    <div key={i} className="mb-1">
                      {line.startsWith('$') ? (
                        <span className="text-green-400">{line}</span>
                      ) : (
                        <span className="text-gray-300">{line}</span>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center mt-2">
                    <span className="text-green-400 mr-2">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-green-400 outline-none font-mono"
                      placeholder={locale === 'es' ? 'Escribe un comando...' : 'Type a command...'}
                      autoFocus
                    />
                  </div>
                </div>
                <div className="px-4 py-2 bg-gray-800/50 border-t border-gray-800 flex gap-2 text-xs">
                  {['help', 'skills', 'projects', 'experience', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeCommand(cmd)}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

              {/* Panel de Métricas Técnicas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-gray-400">Performance</span>
                  </div>
                  <div className="text-2xl font-bold text-white">98</div>
                  <div className="w-full h-1 bg-gray-800 mt-2">
                    <div className="w-[98%] h-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400">Accesibilidad</span>
                  </div>
                  <div className="text-2xl font-bold text-white">96</div>
                  <div className="w-full h-1 bg-gray-800 mt-2">
                    <div className="w-[96%] h-full bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-400">SEO</span>
                  </div>
                  <div className="text-2xl font-bold text-white">100</div>
                  <div className="w-full h-1 bg-gray-800 mt-2">
                    <div className="w-full h-full bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-gray-400">Best Practices</span>
                  </div>
                  <div className="text-2xl font-bold text-white">95</div>
                  <div className="w-full h-1 bg-gray-800 mt-2">
                    <div className="w-[95%] h-full bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Stack Detallado */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover-lift">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  Technical Stack
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Box className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium text-gray-300">Frontend</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-400 flex justify-between">
                        <span>Next.js</span>
                        <span className="text-blue-400">15.1</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>React</span>
                        <span className="text-blue-400">19.0</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>TypeScript</span>
                        <span className="text-blue-400">5.3</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>Tailwind</span>
                        <span className="text-blue-400">3.4</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Database className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-gray-300">Backend</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-400 flex justify-between">
                        <span>Node.js</span>
                        <span className="text-green-400">20.x</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>Express</span>
                        <span className="text-green-400">4.18</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>MongoDB</span>
                        <span className="text-green-400">7.0</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>PostgreSQL</span>
                        <span className="text-green-400">16</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <GitBranch className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium text-gray-300">DevOps & Tools</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-400 flex justify-between">
                        <span>Git</span>
                        <span className="text-purple-400">2.43</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>Docker</span>
                        <span className="text-purple-400">24.0</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>Jest</span>
                        <span className="text-purple-400">29.7</span>
                      </li>
                      <li className="text-gray-400 flex justify-between">
                        <span>GitHub Actions</span>
                        <span className="text-purple-400">CI/CD</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}