import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser } from '@/types/user.types'

const USERS = 'users'

type TypeData = {
  email: string
  password?: string
  name?: string
  avatarPath?: string
}

export const UserService = {
  async getAll() {
    return instance<IFullUser[]>({
      url: USERS,
      method: 'GET',
    })
  },

  async getProfile() {
    return instance<IFullUser>({
      url: `${USERS}/profile`,
      method: 'GET',
    })
  },

  async getBySlug(slug: string) {
    return instance<IFullUser>({
      url: `${USERS}/by-slug/${slug}`,
      method: 'GET',
    })
  },

  async create() {
    return instance<IUser>({
      url: USERS,
      method: 'POST',
    })
  },
  async updateProfile(data: TypeData) {
    return instance<IUser>({
      url: `${USERS}/profile/`,
      method: 'PUT',
      data,
    })
  },
  async toggleFavorite(playlistId: number) {
    return instance<IUser>({
      url: `${USERS}/profile/favorites/${playlistId}`,
      method: 'PATCH',
    })
  },

  async delete(id: string | number) {
    return instance<IFullUser>({
      url: `${USERS}/${id}`,
      method: 'DELETE',
    })
  },
}
