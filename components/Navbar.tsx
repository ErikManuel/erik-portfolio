'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useMode } from '@/contexts/ModeContext';
import { useState } from 'react';
import { Menu, X, Sun, Moon, Briefcase, Code2, Languages } from 'lucide-react';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { mode, toggleMode } = useMode();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${locale}/projects`, label: locale === 'es' ? 'Proyectos' : 'Projects' },
    { href: `/${locale}/about`, label: locale === 'es' ? 'Sobre Mí' : 'About' },
    { href: `/${locale}/contact`, label: locale === 'es' ? 'Contacto' : 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full navbar-blur z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="text-xl font-bold text-gray-900 dark:text-white hover-scale">
            EM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Toggles */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Link
              href={locale === 'en' ? '/es' : '/en'}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium hover-scale flex items-center gap-1"
            >
              <Languages className="w-4 h-4" />
              {locale === 'en' ? 'ES' : 'EN'}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-scale"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Mode Toggle */}
            <button
              onClick={toggleMode}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium hover-scale flex items-center gap-1"
              aria-label={mode === 'recruiter' ? 'Switch to developer mode' : 'Switch to recruiter mode'}
            >
              {mode === 'recruiter' ? (
                <>
                  <Briefcase className="w-4 h-4" />
                  <span>{locale === 'es' ? 'Reclutador' : 'Recruiter'}</span>
                </>
              ) : (
                <>
                  <Code2 className="w-4 h-4" />
                  <span>{locale === 'es' ? 'Desarrollador' : 'Developer'}</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover-scale"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Toggles */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              {/* Language Toggle */}
              <Link
                href={locale === 'en' ? '/es' : '/en'}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                <Languages className="w-4 h-4" />
                <span>{locale === 'en' ? 'Español' : 'English'}</span>
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium w-full text-left"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-4 h-4" />
                    <span>{locale === 'es' ? 'Modo oscuro' : 'Dark mode'}</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4" />
                    <span>{locale === 'es' ? 'Modo claro' : 'Light mode'}</span>
                  </>
                )}
              </button>

              {/* Mode Toggle */}
              <button
                onClick={toggleMode}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium w-full text-left"
              >
                {mode === 'recruiter' ? (
                  <>
                    <Code2 className="w-4 h-4" />
                    <span>{locale === 'es' ? 'Modo desarrollador' : 'Developer mode'}</span>
                  </>
                ) : (
                  <>
                    <Briefcase className="w-4 h-4" />
                    <span>{locale === 'es' ? 'Modo reclutador' : 'Recruiter mode'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}