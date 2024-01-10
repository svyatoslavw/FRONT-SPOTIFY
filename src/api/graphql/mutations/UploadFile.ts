import { gql } from '@apollo/client'

export const UPLOAD_MEDIA_FILE = gql`
  mutation uploadMediaFile($file: Upload) {
    uploadMediaFile(file: $file) {
      url
      name
    }
  }
`
