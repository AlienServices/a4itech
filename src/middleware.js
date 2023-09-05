import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(NextRequest) {
    const path = NextRequest.nextUrl.pathname
    if (path.indexOf('copiersutah') === -1)
        return NextResponse.redirect(new URL('/', NextRequest.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/pay/card',
}