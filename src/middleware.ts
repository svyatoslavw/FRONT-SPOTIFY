import { NextResponse, type NextRequest } from 'next/server'

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
  const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  if (refreshToken === undefined || accessToken === undefined) {
    console.log(refreshToken)
    return NextResponse.redirect(new URL('/', request.url))
  }

  //return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', '/user/:path*', '/account/:path*'],
}
