import { Playlist } from '@/__generated__/ggl/graphql';
import { Heading } from '@/shared/ui/heading';
import { PlaylistItem } from './PlaylistItem';

const PlaylistList = ({ playlists }: { playlists: Playlist[] }) => {
  return (
    <>
      {playlists.length !== 0 && (
        <Heading className="pb-2">Popular playlists</Heading>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
        {playlists &&
          playlists.map((playlist) => (
            <PlaylistItem playlist={playlist} key={playlist.id} />
          ))}
      </div>
    </>
  );
};

export { PlaylistList };
