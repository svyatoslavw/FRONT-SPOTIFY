import { Heart } from 'lucide-react'

const FavoritesHeader = () => {
  return (
    <div className="w-full 2xl:h-[240px] xl:h-[200px] flex gap-7 px-6 items-center">
      <Heart
        size={210}
        className="rounded-lg p-14 bg-purple hover:scale-105 transition-all"
        style={{
          background:
            'linear-gradient(to left top, rgb(233, 213, 255), rgb(140,131,228), rgb(109,82,234))',
        }}
        color="white"
        fill="white"
        strokeWidth={1}
      />
      <div>
        <p className="text-sm my-3">Playlist</p>
        <p className="text-8xl py-2 tracking-tight font-black">Favorite tracks</p>
      </div>
    </div>
  )
}

export default FavoritesHeader
