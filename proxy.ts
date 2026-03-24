import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // 0. Redirect /home to / (internal route masking)
  if (pathname === '/home') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Guest Routes: Pages that should ONLY be seen by logged-out users
  const isGuestRoute = pathname === '/login' || pathname === '/register';
  
  // App Routes: Pages that should ONLY be seen by logged-in users
  const isAppRoute = pathname === '/' ||
                     pathname.startsWith('/home') || 
                     pathname.startsWith('/minha-conta') || 
                     pathname.startsWith('/fale-conosco/success');

  // 1. If user is authenticated and tries to access guest routes, redirect to root home (/)
  if (token && isGuestRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. If user is NOT authenticated and tries to access protected app routes, redirect to login
  if (!token && isAppRoute) {
    // If it's already /login, don't redirect again
    if (pathname === '/login') return NextResponse.next();
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/login', '/register', '/home/:path*', '/minha-conta/:path*', '/fale-conosco/success'],
};