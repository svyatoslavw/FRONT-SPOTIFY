import { gql } from '@apollo/client'

export const GET_PROFILE_BY_TOKEN = gql`
  query {
    getProfileByToken {
      role
    }
  }
`
