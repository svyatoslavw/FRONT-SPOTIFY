import { axiosClassic, instance } from '@/api/api.interceptor'
import { IAuthResponse, ILogin, IRegister } from '@/app/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'

export const AuthService = {
  async register(type: 'register', data: IRegister) {
    const response = await instance<IAuthResponse>({
      url: `/auth/${type}`,
      method: 'POST',
      data,
    })

    if (response.data.accessToken) saveToStorage(response.data)
    return response.data
  },

  async login(type: 'login', data: ILogin) {
    const response = await instance<IAuthResponse>({
      url: `/auth/${type}`,
      method: 'POST',
      data,
    })

    if (response.data.accessToken) saveToStorage(response.data)
    return response.data
  },

  async authGoogle() {
    const response = await axiosClassic({
      url: '/auth/google/login',
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    if (response.data.accessToken) saveToStorage(response.data)
    return response.data
  },

  async authGithub() {
    const response = await axiosClassic({
      url: '/auth/github/login',
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    if (response.data.accessToken) saveToStorage(response.data)
    return response.data
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + '/auth/login/access-token',
      { refreshToken },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.data.accessToken) saveToStorage(response.data)

    return response
  },
}
