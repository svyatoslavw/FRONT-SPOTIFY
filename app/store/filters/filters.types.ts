import { TypeSearchDataFilters } from '@/services/search/search,types'

export interface IFilterState {
  isFilterUpdated: boolean
  queryParams: TypeSearchDataFilters
}

export interface iFilterActiontsPayload {
  key: keyof TypeSearchDataFilters
  value: string
}
