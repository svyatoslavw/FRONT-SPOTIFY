import { IAlbum } from '@/types/album.types'
import { ITrack } from '@/types/track.types'

export type TypeSearchDataFilters = {
  searchTerm?: string
  categoryId?: string
}
export interface ISearchData {
  tracks: ITrack[]
  albums: IAlbum[]
}
export type TypeParamsFilters = {
  searchParams: TypeSearchDataFilters
}
