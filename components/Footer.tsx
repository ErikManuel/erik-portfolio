'use client';

import { Github, ExternalLink } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-400">
            © {currentYear} Erik Manuel. 
            {locale === 'es' ? ' Todos los derechos reservados.' : ' All rights reserved.'}
          </p>

          {/* Enlace al código fuente */}
          <a
            href="https://github.com/ErikManuel/erik-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-all hover-lift rounded-lg"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono">
              {locale === 'es' ? 'Código fuente' : 'Source code'}
            </span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
}