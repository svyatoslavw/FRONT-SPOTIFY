import { IUser } from '@/types/user.types'

class AuthService {
  async getNewTokens(
    accessToken: string,
  ): Promise<{ accessToken: string; refreshToken: string; user: IUser }> {
    const query = `
    mutation getNewTokens($refreshToken: String!) {
      getNewTokens(refreshToken: $refreshToken) {
        accessToken
        refreshToken
        user {
          id
          name
          email
          role
        }
      }
    }`

    return fetch(process.env.GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then(({ data }) => data.getNewTokens)
      .catch((error) => {
        throw error
      })
  }

  async getProfileByToken(accessToken: string): Promise<IUser> {
    const query = `
    query {
      getProfileByToken {
        role
      }
    }`

    return fetch(process.env.GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then(({ data }) => data.getProfileByToken)
      .catch((error) => {
        throw error
      })
  }
}
export default new AuthService()
