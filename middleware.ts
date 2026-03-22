import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'es'; // Español por defecto

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Verificar si el pathname ya tiene un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si ya tiene locale, continuar
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Si es la raíz, redirigir a /es
  if (pathname === '/') {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Para otras rutas, agregar el locale por defecto
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*|api).*)'],
};