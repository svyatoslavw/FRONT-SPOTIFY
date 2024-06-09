import { Track } from '@/__generated__/ggl/graphql';
import Image from 'next/image';

const TrackHeader = ({ track }: { track: Track }) => {
  return (
    <div className="w-full 2xl:h-[240px] xl:h-[200px] flex gap-7 px-6 items-center">
      <Image
        src={track.image}
        className="hover:scale-110 transition-all"
        width={210}
        height={210}
        alt="/"
      />
      <div className="flex flex-col w-[70%]">
        <p className="text-sm my-3">Сингл</p>
        <p className="text-8xl truncate py-2 tracking-tighter font-black">
          {track.name}
        </p>
      </div>
    </div>
  );
};

export default TrackHeader;
