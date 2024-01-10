'use client'
import { Range, Root, Track } from '@radix-ui/react-slider'
import { FC } from 'react'

interface SliderProps {
  value?: number
  onChange: (value: number) => void
}

const VolumeBar: FC<SliderProps> = ({ onChange, value = 0.05 }) => {
  const handler = (values: number[]) => {
    onChange?.(values[0])
  }
  return (
    <Root
      className="relative flex items-center select-none touch-none w-full h-10"
      defaultValue={[0.05]}
      value={[value]}
      onValueChange={handler}
      max={0.5}
      step={0.05}
      aria-label="Volume"
    >
      <Track className="bg-neutral-600 relative grow rounded-full h-[3px] ">
        <Range className="absolute bg-white rounded-full h-full" />
      </Track>
    </Root>
  )
}

export default VolumeBar
