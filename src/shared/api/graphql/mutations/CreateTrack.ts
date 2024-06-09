import { gql } from '@apollo/client'

export const CREATE_TRACK = gql`
  mutation createTrack($id: Float!, $dto: TrackDto!) {
    createTrack(id: $id, dto: $dto) {
      id
      file
      name
      slug
      image
    }
  }
`
