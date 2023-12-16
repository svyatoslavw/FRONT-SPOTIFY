import { gql } from '@apollo/client'

export const GET_PLAYLIST_BY_SLUG = gql`
  query getPlaylistBySlug($slug: String!) {
    getPlaylistBySlug(slug: $slug) {
      id
      slug
      image
      tracks {
        name
        image
        file
        id
        artist {
          name
        }
      }
      name
      user {
        name
      }
    }
  }
`
