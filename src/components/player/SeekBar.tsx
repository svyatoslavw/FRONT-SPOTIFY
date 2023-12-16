import { Range, Root, Track } from '@radix-ui/react-slider'
import { FC, useCallback, useState } from 'react'

interface SeekBarProps {
  duration: number
  onSeek: (timeInSeconds: number) => void
}

const SeekBar: FC<SeekBarProps> = ({ duration, onSeek }) => {
  const [currentTime, setCurrentTime] = useState(0)

  const formatTime = (durationInMilliseconds: number) => {
    const totalSeconds = Math.floor(durationInMilliseconds / 1000) // Переводим миллисекунды в секунды
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const secondsWithLeadingZero = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${minutes}:${secondsWithLeadingZero}`
  }

  const calculateProgress = useCallback(() => {
    return (currentTime / duration) * 100 || 0
  }, [currentTime, duration])

  const handleSeek = (newValues: number[]) => {
    if (newValues.length > 0) {
      const time = newValues[0] / 1000
      console.log(time)

      setCurrentTime(time)
      onSeek(time)
    }
  }
  return (
    <Root
      className="relative flex items-center select-none touch-none gap-5 w-full h-3"
      defaultValue={[calculateProgress()]}
      onValueChange={handleSeek}
      max={duration}
      step={0.1}
      aria-label="Seek Bar"
    >
      <Track className="bg-neutral-600 relative grow rounded-full h-[4px] ">
        <Range className="absolute bg-white rounded-full h-full" />
      </Track>
    </Root>
  )
}

export default SeekBar
