import { instance } from '@/api/api.interceptor'
import { IPlaylist } from '@/types/playlist.types'

const PLAYLISTS = 'playlists'

type TypeData = {
  email: string
  password?: string
  name?: string
  avatarPath?: string
}

export const PlaylistService = {
  async getAll() {
    return instance<IPlaylist[]>({
      url: PLAYLISTS,
      method: 'GET',
    })
  },

  async byId(id: number) {
    return instance<IPlaylist>({
      url: `${PLAYLISTS}/${id}`,
      method: 'GET',
    })
  },
  async bySlug(slug: string) {
    return instance<IPlaylist>({
      url: `${PLAYLISTS}/by-slug/${slug}`,
      method: 'GET',
    })
  },
  async create(userId: number) {
    return instance<IPlaylist>({
      url: PLAYLISTS,
      method: 'POST',
    })
  },
  async delete(userId: number, playlistId: number) {
    return instance<IPlaylist>({
      url: `${PLAYLISTS}/${playlistId}`,
      method: 'DELETE',
    })
  },
}
