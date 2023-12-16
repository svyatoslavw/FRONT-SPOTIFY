import { ITrack } from './track.types'
import { IUser } from './user.types'

export interface IPlaylist {
  id: number
  createdAt: string
  name: string
  slug: string
  image: string
  tracks: ITrack[]
  userId: number
  user: IUser
}
export interface IFavorite {
  id: number
  createdAt: string
  playlist: IPlaylist
}
