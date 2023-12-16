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
          tracks {
            id
            file
            image
            name
            artist {
              name
            }
          }
        }
      }
    }
  }
`
