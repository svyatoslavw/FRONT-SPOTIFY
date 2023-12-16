'use client'
import Cookies from 'js-cookie'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { usePathname, useRouter } from 'next/navigation'

import { ADMIN_PANEL_URL } from '@/config/url.config'
import { getAccessToken } from '@/services/auth/auth.helper'

import NotFound from '@/app/(pages)/not-found'

const protectedRoutes = ['/favorites']

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth()
  const { checkAuth, logout } = useActions()

  const pathname = usePathname()

  useEffect(() => {
    const accessToken = getAccessToken()
    if (accessToken) checkAuth()
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')

    if (!refreshToken && user) logout()
  }, [pathname])

  const router = useRouter()

  const isProtectedRoute = protectedRoutes.some((route) => pathname?.startsWith(route))
  const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

  if (!isProtectedRoute && !isAdminRoute) return <>{children}</>

  if (user?.role === 'ADMIN' || user?.role === 'DEVELOPER') return <>{children}</>

  if (user && isProtectedRoute) return <>{children}</>

  if (user && isAdminRoute) return <NotFound />

  pathname !== '/auth' && router.replace('/auth')
  return null
}

export default AuthProvider
