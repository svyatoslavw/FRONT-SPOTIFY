import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
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
