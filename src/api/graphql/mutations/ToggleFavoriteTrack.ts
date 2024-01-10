import { gql } from '@apollo/client'

export const TOGGLE_FAVORITE_TRACK = gql`
  mutation toggleFavoriteTrack($id: Float!, $trackId: Float!) {
    toggleFavoriteTrack(id: $id, trackId: $trackId) {
      likedTracks {
        id
        name
      }
    }
  }
`
