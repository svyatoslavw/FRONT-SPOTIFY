import { Play } from 'lucide-react'
import { FC } from 'react'

const PlayButton: FC = () => {
  return (
    <button
      className="
        transition 
        opacity-0 
        rounded-full 
        flex 
        items-center 
        justify-center 
        bg-green-500 
        p-4 
        drop-shadow-md 
        translate
        translate-y-1/4
        group-hover:opacity-100 
        group-hover:translate-y-0
        hover:scale-[1.15]
      "
    >
      <Play size={22} className="text-black" fill="black" />
    </button>
  )
}

export default PlayButton
