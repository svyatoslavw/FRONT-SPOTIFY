'use client'
import { useAuth } from '@/hooks/useAuth'
import { EnumTokens } from '@/middleware'
import { getNewTokens } from '@/services/auth/auth.helper'
import { saveUserToStore } from '@/stores/userStore'
import { getStoreLocal } from '@/utils/local-storage'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  // const { user, logout } = useAuth()
  // const { checkAuth } = useAuthStore()
  // //const { push } = useRouter()

  // const pathname = usePathname()

  // useEffect(() => {
  //   const accessToken = getAccessToken()
  //   if (accessToken) checkAuth()
  // }, [])

  // useEffect(() => {
  //   const refreshToken = Cookies.get('refreshToken')

  //   if (!refreshToken && user) logout()
  // }, [pathname])

  // const isAdminRoute = pathname.startsWith(ADMIN_PANEL_URL)

  // if (!isAdminRoute) return <>{children}</>

  // if ((user && user.role === 'ADMIN') || (user && user.role === 'DEVELOPER')) return <>{children}</>

  // if (user && isAdminRoute) return <NotFound />

  // //!pathname.includes('/auth') && push('/auth/login')

  // return null

  const { user } = useAuth()
  const pathname = usePathname()

  useEffect(() => {
    if (user) return

    const userLS = getStoreLocal('user')
    if (!userLS) return

    saveUserToStore(user)
  }, [user])

  useEffect(() => {
    if (!user) return

    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    if (accessToken) return

    const mutate = async () => {
      try {
        await getNewTokens()
      } catch (error) {
        console.error(error)
      }
    }

    mutate()
  }, [user, pathname])

  return children
}

export default AuthProvider
