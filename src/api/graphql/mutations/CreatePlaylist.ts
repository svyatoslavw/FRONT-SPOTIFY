import { gql } from '@apollo/client'

export const CREATE_PLAYLIST = gql`
  mutation createPlaylist($id: Float!) {
    createPlaylist(id: $id) {
      id
      name
      createdAt
      slug
      image
      tracks {
        id
        file
        name
        image
        artistId
        artist {
          id
          name
        }
      }
    }
  }
`
