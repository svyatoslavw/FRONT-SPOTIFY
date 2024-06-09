'use client';
import usePlay from '@/entities/player/models/usePlay';
import { useProfile } from '@/entities/user/models/useProfile';
import { Header } from '@/widgets/Header';
import { useState } from 'react';
import PlaylistItem from '../playlist/PlaylistItem';
import FavoritesHeader from './FavoritesHeader';

const FavoritesPage = () => {
  const { profile } = useProfile()!;

  const [isHovered, setIsHovered] = useState<number | null>(null);

  const openHover = (index: number) => setIsHovered(index);
  const closeHover = () => setIsHovered(null);

  //@ts-ignore
  const onPlay = usePlay(profile?.likedTracks);
  if (!profile) return;

  return (
    <>
      <>
        <Header />
        <FavoritesHeader />
      </>
      <div className="px-10 h-[300px]">
        {profile.likedTracks.map((track, index) => (
          <PlaylistItem
            key={track.id}
            closeHover={closeHover}
            index={index}
            isHovered={isHovered}
            openHover={() => openHover(index)}
            track={track}
            onPlay={() => onPlay(track.id)}
            profile={profile}
          />
        ))}
      </div>
    </>
  );
};

export default FavoritesPage;
