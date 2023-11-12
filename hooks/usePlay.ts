import { ITrack } from '@/types/track.types'
import { useRouter } from 'next/navigation'
import { useActions } from './useActions'
import { useAuth } from './useAuth'

const usePlay = (tracks: ITrack[]) => {
  const { push } = useRouter()
  const { user } = useAuth()
  const { setId, setIds } = useActions()

  const onPlay = (id: number) => {
    if (!user) {
      push('auth/login')
    }

    setId(id)
    setIds(tracks.map((track) => track.id))
  }

  return onPlay
}

export default usePlay
