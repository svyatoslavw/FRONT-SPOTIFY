import { gql } from '@apollo/client'

export const GET_TRACK_BY_SLUG = gql`
  query getTrackBySlug($slug: String!) {
    getTrackBySlug(slug: $slug) {
      id
      releaseDate
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
