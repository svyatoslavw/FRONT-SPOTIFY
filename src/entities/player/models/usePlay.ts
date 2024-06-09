import { Track } from '@/__generated__/ggl/graphql';
import usePlayerStore from '@/entities/player/models/playerStore';
import { useProfile } from '@/entities/user/models/useProfile';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useRouter } from 'next/navigation';

const usePlay = (tracks: Track[] | Maybe<Track[]>) => {
  const { push } = useRouter();
  const { profile } = useProfile();
  const { setId, setIds } = usePlayerStore();

  const onPlay = (id: number) => {
    if (!profile) {
      push('/auth/login');
    }

    setId(id);
    setIds(tracks!.map((track) => track.id));
  };

  return onPlay;
};

export default usePlay;
