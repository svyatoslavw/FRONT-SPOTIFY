import { Mutation, Track } from '@/__generated__/ggl/graphql';
import usePlay from '@/entities/player/models/usePlay';
import { useProfile } from '@/entities/user/models/useProfile';
import { client } from '@/shared/api/apollo.config';
import { TOGGLE_FAVORITE_TRACK } from '@/shared/api/graphql/mutations/ToggleFavoriteTrack';
import { GET_PROFILE } from '@/shared/api/graphql/queries/GetProfile';
import { Button } from '@/shared/ui/button';
import { useMutation } from '@apollo/client';
import { Heart, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import toast from 'react-hot-toast';
import styles from './TrackSlug.module.scss';

interface IPlaylistButtons {
  track: Track;
  isFavorite: boolean | null | undefined;
  profileId: number;
}

const TrackButtons: FC<IPlaylistButtons> = ({
  track,
  isFavorite,
  profileId,
}) => {
  const { push } = useRouter();

  const [toggleFavoriteTrack] = useMutation<Mutation>(TOGGLE_FAVORITE_TRACK, {
    onCompleted: async () => {
      await client.refetchQueries({
        include: [GET_PROFILE],
      });
    },
    fetchPolicy: 'no-cache',
  });

  const addToFavoriteHandler = async () => {
    try {
      const { data } = await toggleFavoriteTrack({
        variables: {
          id: profileId,
          trackId: track.id,
        },
      });

      if (data && data.toggleFavoriteTrack) {
        if (isFavorite) {
          toast.error('Track successfully removed');
        } else {
          toast.success('Track successfully added');
        }
      }
    } catch (error) {
      toast.error('Something happened. Please try again!');
    }
  };

  const deleteButton = () => {
    try {
      //remove()
      toast.success('Playlist successfully removed!');
      push('/');
    } catch (error) {
      toast.error('Something happened. Please try again!');
    }
  };
  const onPlay = usePlay([]);
  const { profile } = useProfile();

  if (!profile) return;
  return (
    <div className={styles.btns}>
      <Button
        onClick={() => onPlay(track.id)}
        className="hover:scale-125 aspect-square rounded-full transition-all"
        variant={'outline'}
      >
        <div className="flex items-center gap-5 py-4 px-10">
          <Play size={18} fill="black" />
        </div>
      </Button>

      <Button onClick={addToFavoriteHandler}>
        {isFavorite ? (
          <Heart color="#1ed760" size={38} fill="#1ed760" />
        ) : (
          <Heart color="gray" size={38} />
        )}
      </Button>
    </div>
  );
};

export default TrackButtons;
