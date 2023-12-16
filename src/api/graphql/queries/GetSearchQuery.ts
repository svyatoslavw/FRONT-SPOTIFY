import { gql } from '@apollo/client'

export const GET_SEARCH_QUERY = gql`
  query getSearchQuery($searchTerm: String, $categoryId: String) {
    getSearchQuery(query: { searchTerm: $searchTerm, categoryId: $categoryId }) {
      tracks {
        id
        image
        name
        file
        artist {
          name
        }
      }
      albums {
        id
        image
        name
      }
    }
  }
`
