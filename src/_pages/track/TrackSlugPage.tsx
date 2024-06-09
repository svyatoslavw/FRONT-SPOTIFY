'use client';
import { Track } from '@/__generated__/ggl/graphql';
import usePlay from '@/entities/player/models/usePlay';
import { useProfile } from '@/entities/user/models/useProfile';
import { Header } from '@/widgets/Header';
import { average } from 'color.js';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PlaylistItem from '../playlist/PlaylistItem';
import TrackButtons from './TrackButtons';
import TrackHeader from './TrackHeader';

interface ISlugPage {}

const PlaylistSlugPage: FC<{ track: Track }> = ({ track }) => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if (track) {
      average(track.image)
        .then((result: any) => {
          setColor(result);
        })
        .catch((error) => {
          toast.error('Error calculating color');
        });
    }
  }, [track]);

  const [isHovered, setIsHovered] = useState<number | null>(null);
  const onPlay = usePlay([]);
  const openHover = (index: number) => setIsHovered(index);
  const closeHover = () => setIsHovered(null);

  const { profile } = useProfile();

  if (!profile) return;
  const profileId = profile.id;
  const isFavorite = profile?.likedTracks?.some((tr) => tr.id === +track.id);
  return (
    <div className="overflow-x-hidden">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
        }}
        className="rounded-t-lg rounded-r-lg"
      >
        <Header />
        {track && <TrackHeader track={track} />}
      </div>

      <div className="w-full">
        <TrackButtons
          profileId={profileId}
          isFavorite={isFavorite}
          track={track}
        />
        <div className="px-10">
          <PlaylistItem
            openHover={() => openHover(0)}
            closeHover={closeHover}
            track={track}
            onPlay={() => onPlay(track.id)}
            index={0}
            isHovered={isHovered}
            profile={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistSlugPage;
