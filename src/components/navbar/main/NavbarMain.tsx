import { client } from '@/api/apollo.config'
import { CREATE_PLAYLIST } from '@/api/graphql/mutations/CreatePlaylist'
import { GET_PROFILE } from '@/api/graphql/queries/GetProfile'
import { useProfile } from '@/hooks/useProfile'
import { useMutation } from '@apollo/client'
import { ListMusic, Plus } from 'lucide-react'
import { FC } from 'react'
import toast from 'react-hot-toast'
import NavLink from '../header/NavLink'
import CreatePlaylist from './CreatePlaylist'
import LikedPlaylist from './LikedPlaylist'
import LikedTracks from './LikedTracks'

const NavbarMain: FC = () => {
  const { profile } = useProfile()

  const [createPlaylist] = useMutation(CREATE_PLAYLIST, {
    onCompleted: async (data) => {
      if (profile)
        await client.refetchQueries({
          include: [GET_PROFILE],
        })
    },
    fetchPolicy: 'no-cache',
  })

  const createButton = () => {
    try {
      if (profile && profile.id) {
        createPlaylist({
          variables: {
            id: profile.id,
          },
        })
        toast.success('Playlist created!')
      } else {
        toast.error('Not authorized!')
      }
    } catch (error) {
      toast.error('Something happened. Please try again!')
    }
  }
  return (
    <div className="h-full overflow-y-auto w-full bg-primary rounded-xl px-2 mt-2">
      <div className="flex justify-between items-center px-5">
        <NavLink icon={ListMusic} href="/library" text="My Library" />
        <Plus
          className="hover:rotate-90 hover:text-red-600 duration-200 cursor-pointer"
          size={22}
          onClick={createButton}
          color="gray"
        />
      </div>
      <div className="flex flex-col gap-2">
        <LikedTracks />
        {profile && profile.favorites && profile.favorites.length ? (
          profile.favorites.map((favorites: any) => (
            <LikedPlaylist key={favorites.playlist.id} playlist={favorites.playlist as any} />
          ))
        ) : (
          <CreatePlaylist createButton={createButton} />
        )}
      </div>
    </div>
  )
}

export default NavbarMain
