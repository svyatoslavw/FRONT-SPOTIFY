import { TOGGLE_FAVORITE_PLAYLIST } from '@/shared/api/graphql/mutations/ToggleFavoritePlaylist';
import { GET_PROFILE } from '@/shared/api/graphql/queries/GetProfile';
import { useMutation } from '@apollo/client';
import { Button } from '@nextui-org/react';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';

interface IAddToFavoriteProps {
  playlistId: number;
  profileId: number;
  isFavorite: boolean | null | undefined;
}

const AddToFavoritePlaylist = ({
  playlistId,
  profileId,
  isFavorite,
}: IAddToFavoriteProps) => {
  const [toggle] = useMutation(TOGGLE_FAVORITE_PLAYLIST);
  const addToFavorite = async () => {
    try {
      await toggle({
        variables: {
          playlistId: String(playlistId),
          id: profileId,
        },
        refetchQueries: [GET_PROFILE],
      });
      toast.success('Playlist added to favorite!');
    } catch (error) {
      toast.error('Something happened. Please try again!');
    }
  };

  return (
    <Button onClick={addToFavorite}>
      {isFavorite ? (
        <Heart color="#1ed760" size={38} fill="#1ed760" />
      ) : (
        <Heart color="gray" size={38} />
      )}
    </Button>
  );
};

export { AddToFavoritePlaylist };
