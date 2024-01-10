import { gql } from '@apollo/client'

export const UPDATE_PROFILE = gql`
  mutation updateProfile($id: Float!, $dto: UserDto!) {
    updateProfile(id: $id, dto: $dto) {
      id
      name
      image
      role
      password
    }
  }
`
