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
