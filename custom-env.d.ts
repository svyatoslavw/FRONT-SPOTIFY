declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_URL: string
      GRAPHQL_URL: string
    }
  }
}
