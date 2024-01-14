import { FC } from 'react'

const CreatePlaylist: FC<{ createButton: () => void }> = ({ createButton }) => {
  return (
    <div className="bg-gray w-full h-36 rounded-xl px-5 py-3 text-white">
      <p className="py-1 font-semibold">Create your first playlist</p>
      <p className="py-1 text-sm">It's not difficult at all! We will help.</p>
      <button
        onClick={createButton}
        className="py-1.5 px-3 mt-4 rounded-3xl text-sm text-center font-semibold bg-white text-black hover:scale-105 duration-200"
      >
        Create first playlist
      </button>
    </div>
  )
}

export default CreatePlaylist
