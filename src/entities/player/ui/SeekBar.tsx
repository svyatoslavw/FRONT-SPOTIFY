// FIXME: progress bar

import { Range, Root, Track } from '@radix-ui/react-slider';
import { FC } from 'react';

interface SeekBarProps {
  duration: number;
  onSeek: (timeInSeconds: number) => void;
  sound: any;
}

const SeekBar: FC<SeekBarProps> = ({ duration, onSeek, sound }) => {
  // const formatTime = (durationInMilliseconds: number) => {
  //   const totalSeconds = Math.floor(durationInMilliseconds / 1000)
  //   const minutes = Math.floor(totalSeconds / 60)
  //   const seconds = totalSeconds % 60
  //   const secondsWithLeadingZero = seconds < 10 ? `0${seconds}` : `${seconds}`
  //   return `${minutes}:${secondsWithLeadingZero}`
  // }

  const handleSeek = (newValues: number[]) => {
    if (newValues.length > 0) {
      const time = newValues[0] / 1000;
      console.log(time);
      onSeek(time);
    }
  };

  return (
    <Root
      className="relative flex items-center select-none touch-none gap-5 w-full h-3"
      onValueChange={handleSeek}
      max={duration}
      step={0.1}
      aria-label="Seek Bar"
    >
      <Track className="bg-neutral-600 relative grow rounded-full h-[4px] ">
        <Range className="absolute bg-white rounded-full h-full" />
      </Track>
    </Root>
  );
};

export { SeekBar };
