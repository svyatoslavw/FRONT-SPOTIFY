'use client';
import { Mutation, Track, User } from '@/__generated__/ggl/graphql';
import usePlayerStore from '@/entities/player/models/playerStore';
import { AddSearchedToPlaylist } from '@/features/AddSearchedToPlaylist';
import { client } from '@/shared/api/apollo.config';
import { ADD_TO_PLAYLIST } from '@/shared/api/graphql/mutations/AddToPlaylist';
import { TOGGLE_FAVORITE_TRACK } from '@/shared/api/graphql/mutations/ToggleFavoriteTrack';
import { GET_PROFILE } from '@/shared/api/graphql/queries/GetProfile';
import { useMutation } from '@apollo/client';
import clsx from 'clsx';
import { Heart, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';

interface IPlaylistItem {
  track: Track;
  onPlay: any;
  profile: User;
}

const PlaylistSearchItem: FC<IPlaylistItem> = ({ track, profile, onPlay }) => {
  const { activeId } = usePlayerStore();
  const isFavorite = profile?.likedTracks?.some(
    (favorite) => favorite.id === track.id
  );
  const [playId, setPlayId] = useState<number | null>(null);
  const [trackId, setTrackId] = useState<number | null>(null);

  const [addToPlaylist] = useMutation<Mutation>(ADD_TO_PLAYLIST, {});

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
          id: profile!.id,
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

  const addToPlaylistHandler = async () => {
    try {
      const { data } = await addToPlaylist({
        variables: {
          id: playId,
          trackId: trackId,
        },
        onCompleted: () => {
          client.refetchQueries({
            include: ['GET_ALL_PLAYLISTS'],
          });
        },
        fetchPolicy: 'network-only',
      });

      setPlayId(null);
      setTrackId(null);

      if (data && data.addToPlaylist) toast.success('Track successfully added');
    } catch (error) {
      toast.error('Something happened. Please try again!');
    }
  };

  return (
    <>
      <div
        key={track.id}
        className="flex justify-between items-center p-2 pr-5 my-2 rounded-md hover:bg-graybackg transition-all"
      >
        <div className="flex gap-2 items-center">
          <p
            onClick={() => onPlay(track.id)}
            className="text-sm w-5 flex items-center justify-center"
          >
            {activeId === track.id ? (
              <Pause size={18} fill="white" />
            ) : (
              <Play size={18} fill="white" />
            )}
          </p>
          <Image src={track.image} alt="image" width={40} height={40} />
          <div>
            <p
              className={clsx('text-sm cursor-pointer hover:underline', {
                'text-sm cursor-pointer text-green-500 hover:underline':
                  activeId === track.id,
              })}
            >
              {track.name}
            </p>
            <p className="text-sm text-slate-300 cursor-pointer hover:underline">
              {track.artist && track.artist.name}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <AddSearchedToPlaylist
            setPlayId={setPlayId}
            setTrack={() => setTrackId(track.id)}
            playId={playId}
            addToPlaylistHandler={addToPlaylistHandler}
          />
          <button onClick={addToFavoriteHandler}>
            {isFavorite ? (
              <Heart
                fill="#22c55e"
                color="#22c55e"
                className="hover:scale-125 transition-all"
                strokeWidth={1.5}
                size={20}
              />
            ) : (
              <Heart
                className="hover:scale-125 transition-all"
                strokeWidth={1.5}
                size={20}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaylistSearchItem;
