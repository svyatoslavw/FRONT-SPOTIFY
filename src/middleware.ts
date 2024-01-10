import { NextResponse, type NextRequest } from 'next/server'
import { ADMIN_URL, PUBLIC_URL } from './config/url.config'
import authService from './services/auth/auth.service'
import { EnumUserRoles } from './types/user.types'

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
  const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isAuthPage = request.url.includes(PUBLIC_URL.login() || PUBLIC_URL.register())

  if (isAuthPage) {
    if (accessToken && refreshToken) {
      return NextResponse.redirect(new URL(PUBLIC_URL.home(), request.url))
    }

    NextResponse.next()
  }

  if (refreshToken === undefined) {
    return NextResponse.redirect(new URL(PUBLIC_URL.login(), request.url))
  }

  try {
    const data = await authService.getProfileByToken(accessToken!)
    if (data.role === EnumUserRoles.ADMIN) {

      return NextResponse.next()
    }
    const isAdminPage = request.url.includes(ADMIN_URL.root())

    if (isAdminPage) {
      return NextResponse.rewrite(new URL('/notfound', request.url))
    }
  } catch (error) {
    console.log(error)

    return NextResponse.redirect(new URL(PUBLIC_URL.login(), request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*', '/account/:path*', '/favorites'],
}
