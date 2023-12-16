import { ITrack } from './track.types'
import { IUser } from './user.types'

export interface IAlbum {
  id: number
  createdAt: string
  releaseDate: Date
  name: string
  image: string
  artistId: number
  artist: IUser
  tracks: ITrack[]
}
