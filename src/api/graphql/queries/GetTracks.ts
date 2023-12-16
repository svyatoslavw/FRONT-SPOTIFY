import { gql } from '@apollo/client'

export const GET_ALL_TRACKS = gql`
  query getAllTracks($searchTerm: String, $categoryId: String) {
    getAllTracks(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {
      id
      file
      name
      image
      artistId
      artist {
        name
      }
    }
  }
`
