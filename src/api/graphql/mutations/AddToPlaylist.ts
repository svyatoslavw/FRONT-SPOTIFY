import { gql } from '@apollo/client'

export const ADD_TO_PLAYLIST = gql`
  mutation addToPlaylist($id: Float!, $trackId: Float!) {
    addToPlaylist(id: $id, trackId: $trackId) {
      id
      name
      tracks {
        id
        name
      }
    }
  }
`
