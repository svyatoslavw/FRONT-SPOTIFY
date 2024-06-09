import { Track } from '@/__generated__/ggl/graphql';
import { PlayButton } from '@/entities/player/ui';
import Image from 'next/image';
import Link from 'next/link';

const TrackItem = ({
  track,
  play,
}: {
  track: Track;
  play: (id: number) => void;
}) => {
  return (
    <div
      key={track.id}
      className="relative flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition mb-10 p-3 group"
    >
      <div className="aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          alt={track.name}
          src={track.image}
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-2 gap-y-1">
        <Link
          href={`/track/${track.slug}`}
          className="font-semibold truncate w-full hover:underline"
        >
          {track.name}
        </Link>
        <p className="text-zinc-400 text-xs pb-1 w-full truncate">
          {track.artist && track.artist.name}
        </p>
        <div
          onClick={() => play(track.id)}
          className="absolute bottom-[78px] right-5"
        >
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export { TrackItem };
