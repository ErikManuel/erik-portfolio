import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-demo',
    title: {
      en: 'Ecommerce Demo',
      es: 'Demo Ecommerce'
    },
    description: {
      en: 'Full-featured e-commerce platform with product catalog, shopping cart, and checkout process.',
      es: 'Plataforma e-commerce completa con catálogo de productos, carrito de compras y proceso de pago.'
    },
    image: '/images/ecommerce-demo.jpg',
    featured: true,
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Stripe'],
    technicalDetails: {
      architecture: {
        en: 'Built with Next.js App Router, using server components for product listing and client components for interactive cart.',
        es: 'Construido con Next.js App Router, usando server components para listado de productos y client components para carrito interactivo.'
      },
      challenges: {
        en: [
          'Implementing real-time cart updates',
          'Optimizing images for performance',
          'Handling payment gateway integration'
        ],
        es: [
          'Implementar actualizaciones en tiempo real del carrito',
          'Optimizar imágenes para rendimiento',
          'Manejar integración de pasarela de pago'
        ]
      },
      decisions: {
        en: [
          'Used Zustand for cart state management',
          'Implemented ISR for product pages',
          'Chose Stripe for payment processing'
        ],
        es: [
          'Usé Zustand para manejo de estado del carrito',
          'Implementé ISR para páginas de productos',
          'Elegí Stripe para procesamiento de pagos'
        ]
      }
    },
    links: {
      live: 'https://ecommerce-demo.vercel.app',
      github: 'https://github.com/erikmanuel/ecommerce-demo'
    }
  },
  {
    slug: 'freelance-case-study',
    title: {
      en: 'Freelance Case Study',
      es: 'Caso de Estudio Freelance'
    },
    description: {
      en: 'End-to-end project management for a local business, from requirements to deployment.',
      es: 'Gestión de proyecto completo para negocio local, desde requerimientos hasta despliegue.'
    },
    image: '/images/freelance-case.jpg',
    featured: true,
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
    technicalDetails: {
      architecture: {
        en: 'Monorepo structure with shared types between frontend and backend.',
        es: 'Estructura monorepo con tipos compartidos entre frontend y backend.'
      },
      challenges: {
        en: [
          'Client requirement gathering',
          'Database schema design',
          'Authentication implementation'
        ],
        es: [
          'Recopilación de requerimientos del cliente',
          'Diseño de esquema de base de datos',
          'Implementación de autenticación'
        ]
      },
      decisions: {
        en: [
          'Chose MySQL for relational data needs',
          'Implemented JWT for stateless auth',
          'Used Express for REST API'
        ],
        es: [
          'Elegí MySQL por necesidades de datos relacionales',
          'Implementé JWT para auth stateless',
          'Usé Express para API REST'
        ]
      }
    },
    links: {
      github: 'https://github.com/erikmanuel/freelance-project'
    }
  },
  {
    slug: 'auth-roles-dashboard',
    title: {
      en: 'Auth + Roles Dashboard',
      es: 'Dashboard con Auth y Roles'
    },
    description: {
      en: 'Admin dashboard with role-based access control and user management.',
      es: 'Panel administrativo con control de acceso basado en roles y gestión de usuarios.'
    },
    image: '/images/auth-dashboard.jpg',
    featured: true,
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    technicalDetails: {
      architecture: {
        en: 'Next.js with API routes, Prisma as ORM, and PostgreSQL database.',
        es: 'Next.js con API routes, Prisma como ORM y base de datos PostgreSQL.'
      },
      challenges: {
        en: [
          'Implementing RBAC (Role-Based Access Control)',
          'Secure session management',
          'Protected API routes'
        ],
        es: [
          'Implementar RBAC (Control de Acceso Basado en Roles)',
          'Manejo seguro de sesiones',
          'Rutas de API protegidas'
        ]
      },
      decisions: {
        en: [
          'Used NextAuth for authentication',
          'Prisma for type-safe database queries',
          'Middleware for route protection'
        ],
        es: [
          'Usé NextAuth para autenticación',
          'Prisma para consultas type-safe a BD',
          'Middleware para protección de rutas'
        ]
      }
    },
    links: {
      live: 'https://auth-dashboard.vercel.app',
      github: 'https://github.com/erikmanuel/auth-dashboard'
    }
  }
];