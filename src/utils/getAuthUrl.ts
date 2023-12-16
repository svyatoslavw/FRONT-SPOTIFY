export const getAuthURL = (provider: string): string => {
  const serverUrl = process.env.SERVER_URL

  return `${serverUrl}/auth/${provider}/login`
}
