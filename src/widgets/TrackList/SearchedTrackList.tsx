import { Track } from '@/__generated__/ggl/graphql';
import usePlay from '@/entities/player/models/usePlay';
import { TrackItem } from '@/widgets/TrackList';
import { FC } from 'react';

const SearchedTracks: FC<{ tracks: Track[] }> = ({ tracks }) => {
  const play = usePlay(tracks);
  return (
    <>
      {tracks.length ? (
        tracks.map((track) => (
          <TrackItem key={track.id} track={track} play={play} />
        ))
      ) : (
        <div className="h-20 border flex border-zinc-700 text-xl font-medium col-span-full w-full items-center justify-center">
          Not found!
        </div>
      )}
    </>
  );
};

export { SearchedTracks };
