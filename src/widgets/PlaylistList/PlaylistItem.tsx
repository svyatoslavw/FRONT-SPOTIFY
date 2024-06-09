import { Playlist } from '@/__generated__/ggl/graphql';
import { PlayButton } from '@/entities/player/ui';
import Image from 'next/image';
import Link from 'next/link';

const PlaylistItem = ({ playlist }: { playlist: Playlist }) => {
  return (
    <Link
      key={playlist.id}
      href={`/playlist/${playlist.slug}`}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          alt={playlist.name}
          src={playlist.image}
          width={150}
          height={150}
          className="object-cover h-[150px] w-[150px]"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-2 gap-y-1">
        <p className="font-semibold truncate w-full hover:underline">
          {playlist.name}
        </p>
        <p className="text-zinc-400 text-xs pb-1 w-full truncate">
          {playlist.user && playlist.user.name}
        </p>
        <div className="absolute bottom-[78px] right-5">
          <PlayButton />
        </div>
      </div>
    </Link>
  );
};

export { PlaylistItem };
