// lib/projects.ts

import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'erikstore',
    title: {
      en: 'ErikStore - Ecommerce Demo',
      es: 'ErikStore - Demo Ecommerce',
    },
    description: {
      en: 'Full-featured e-commerce platform with product catalog, shopping cart, and checkout process. Built with Next.js and modern web practices.',
      es: 'Plataforma e-commerce completa con catálogo de productos, carrito de compras y proceso de pago. Construida con Next.js y prácticas modernas.',
    },
    image: '/images/erikstore.jpg',
    featured: true,
    techStack: ['Next.js', 'React', 'JavaScript', 'SCSS', 'Stripe'],
    problem: {
      en: 'I needed to demonstrate my ability to build a functional e-commerce application from scratch, with key features: product catalog, shopping cart, checkout process, and simulated inventory management. The challenge was creating a smooth experience without a complex backend.',
      es: 'Necesitaba demostrar mi capacidad para construir una aplicación e-commerce funcional desde cero, con todas las características clave: catálogo de productos, carrito de compras, proceso de checkout y gestión de inventario simulada. El desafío era crear una experiencia fluida sin un backend complejo.',
    },
    solution: {
      en: 'I developed an online store with Next.js App Router. I used server components for product listing (better SEO and performance) and client components for the interactive cart. I implemented Context API for global cart state and dynamic routes for product pages. For payment simulation, I integrated Stripe Checkout in test mode.',
      es: 'Desarrollé una tienda en línea con Next.js App Router. Utilicé server components para el listado de productos (mejor SEO y rendimiento) y client components para el carrito interactivo. Implementé Context API para el estado global del carrito y rutas dinámicas para las páginas de producto. Para simular pagos, integré Stripe Checkout en modo prueba.',
    },
    technicalDetails: {
      architecture: {
        en: 'Built with Next.js App Router, using server components for product listing and client components for interactive cart. State management with Context API, product pages with dynamic routes.',
        es: 'Construido con Next.js App Router, usando server components para listado de productos y client components para carrito interactivo. Gestión de estado con Context API, páginas de producto con rutas dinámicas.',
      },
      challenges: {
        en: [
          'Keeping cart synchronized across tabs - solved with localStorage and storage events',
          'Image optimization - used next/image with lazy loading and WebP formats',
          'Maintaining cart state after page refresh - persisted in localStorage'
        ],
        es: [
          'Mantener el carrito sincronizado entre pestañas - solucionado con localStorage y eventos storage',
          'Optimización de imágenes - usé next/image con lazy loading y formatos WebP',
          'Mantener estado del carrito después de recargar - persistido en localStorage'
        ],
      },
      decisions: {
        en: [
          'Used Context API for cart state (simpler than Redux for this scale)',
          'Implemented localStorage for persistence (user experience priority)',
          'Chose Stripe for payment simulation (industry standard)'
        ],
        es: [
          'Usé Context API para estado del carrito (más simple que Redux para esta escala)',
          'Implementé localStorage para persistencia (prioridad en experiencia de usuario)',
          'Elegí Stripe para simulación de pagos (estándar de la industria)'
        ],
      },
      results: {
        en: 'The site loads in under 1.5 seconds (LCP: 1.2s). The cart maintains state even when reloading the page. The checkout experience is smooth and simulates real payments. This project demonstrated my ability to build complete e-commerce applications.',
        es: 'El sitio carga en menos de 1.5 segundos (LCP: 1.2s). El carrito mantiene estado incluso al recargar la página. La experiencia de checkout es fluida y simula pagos reales. Este proyecto demostró mi capacidad para construir aplicaciones e-commerce completas.',
      },
    },
    links: {
      github: 'https://github.com/ErikManuel/erikstore',
      live: 'https://erikstore-two.vercel.app',
    },
  },
  {
    slug: 'dev-analytics-dashboard',
    title: {
      en: 'Dev Analytics Dashboard',
      es: 'Dashboard de Analítica Dev',
    },
    description: {
      en: 'Admin dashboard with role-based access control and user management. Perfect for tracking development metrics.',
      es: 'Panel administrativo con control de acceso basado en roles y gestión de usuarios. Ideal para métricas de desarrollo.',
    },
    image: '/images/dashboard.jpg',
    featured: true,
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'GitHub API'],
    problem: {
      en: 'I needed to build an admin dashboard that allows viewing development metrics with role-based access control (RBAC). The challenge was implementing secure authentication and different views according to the user role.',
      es: 'Necesitaba construir un dashboard administrativo que permitiera visualizar métricas de desarrollo con control de acceso basado en roles (RBAC). El desafío era implementar autenticación segura y diferentes vistas según el rol del usuario.',
    },
    solution: {
      en: 'I built a dashboard with Next.js and TypeScript. I implemented authentication with NextAuth.js using credentials and JWT. For RBAC, I created a permission system that filters routes and components according to role (admin, manager, viewer). Metrics are visualized with Chart.js and are dynamic based on the user.',
      es: 'Construí un dashboard con Next.js y TypeScript. Implementé autenticación con NextAuth.js usando credenciales y JWT. Para RBAC, creé un sistema de permisos que filtra rutas y componentes según el rol (admin, manager, viewer). Las métricas se visualizan con Chart.js y son dinámicas según el usuario.',
    },
    technicalDetails: {
      architecture: {
        en: 'Next.js with App Router, TypeScript for type safety, Tailwind for styling, NextAuth.js for authentication, Chart.js for data visualization, Vitest for testing.',
        es: 'Next.js con App Router, TypeScript para tipado seguro, Tailwind para estilos, NextAuth.js para autenticación, Chart.js para visualización de datos, Vitest para pruebas.',
      },
      challenges: {
        en: [
          'Implementing RBAC securely - used middleware for token verification and conditional components for UI',
          'Ensuring type safety across auth and roles - leveraged TypeScript extensively',
          'Writing comprehensive tests for permission logic - achieved 85% coverage with Vitest'
        ],
        es: [
          'Implementar RBAC de forma segura - usé middleware para verificar tokens y componentes condicionales para UI',
          'Asegurar tipado seguro en auth y roles - aproveché TypeScript extensivamente',
          'Escribir pruebas exhaustivas para lógica de permisos - alcancé 85% de cobertura con Vitest'
        ],
      },
      decisions: {
        en: [
          'Chose NextAuth.js for authentication (secure, JWT-based, built-in providers)',
          'Used middleware for route protection (runs before page render)',
          'Vitest for testing (fast, compatible with Next.js)'
        ],
        es: [
          'Elegí NextAuth.js para autenticación (seguro, basado en JWT, proveedores integrados)',
          'Usé middleware para protección de rutas (se ejecuta antes de renderizar)',
          'Vitest para pruebas (rápido, compatible con Next.js)'
        ],
      },
      results: {
        en: 'The dashboard supports multiple roles with personalized views. Tests cover over 85% of authentication logic. The project demonstrates my ability to build enterprise applications with security and scalability.',
        es: 'El dashboard soporta múltiples roles con vistas personalizadas. Las pruebas cubren más del 85% de la lógica de autenticación. El proyecto demuestra mi capacidad para construir aplicaciones empresariales con seguridad y escalabilidad.',
      },
    },
    links: {
      github: 'https://github.com/ErikManuel/dev-analytics-dashboard',
      live: 'https://dev-analytics-dashboard-one.vercel.app',
    },
  },
  {
    slug: 'sapahu-project',
    title: {
      en: 'SAPAHU - Water Management System',
      es: 'SAPAHU - Sistema de Gestión de Agua',
    },
    description: {
      en: 'Fullstack solution for water utility management. Includes billing, payment tracking, and customer management.',
      es: 'Solución fullstack para gestión de servicio de agua. Incluye facturación, seguimiento de pagos y gestión de clientes.',
    },
    image: '/images/sapahu.jpg',
    featured: true,
    techStack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'PDFKit', 'Jest'],
    problem: {
      en: 'This is a real project for a local water utility entity (SAPAHU). They needed a system to manage customers, billing, and payment tracking. The previous system was manual and error-prone.',
      es: 'Este es un proyecto real para una entidad local de gestión de agua (SAPAHU). Necesitaban un sistema para gestionar clientes, facturación y seguimiento de pagos. El sistema anterior era manual y propenso a errores.',
    },
    solution: {
      en: 'I developed a complete fullstack solution. Frontend with Next.js, backend with Node.js + Express, and MongoDB database. I implemented JWT authentication, user management with roles, billing module, and downloadable PDF reports. The system allows recording payments, generating receipts, and viewing each customer\'s history.',
      es: 'Desarrollé una solución fullstack completa. Frontend con Next.js, backend con Node.js + Express, y base de datos MongoDB. Implementé autenticación JWT, gestión de usuarios con roles, módulo de facturación, y reportes descargables en PDF. El sistema permite registrar pagos, generar recibos y visualizar el historial de cada cliente.',
    },
    technicalDetails: {
      architecture: {
        en: 'Monorepo structure with shared types. Frontend: Next.js, Backend: Node.js + Express, Database: MongoDB, Authentication: JWT, PDF Generation: PDFKit.',
        es: 'Estructura monorepo con tipos compartidos. Frontend: Next.js, Backend: Node.js + Express, Base de datos: MongoDB, Autenticación: JWT, Generación de PDF: PDFKit.',
      },
      challenges: {
        en: [
          'Database schema design for complex relationships (customers, invoices, payments) while maintaining performance',
          'Server-side PDF generation with PDFKit',
          'Data integrity with validation both frontend and backend',
          'Ensuring consistent data across client-server operations'
        ],
        es: [
          'Diseño de esquema de base de datos para relaciones complejas (clientes, facturas, pagos) manteniendo rendimiento',
          'Generación de PDFs en el servidor con PDFKit',
          'Integridad de datos con validaciones tanto en frontend como backend',
          'Asegurar datos consistentes en operaciones cliente-servidor'
        ],
      },
      decisions: {
        en: [
          'Chose MongoDB for flexibility in schema evolution',
          'Implemented JWT for stateless authentication (scalable)',
          'Used PDFKit for report generation (reliable, customizable)',
          'Dual validation (frontend + backend) for data integrity'
        ],
        es: [
          'Elegí MongoDB por flexibilidad en evolución de esquema',
          'Implementé JWT para autenticación stateless (escalable)',
          'Usé PDFKit para generación de reportes (confiable, personalizable)',
          'Validación dual (frontend + backend) para integridad de datos'
        ],
      },
      results: {
        en: 'The system is in use and has reduced management time by 70%. It allows generating reports in seconds that previously took hours. Feedback has been very positive for ease of use and reduction of manual errors.',
        es: 'El sistema está en uso y ha reducido el tiempo de gestión en un 70%. Permite generar reportes en segundos que antes tomaban horas. El feedback ha sido muy positivo por la facilidad de uso y la reducción de errores manuales.',
      },
    },
    links: {
      github: 'https://github.com/ErikManuel/Proyecto-Demo-Sapahu',
      live: 'https://proyecto-demo-sapahu.vercel.app', 
    },
  },
];