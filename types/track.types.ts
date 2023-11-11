import { IAlbum } from './album.types'
import { IUser } from './user.types'

export interface ITrack {
  id: number
  createdAt: string
  releaseDate: Date
  name: string
  image: string
  artistId: number
  artist: IUser
  albumId?: number
  album?: IAlbum
}
