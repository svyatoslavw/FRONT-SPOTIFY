import { gql } from '@apollo/client'

export const GOOGLE_USER = gql`
  query {
    googleLogin {
      user {
        id
        email
        role
        name
      }
      accessToken
      refreshToken
    }
  }
`
