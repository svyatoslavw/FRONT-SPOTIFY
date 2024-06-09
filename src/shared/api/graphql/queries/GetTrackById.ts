import { gql } from '@apollo/client'

export const GET_TRACK_BY_ID = gql`
  query getTrackById($id: Float!) {
    getTrackById(id: $id) {
      id
      file
      name
      slug
      image
      artistId
      artist {
        name
      }
    }
  }
`
