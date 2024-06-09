import { gql } from '@apollo/client'

export const CREATE_PAYMENT = gql`
  mutation createPayment($type: String!, $id: Float!) {
    createPayment(type: $type, id: $id) {
      url
    }
  }
`
