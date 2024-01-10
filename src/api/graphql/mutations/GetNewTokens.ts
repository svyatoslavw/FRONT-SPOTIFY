import { gql } from '@apollo/client'

export const GET_NEW_TOKENS = gql`
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
  }
`
