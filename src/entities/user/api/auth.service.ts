import { IUser } from '@/types/user.types';

class AuthService {
  async getNewTokens(
    refreshToken: string,
  ) {
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

    const variables = { refreshToken }

    try {
      const newTokens = await fetch(process.env.GRAPHQL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apollo-require-preflight': 'true',
          'Authorization': refreshToken ? `Bearer ${refreshToken}` : '',
        },
        body: JSON.stringify({ query, variables }),
      })
        .then((res) => res.json())
        .then(({ data }) => console.log(data))
        console.log(newTokens);
        
      // saveToStorage(newTokens)
      // return newTokens
    } catch (error) {
      throw error
    }
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
        'Authorization': `Bearer ${accessToken}`,
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
