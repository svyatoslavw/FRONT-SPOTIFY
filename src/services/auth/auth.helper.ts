import { Mutation } from '@/__generated__/ggl/graphql'
import { client } from '@/api/apollo.config'
import { GET_NEW_TOKENS } from '@/api/graphql/mutations/GetNewTokens'
import { saveUserToStore } from '@/stores/userStore'
import { IAuthResponse, ITokens } from '@/types/user.types'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken')
  const refreshToken = Cookies.get('refreshToken')
  return {accessToken, refreshToken}
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

export const removeFromStorage = async () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
  localStorage.removeItem('user')
  window.location.reload()
  //logout()
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data)
  saveUserToStore(data.user)
  // localStorage.setItem('user', JSON.stringify(data.user))
}

export async function getNewTokens() {
  const refreshToken = Cookies.get('refreshToken')
  try {
    const { data } = await client.mutate<Mutation>({
      mutation: GET_NEW_TOKENS,
      variables: { refreshToken: refreshToken },
    })

    if (data && data.getNewTokens && data.getNewTokens.accessToken) {
      saveToStorage(data.getNewTokens)
    }

    return data
  } catch (error) {
    console.error('Error fetching new tokens:', error)
  }
}
