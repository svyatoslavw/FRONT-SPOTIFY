import { DELETE_PLAYLIST } from '@/shared/api/graphql/mutations/DeletePlaylist';
import { GET_ALL_PLAYLISTS } from '@/shared/api/graphql/queries/GetAllPlaylists';
import { GET_PLAYLIST_BY_SLUG } from '@/shared/api/graphql/queries/GetPlaylistBySlug';
import { GET_PROFILE } from '@/shared/api/graphql/queries/GetProfile';
import { Button } from '@/shared/ui/button';
import { useMutation } from '@apollo/client';
import { Trash2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface IDeletePlaylistProps {
  playlistId: number;
  profileId: number;
}

const DeletePlaylist = ({ playlistId, profileId }: IDeletePlaylistProps) => {
  const { push } = useRouter();

  const [remove] = useMutation(DELETE_PLAYLIST);
  const deleteButton = async () => {
    try {
      await remove({
        variables: {
          id: profileId,
          playlistId: playlistId,
        },
        refetchQueries: [GET_PROFILE, GET_PLAYLIST_BY_SLUG, GET_ALL_PLAYLISTS],
      });
      toast.success('Playlist successfully removed!');
      push('/');
    } catch (error) {
      toast.error('Something happened. Please try again!');
    }
  };

  return (
    <Button onClick={deleteButton}>
      <Trash2Icon color="#1ed760" size={28} />
    </Button>
  );
};

export { DeletePlaylist };
