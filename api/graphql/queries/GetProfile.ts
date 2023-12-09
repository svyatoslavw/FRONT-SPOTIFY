import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
  query getProfile($id: Float!) {
    getProfile(id: $id) {
      id
      email
      name
      image
      country
      login
      favorites {
        id
        createdAt
        slug
        name
        image
        tracks {
          id
          createdAt
          releaseDate
          file
          name
          image
          artistId
          artist {
            name
            image
          }
        }
      }
    }
  }
`
