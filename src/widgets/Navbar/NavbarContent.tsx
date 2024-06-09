import { useProfile } from '@/entities/user/models/useProfile';
import { CreatePlaylist } from '@/features/CreatePlaylist';
import { IFavorite } from '@/types/playlist.types';
import { HeartIcon, ListMusicIcon, Plus } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { LikedPlaylist } from './LikedPlaylist';
import { NavLink } from './NavLink';

const NavbarContent: FC = () => {
  const { profile } = useProfile();
  return (
    <div className="h-full overflow-y-auto w-full bg-custom rounded-xl px-2 mt-2">
      <div className="flex justify-between items-center px-5">
        <NavLink icon={ListMusicIcon} href="/library" text="My Library" />
        <CreatePlaylist>
          <Plus
            className="hover:rotate-90 hover:text-red-600 duration-200 cursor-pointer"
            size={22}
            color="gray"
          />
        </CreatePlaylist>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href="/favorites"
          className="hover:bg-zinc-900 p-2 rounded-lg transition-colors relative"
        >
          <div className="flex gap-2 items-center">
            <HeartIcon
              size={45}
              className="rounded-lg p-3.5 bg-purple"
              style={{
                background:
                  'linear-gradient(to left top, rgb(233, 213, 255), rgb(140,131,228), rgb(109,82,234))',
              }}
              color="white"
              fill="white"
              strokeWidth={1}
            />
            <p className="text-sm">Liked tracks</p>
          </div>
        </Link>
        {profile && profile.favorites && profile.favorites.length ? (
          profile.favorites.map((favorites: IFavorite) => (
            <LikedPlaylist
              key={favorites.playlist.id}
              playlist={favorites.playlist}
            />
          ))
        ) : (
          <div className="bg-zinc-900 w-full h-36 rounded-xl px-5 py-3 text-white">
            <p className="py-1 font-semibold">Create your first playlist</p>
            <p className="py-1 text-sm">
              It's not difficult at all! We will help.
            </p>
            <CreatePlaylist>
              <button className="py-1.5 px-3 mt-4 rounded-3xl text-sm text-center font-semibold bg-white text-black hover:scale-105 duration-200">
                Create first playlist
              </button>
            </CreatePlaylist>
          </div>
        )}
      </div>
    </div>
  );
};

export { NavbarContent };
