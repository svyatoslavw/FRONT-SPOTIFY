import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { getMainDefinition } from '@apollo/client/utilities'
import { createUploadLink } from 'apollo-upload-client'

const isServer = typeof window === 'undefined'

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL,
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
  const token = getAccessToken()
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      if (message === 'Unauthorized') {
        try {
          authService.getNewTokens(token || '')
        } catch (error) {
          client
            .clearStore()
            .then(() => removeFromStorage())
            .then(() => window.location.reload())
        }
      }
    })

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
})

const uploadLink = createUploadLink({
  uri: 'http://localhost:4000/graphql',
  headers: {
    'apollo-require-preflight': 'true',
  },
  credentials: 'include',
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
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getPlaylistBySlug: {
            merge(existing, incoming) {
              return incoming
            },
          },
          getAllPlaylists: {
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
    },
  }),
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  //ssrMode: isServer,
})
