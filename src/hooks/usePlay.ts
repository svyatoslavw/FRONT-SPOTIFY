import { ITrack } from '@/types/track.types'
import { useRouter } from 'next/navigation'
import { useActions } from './useActions'
import { useProfile } from './useProfile'

const usePlay = (tracks: ITrack[]) => {
  const { push } = useRouter()
  const { profile } = useProfile()
  const { setId, setIds } = useActions()

  const onPlay = (id: number) => {
    if (!profile) {
      push('/auth/login')
    }

    setId(id)
    setIds(tracks.map((track) => track.id))
  }

  return onPlay
}

export default usePlay
