'use client';

import { Playlist, Track } from '@/__generated__/ggl/graphql';
import { PUBLIC_URL } from '@/shared/lib/config/url.config';
import { Heading } from '@/shared/ui/heading';
import { Header } from '@/widgets/Header';
import { PlaylistList } from '@/widgets/PlaylistList';
import { TrackList } from '@/widgets/TrackList';
import { HeartIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

export interface IHomePage {
  tracks: Track[];
  playlists: Playlist[];
  isLoading: boolean;
}

const HomePage: FC<IHomePage> = ({ tracks, isLoading, playlists }) => {
  return (
    <main className="overflow-y-auto">
      <Header />
      <div className="px-3 bg xl:h-[85vh] lg:h-[80vh] md:h-[90vh] sm:h-full">
        <Heading>Welcome back</Heading>
        <div className="bg-zinc-800 w-60 rounded-e-md hover:bg-zinc-700 transition-all">
          <div className="flex gap-2 items-center">
            <HeartIcon
              size={60}
              className="p-4 bg-purple rounded-sm"
              style={{
                background:
                  'linear-gradient(to left top, rgb(233, 213, 255), rgb(140,131,228), rgb(109,82,234))',
              }}
              color="white"
              fill="white"
              strokeWidth={1}
            />
            <Link
              href={PUBLIC_URL.favorites()}
              className="ml-2 cursor-pointer hover:underline"
            >
              Liked tracks
            </Link>
          </div>
        </div>
        <TrackList isLoading={isLoading} tracks={tracks} />
        <PlaylistList playlists={playlists} />
      </div>
    </main>
  );
};

export default HomePage;
