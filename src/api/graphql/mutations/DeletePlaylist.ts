import { gql } from '@apollo/client'

export const DELETE_PLAYLIST = gql`
  mutation deletePlaylist($id: Float!, $playlistId: Float!) {
    deletePlaylist(id: $id, playlistId: $playlistId)
  }
`
