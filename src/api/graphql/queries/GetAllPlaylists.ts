import { gql } from '@apollo/client'

export const GET_ALL_PLAYLISTS = gql`
  query {
    getAllPlaylist {
      id
      slug
      name
      image
      user {
        name
      }
    }
  }
`
