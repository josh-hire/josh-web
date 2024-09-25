import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COOKIE_NAME_TOKEN } from 'Configs';


export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  const cookie = request.cookies.get(COOKIE_NAME_TOKEN);
  const protectedRoutes = ['/dashboard',];
  const unProtectedRoutes = ['/login'];

  const isProtected = protectedRoutes.some((path) => pathname.startsWith(path));
  const notProtected = unProtectedRoutes.some((path) => pathname.startsWith(path));

  if (!cookie && isProtected) {
    const from = pathname;
    return NextResponse.redirect(new URL(`/login?from=${from}`, request.url));
  }

  if (cookie && (request.nextUrl.pathname === '/' || notProtected)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}
