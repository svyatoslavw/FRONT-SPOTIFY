import { Track } from '@/__generated__/ggl/graphql';
import usePlay from '@/entities/player/models/usePlay';
import { Heading } from '@/shared/ui/heading';
import { LoaderIcon } from 'lucide-react';
import { useCallback } from 'react';
import { TrackItem } from './TrackItem';

const TrackList = ({
  isLoading,
  tracks,
}: {
  isLoading: boolean;
  tracks: Track[];
}) => {
  const play = usePlay(tracks);
  const handlePlay = useCallback(
    (id: number) => {
      play(id);
    },
    [play]
  );

  return (
    <>
      {tracks.length !== 0 && <Heading className="mt-10">Newest songs</Heading>}
      <div className="grid grid-cols-2 relative sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
        {isLoading ? (
          <div className="w-full px-10 mt-20 absolute">
            <LoaderIcon className="animate-spin" />
          </div>
        ) : (
          tracks &&
          tracks.map((track: Track) => (
            <TrackItem track={track} key={track.id} play={handlePlay} />
          ))
        )}
      </div>
    </>
  );
};

export { TrackList };
