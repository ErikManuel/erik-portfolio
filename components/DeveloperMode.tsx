'use client';

import { Terminal, Cpu, GitBranch, Database, Box, Code2, Gauge, Zap, Shield } from 'lucide-react';
import { useState, useRef } from 'react';

interface DeveloperModeProps {
  locale: string;
}

export default function DeveloperMode({ locale }: DeveloperModeProps) {
  const [history, setHistory] = useState<string[]>([
    locale === 'es' 
      ? 'Bienvenido al modo desarrollador. Escribe "help" para comandos.'
      : 'Welcome to developer mode. Type "help" for commands.'
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

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
      return;
    }

    let response = '';
    if (trimmedCmd in commands) {
      response = commands[trimmedCmd as keyof typeof commands][locale === 'es' ? 'es' : 'en'];
    } else if (trimmedCmd === '') {
      response = '';
    } else {
      response = locale === 'es' 
        ? `Comando no reconocido: ${trimmedCmd}. Escribe 'help'`
        : `Command not recognized: ${trimmedCmd}. Type 'help'`;
    }

    if (response) {
      setHistory(prev => [...prev, `$ ${cmd}`, response]);
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`]);
    }
    setCurrentCommand('');
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="space-y-6">
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
              onKeyDown={(e) => e.key === 'Enter' && executeCommand(currentCommand)}
              className="flex-1 bg-transparent text-green-400 outline-none font-mono"
              placeholder={locale === 'es' ? 'Escribe un comando...' : 'Type a command...'}
              autoFocus
            />
          </div>
        </div>
        <div className="px-4 py-2 bg-gray-800/50 border-t border-gray-800 flex gap-2 text-xs">
          {['help', 'skills', 'metrics', 'stack', 'clear'].map((cmd) => (
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
        <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-400">Performance</span>
          </div>
          <div className="text-2xl font-bold text-white">98</div>
          <div className="w-full h-1 bg-gray-800 mt-2">
            <div className="w-[98%] h-full bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-gray-400">Accesibilidad</span>
          </div>
          <div className="text-2xl font-bold text-white">96</div>
          <div className="w-full h-1 bg-gray-800 mt-2">
            <div className="w-[96%] h-full bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-400">SEO</span>
          </div>
          <div className="text-2xl font-bold text-white">100</div>
          <div className="w-full h-1 bg-gray-800 mt-2">
            <div className="w-full h-full bg-green-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
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
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
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
  );
}