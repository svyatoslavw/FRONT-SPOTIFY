import { Mutation } from '@/__generated__/ggl/graphql'
import { client } from '@/api/apollo.interceptor'
import { CREATE_PLAYLIST } from '@/api/graphql/mutations/CreatePlaylist'
import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import { useProfile } from '@/hooks/useProfile'
import { useMutation } from '@apollo/client'
import { useQueryClient } from '@tanstack/react-query'
import { ListMusic } from 'lucide-react'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { AiOutlinePlus } from 'react-icons/ai'
import NavLink from '../NavLink'
import LikedPlaylist from './LikedPlaylist'

const NavbarMain: FC = () => {
  const queryClient = useQueryClient()
  const { profile, refetchProfile } = useProfile()

  // const { mutate } = useMutation({
  //   mutationKey: ['create playlist'],
  //   mutationFn: () => PlaylistService.create(profile?.id),
  //   onSuccess(data) {
  //     queryClient.refetchQueries({ queryKey: ['profile'] })
  //   },
  // })

  const [createPlaylist] = useMutation<Mutation>(CREATE_PLAYLIST, {
    onCompleted: async (data) => {
      await client.refetchQueries({
        include: [GET_PROFILE],
      })
    },
  })

  const createButton = () => {
    try {
      createPlaylist({
        variables: {
          id: profile?.id,
        },
      })
      toast.success('Playlist created!')
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  return (
    <div className="h-full overflow-scroll w-full bg-primary rounded-xl px-2 mt-2">
      <div className="flex justify-between items-center px-5">
        <NavLink icon={ListMusic} href="/library" text="Моя медиатека" />
        <AiOutlinePlus
          className="hover:rotate-45 hover:text-red-600 duration-200"
          size={25}
          onClick={createButton}
          color="gray"
        />
      </div>
      {/*  */}
      <div className="flex flex-col gap-2">
        {profile && profile.favorites && profile.favorites.length ? (
          profile.favorites.map((favorites: any) => (
            <LikedPlaylist key={favorites.playlist.id} playlist={favorites.playlist as any} />
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
