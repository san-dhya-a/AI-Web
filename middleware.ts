import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token')?.value;

  console.log(`[Middleware] ${token ? 'Authenticated' : 'Guest'} access to: ${pathname}`);

  // 1. Define Public Routes (accessible without token)
  const isPublicRoute = pathname === '/login' || pathname === '/register';

  // 2. If user is NOT authenticated and tries to access ANY route that is NOT public, redirect to login
  if (!token && !isPublicRoute) {
    console.log(`[Middleware] Unauthorized access to ${pathname}. Redirecting to /login`);
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 3. (Optional) If user IS authenticated, don't let them see login/register
  if (token && isPublicRoute) {
    console.log(`[Middleware] Authenticated user on ${pathname}. Redirecting to /home`);
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

// Ensure middleware runs on all application paths while excluding system files and assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};