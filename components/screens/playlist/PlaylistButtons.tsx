import Button from '@/components/ui/button/Button'
import usePlay from '@/hooks/usePlay'
import { useProfile } from '@/hooks/useProfile'
import { PlaylistService } from '@/services/playlist/playlist.service'
import { UserService } from '@/services/user.service'
import { IPlaylist } from '@/types/playlist.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import { LuTrash2 } from 'react-icons/lu'

interface IPlaylistButtons {
  playlist: IPlaylist
  isFavorite: boolean
  profileId: number
}

const PlaylistButtons: FC<IPlaylistButtons> = ({ playlist, isFavorite, profileId }) => {
  const queryClient = useQueryClient()
  const { push } = useRouter()
  const { mutate } = useMutation({
    mutationKey: ['add favorite'],
    mutationFn: () => UserService.toggleFavorite(playlist.id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })

  const { mutate: remove } = useMutation({
    mutationKey: ['delete playlist'],
    mutationFn: () => PlaylistService.delete(profileId, playlist.id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })

  const addToFavorite = () => {
    try {
      mutate()
      toast.success('Playlist added to favorite!')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }

  const deleteButton = () => {
    try {
      remove()
      toast.success('Playlist successfully removed!')
      push('/')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  const onPlay = usePlay(playlist.tracks)
  const { profile } = useProfile()

  if (!profile) return
  return (
    <div className="flex items-center gap-5 py-4 px-10">
      <Button onClick={() => onPlay(playlist.id)} className={'hover:scale-125'}>
        <div className="bg-green-500 p-3.5 flex items-center justify-center rounded-full">
          <FaPlay size={16} />
        </div>
      </Button>
      {playlist.userId === profile.id ? (
        <Button onClick={deleteButton} className={''}>
          <LuTrash2 color="#1ed760" size={28} />
        </Button>
      ) : (
        <Button onClick={addToFavorite} className={''}>
          {isFavorite ? (
            <AiFillHeart color="#1ed760" size={38} />
          ) : (
            <AiOutlineHeart color="gray" size={38} />
          )}
        </Button>
      )}
    </div>
  )
}

export default PlaylistButtons
