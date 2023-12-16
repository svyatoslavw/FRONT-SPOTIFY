'use client'
import { ChangeEvent, FC } from 'react'
interface IPlayerProgress {
  left: number
  right: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PlayerProgress: FC<IPlayerProgress> = ({ left, right, onChange }) => {
  return (
    <div className="flex">
      <input min={0} max={right} type="range" value={left} onChange={onChange} />
      <div>
        {left} / {right}
      </div>
    </div>
  )
}

export default PlayerProgress
