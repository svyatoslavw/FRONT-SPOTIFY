import { gql } from '@apollo/client'

export const UPDATE_PLAYLIST = gql`
  mutation updatePlaylist($id: Float!, $dto: UpdatePlaylistDto!) {
    updatePlaylist(id: $id, dto: $dto) {
      name
      slug
      image
    }
  }
`
