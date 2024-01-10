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
      role
      tracks {
        id
        name
        slug
        image
        file
      }
      likedTracks {
        id
        file
        image
        name
        slug
        artistId
        artist {
          name
        }
      }
      premium {
        expiration
        price
        image
        type
      }
      favorites {
        playlist {
          id
          name
          image
          slug
          userId
          user {
            id
            name
          }
          tracks {
            id
            file
            image
            name
            slug
            artistId
            artist {
              name
            }
          }
        }
      }
    }
  }
`
