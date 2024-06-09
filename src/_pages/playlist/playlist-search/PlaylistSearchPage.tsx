import useFilterStore from '@/entities/filter/models/filterStore';
import usePlay from '@/entities/player/models/usePlay';
import { useProfile } from '@/entities/user/models/useProfile';
import { IAlbum } from '@/types/album.types';
import { ITrack } from '@/types/track.types';
import { LoaderIcon } from 'lucide-react';
import { FC } from 'react';
import PlaylistSearchItem from './PlaylistSearchItem';

interface IPlaylist {
  albums: IAlbum[];
  tracks: ITrack[];
  isLoading: boolean;
}

const PlaylistSearchPage: FC<IPlaylist> = ({ albums, tracks, isLoading }) => {
  const { queryParams } = useFilterStore();

  const { profile } = useProfile();
  //@ts-ignore
  const onPlay = usePlay(tracks);

  if (!profile) return;
  return (
    <>
      {isLoading ? (
        <div className="h-10 flex w-full justify-center items-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        queryParams.searchTerm !== '' &&
        queryParams.searchTerm && (
          <div className="mt-5 overflow-y-auto 2xl:h-44 xl:h-32">
            {tracks &&
              tracks.map((track) => (
                <PlaylistSearchItem
                  track={track}
                  onPlay={onPlay}
                  profile={profile}
                  key={track.id}
                />
              ))}
          </div>
        )
      )}
    </>
  );
};

export default PlaylistSearchPage;
