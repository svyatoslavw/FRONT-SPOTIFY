import { instance } from '@/api/api.interceptor'
import { ITrack } from '@/utils/types/track.types'

const TRACKS = 'tracks'

type TypeData = {
  email: string
  password?: string
  name?: string
  avatarPath?: string
}

export const TrackService = {
  async getAll() {
    return instance<ITrack[]>({
      url: TRACKS,
      method: 'GET',
    })
  },

  async byId(id: number) {
    return instance<ITrack>({
      url: `${TRACKS}/${id}`,
      method: 'GET',
    })
  },
  async bySlug(slug: string) {
    return instance<ITrack>({
      url: `${TRACKS}/by-slug/${slug}`,
      method: 'GET',
    })
  },
}
