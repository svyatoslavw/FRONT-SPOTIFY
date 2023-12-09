import { getAccessToken } from '@/services/auth/auth.helper'
import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { getMainDefinition } from '@apollo/client/utilities'
import { createUploadLink } from 'apollo-upload-client'
const GRAPHQL_API_URI = process.env.SERVER_URL + '/graphql'

const httpLink = createHttpLink({
  uri: GRAPHQL_API_URI,
  credentials: 'include',
  headers: {
    'apollo-require-preflight': 'true',
  },
})

const authLink: ApolloLink = setContext((_, { headers }) => {
  const token = getAccessToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
})

const uploadLink = createUploadLink({
  uri: 'http://localhost:3000/graphql',
  headers: {
    'apollo-require-preflight': 'true',
  },
})

const splitLink = ApolloLink.split(
  // Функция, определяющая, когда использовать uploadLink или httpLink
  ({ query }) => {
    const definition = getMainDefinition(query)
    if (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'mutation' &&
      definition.variableDefinitions
    ) {
      return definition.variableDefinitions.some(
        ({ type }) => type.kind === 'NamedType' && type.name.value === 'Upload',
      )
    }
    return false
  },
  uploadLink, // Использовать uploadLink, если условие верно (загрузка файлов)
  httpLink, // Использовать httpLink, если условие не верно (обычные операции)
)

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, splitLink]),
  cache: new InMemoryCache(),
})
