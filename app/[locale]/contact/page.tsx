'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const [locale, setLocale] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    params.then(p => setLocale(p.locale));
  }, [params]);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'erik.manuel.calderon@gmail.com',
      href: 'mailto:erik.manuel.calderon@gmail.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 435 120 6760',
      href: 'tel:+524351206760'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Huetamo, Michoacán, México',
      href: 'https://maps.google.com/?q=Huetamo,Michoacan,Mexico'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@erikmanuel',
      href: 'https://github.com/ErikManuel'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'erik-manuel-c',
      href: 'https://linkedin.com/in/erik-manuel-c-0b172911b'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      // Enviar el formulario a Formspree
      await fetch('https://formspree.io/f/xnjgkjrw', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      // Limpiar el formulario usando la referencia
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setErrorMessage('Error de conexión. Intenta de nuevo.');
    }
  };

  if (!locale) return null;

  const isEs = locale === 'es';

  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-24 pb-20 bg-white dark:bg-gray-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {isEs ? 'Contacto' : 'Contact'}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {isEs 
                ? '¿Tienes un proyecto en mente? ¿Quieres colaborar? Estoy a solo un mensaje de distancia.'
                : 'Have a project in mind? Want to collaborate? I\'m just a message away.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna izquierda - Info de contacto */}
            <div className="lg:col-span-1 space-y-6">
              {/* Información de contacto */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {isEs ? 'Información de contacto' : 'Contact information'}
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                          <p className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Redes sociales */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {isEs ? 'Redes sociales' : 'Social media'}
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                          <span className="text-gray-900 dark:text-white">{item.label}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.username}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Disponibilidad */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {isEs ? 'Disponibilidad' : 'Availability'}
                </h3>
                <p className="text-blue-100 mb-4">
                  {isEs 
                    ? 'Actualmente disponible para proyectos freelance y posiciones remotas.'
                    : 'Currently available for freelance projects and remote positions.'}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span>{isEs ? 'Disponible para trabajar' : 'Available for work'}</span>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {isEs ? 'Envíame un mensaje' : 'Send me a message'}
                </h2>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre completo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {isEs ? 'Nombre completo' : 'Full name'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      placeholder={isEs ? 'Tu nombre' : 'Your name'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Asunto */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {isEs ? 'Asunto' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      placeholder={isEs ? '¿Sobre qué quieres hablar?' : 'What do you want to talk about?'}
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {isEs ? 'Mensaje' : 'Message'}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                      placeholder={isEs ? 'Cuéntame sobre tu proyecto...' : 'Tell me about your project...'}
                    />
                  </div>

                  {/* Mensaje de error */}
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2 text-red-700 dark:text-red-300">
                      <AlertCircle className="w-5 h-5" />
                      <span>{errorMessage || (isEs ? 'Error al enviar. Intenta de nuevo.' : 'Error sending. Try again.')}</span>
                    </div>
                  )}

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={formStatus !== 'idle'}
                    className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'idle' && (
                      <>
                        <Send className="w-5 h-5" />
                        {isEs ? 'Enviar mensaje' : 'Send message'}
                      </>
                    )}
                    {formStatus === 'sending' && (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {isEs ? 'Enviando...' : 'Sending...'}
                      </>
                    )}
                    {formStatus === 'sent' && (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        {isEs ? '¡Mensaje enviado!' : 'Message sent!'}
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {isEs 
                      ? 'Recibirás una respuesta en menos de 24 horas.'
                      : 'You\'ll receive a response within 24 hours.'}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}