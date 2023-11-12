import { IAlbum } from './album.types'
import { IUser } from './user.types'

export interface ITrack {
  id: number
  createdAt: string
  releaseDate: string
  name: string
  file: string
  image: string
  audio: string
  artistId: number
  artist: IUser
  albumId?: number
  album?: IAlbum
}
