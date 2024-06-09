import { gql } from '@apollo/client';

export const TOGGLE_FAVORITE_PLAYLIST = gql`
  mutation toggleFavorite($playlistId: String!, $id: Float!) {
    toggleFavorite(playlistId: $playlistId, id: $id) {
      favorites {
        playlistId
        playlist {
          name
        }
      }
    }
  }
`;
