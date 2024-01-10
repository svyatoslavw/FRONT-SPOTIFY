import { gql } from '@apollo/client'

export const GET_MAIN_STATISTICS = gql`
  query {
    getMainStatistics {
      name
      value
    }
  }
`
