import { TypeSearchDataFilters } from '@/services/search/search,types'

export type TypeParamPlaylistSlug = {
  slug?: string
}

export interface IPagePlaylistSlug {
  params: TypeParamPlaylistSlug
  searchParams: TypeSearchDataFilters
}
