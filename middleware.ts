import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(`[Middleware] Processing request for: ${pathname}`);
  const token = request.cookies.get('auth_token')?.value;

  // Guest Routes: Pages that should ONLY be seen by logged-out users
  const isGuestRoute = pathname === '/login' || pathname === '/register';
  
  // App Routes: Pages that should ONLY be seen by logged-in users
  const isAppRoute = pathname === '/' ||
                     pathname.startsWith('/home') || 
                     pathname.startsWith('/minha-conta') || 
                     pathname.startsWith('/fale-conosco/success');

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