import { IPlaylist } from '@/types/playlist.types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const LikedPlaylist: FC<{ playlist?: IPlaylist }> = ({ playlist }) => {
  if (!playlist) {
    return null;
  }
  return (
    <Link
      key={playlist.id}
      href={`/playlist/${playlist.slug}`}
      className="p-2 hover:bg-zinc-900 rounded-lg transition-colors"
    >
      <div className="flex gap-2 ">
        <Image
          src={playlist.image}
          alt="image"
          width={45}
          height={45}
          className="rounded-lg"
        />
        <div>
          <p className="text-sm truncate w-[125px]">{playlist.name}</p>
          <span className="text-xs text-zinc-400">
            {playlist.user && playlist.user.name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export { LikedPlaylist };
