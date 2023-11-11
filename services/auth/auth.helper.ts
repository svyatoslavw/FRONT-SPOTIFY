import { IAuthResponse, ITokens } from '@/app/store/user/user.interface'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken')
  return accessToken || null
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken, {
    sameSite: 'None',
    secure: true,
  })
  Cookies.set('refreshToken', data.refreshToken, {
    sameSite: 'None',
    secure: true,
  })
}

export const removeFromStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
  localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}
