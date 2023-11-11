import { ITrack } from './track.types'

export interface IAlbum {
  id: number
  createdAt: string
  releaseDate: Date
  name: string
  image: string
  tracks: ITrack[]
}
