import { PlaylistService } from '@/services/playlist/playlist.service'
import { IFavorite, IPlaylist } from '@/types/playlist.types'
import { IFullUser } from '@/types/user.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSolidPlaylist } from 'react-icons/bi'
import NavLink from '../NavLink'
import LikedPlaylist from './LikedPlaylist'

const NavbarMain: FC<{ profile: IFullUser }> = ({ profile }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['create playlist'],
    mutationFn: () => PlaylistService.create(profile.id),
    onSuccess(data) {
      queryClient.refetchQueries({ queryKey: ['profile'] })
    },
  })

  const createButton = () => {
    try {
      mutate()
      toast.success('Playlist created!')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  return (
    <div className="h-full overflow-scroll w-full bg-primary rounded-xl px-2 mt-2">
      <div className="flex justify-between items-center px-5">
        <NavLink icon={BiSolidPlaylist} href="/library" text="Моя медиатека" />
        <AiOutlinePlus
          className="hover:rotate-45 hover:text-red-600 duration-200"
          size={25}
          onClick={createButton}
          color="gray"
        />
      </div>
      {/*  */}
      <div className="flex flex-col gap-2">
        {profile && profile.favorites.length ? (
          profile.favorites.map((favorites: IFavorite) => (
            <LikedPlaylist key={favorites.playlist.id} playlist={favorites.playlist as IPlaylist} />
          ))
        ) : (
          <div className="bg-[#242424] w-full h-36 rounded-xl px-5 py-3 text-white">
            <p className="py-1 font-semibold">Создай свой первый плейлист</p>
            <p className="py-1 text-sm">Это совсем не сложно! Мы поможем.</p>
            <button
              onClick={createButton}
              className="py-1.5 px-3 mt-4 rounded-3xl text-sm text-center font-semibold bg-white text-black hover:scale-105 duration-200"
            >
              Создать плейлист
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarMain
