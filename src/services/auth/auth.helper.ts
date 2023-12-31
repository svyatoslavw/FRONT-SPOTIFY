import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import { saveUserToStore } from '@/stores/userStore'
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
    //expires: new Date(Date.now() + 10 * 1000),
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
  localStorage.removeItem('user-storage')
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data)
  saveUserToStore(data.user)
  //localStorage.setItem('user', JSON.stringify(data.user))
}
