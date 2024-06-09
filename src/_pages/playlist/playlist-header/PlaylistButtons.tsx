import { Playlist, User } from '@/__generated__/ggl/graphql';
import usePlay from '@/entities/player/models/usePlay';
import { AddToFavoritePlaylist } from '@/features/AddToFavoritePlaylist';
import { DeletePlaylist } from '@/features/DeletePlaylist';
import EditPlaylist from '@/features/EditPlaylist';
import { Button } from '@/shared/ui/button';
import { Play } from 'lucide-react';
import { FC } from 'react';

interface IPlaylistButtons {
  playlist: Playlist;
  profile: User;
  isFavorite: boolean | null | undefined;
}

const PlaylistButtons: FC<IPlaylistButtons> = ({
  playlist,
  isFavorite,
  profile,
}) => {
  const onPlay = usePlay(playlist.tracks);

  const isMyPlaylist = playlist.userId === profile.id;

  if (!profile) return;
  return (
    <div className="flex items-center gap-3 py-4 px-10">
      <Button
        onClick={() => onPlay(playlist.id)}
        className="hover:scale-125 transition"
      >
        <div className="bg-green-500 text-black p-3.5 flex items-center justify-center rounded-full">
          <Play size={18} fill="black" />
        </div>
      </Button>
      {isMyPlaylist ? (
        <>
          <EditPlaylist playlist={playlist} />
          <DeletePlaylist playlistId={playlist.id} profileId={profile.id} />
        </>
      ) : (
        <AddToFavoritePlaylist
          playlistId={playlist.id}
          profileId={profile.id}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
};

export { PlaylistButtons };
