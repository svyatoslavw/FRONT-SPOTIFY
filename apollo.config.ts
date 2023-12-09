require('dotnet/config')
module.exports = {
  service: {
    endpoint: {
      url: 'http://localhost:4000/graphql',
      skipSSLValidation: true,
    },
  },
}
