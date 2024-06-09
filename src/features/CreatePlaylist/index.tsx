import { useProfile } from '@/entities/user/models/useProfile';
import { client } from '@/shared/api/apollo.config';
import { CREATE_PLAYLIST } from '@/shared/api/graphql/mutations/CreatePlaylist';
import { GET_PROFILE } from '@/shared/api/graphql/queries/GetProfile';
import { useMutation } from '@apollo/client';
import { ReactNode } from 'react';
import toast from 'react-hot-toast';

const CreatePlaylist = ({ children }: { children: ReactNode }) => {
  const { profile } = useProfile();

  const [createPlaylist] = useMutation(CREATE_PLAYLIST, {
    onCompleted: async (data) => {
      if (profile)
        await client.refetchQueries({
          include: [GET_PROFILE],
        });
    },
    fetchPolicy: 'no-cache',
  });

  const createPlaylistHandler = () => {
    try {
      if (profile && profile.id) {
        createPlaylist({
          variables: {
            id: profile.id,
          },
        });
        toast.success('Playlist created!');
      } else {
        toast.error('Not authorized!');
      }
    } catch (error) {
      toast.error('Something happened. Please try again!');
    }
  };
  return <div onClick={createPlaylistHandler}>{children}</div>;
};

export { CreatePlaylist };
