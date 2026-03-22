import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider, ModeProvider } from "@/contexts";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'es' 
    ? 'Erik Manuel - Frontend Developer'
    : 'Erik Manuel - Frontend Developer';
    
  const description = locale === 'es'
    ? 'Portfolio profesional de Erik Manuel, desarrollador frontend especializado en React/Next.js con experiencia en banca empresarial (BBVA).'
    : 'Professional portfolio of Erik Manuel, frontend developer specialized in React/Next.js with enterprise banking experience (BBVA).';

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'BBVA', 'Portfolio'],
    authors: [{ name: 'Erik Manuel' }],
    creator: 'Erik Manuel',
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://tu-dominio.dev',
      title,
      description,
      siteName: 'Erik Manuel Portfolio',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Erik Manuel - Frontend Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <ModeProvider>
            {children}
          </ModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}