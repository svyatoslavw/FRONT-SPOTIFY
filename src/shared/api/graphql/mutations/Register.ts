import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation register($email: String!, $name: String!, $password: String!) {
    register(registerInput: { email: $email, name: $name, password: $password }) {
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
