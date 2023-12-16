import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/api/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    'src/__generated__/ggl/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      presetConfig: {
        glqTagName: 'gql',
      },
    },
  },
}

export default config
