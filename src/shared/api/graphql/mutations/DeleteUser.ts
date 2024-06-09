import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation deleteProfile($id: Float!) {
    deleteProfile(id: $id) {
      id
    }
  }
`
