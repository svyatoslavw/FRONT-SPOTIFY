//import { TypeProductDataFilters } from '@/services/product/product.types'
type TypeProductDataFilters = {}
export interface IFilterState {
  isFilterUpdated: boolean
  queryParams: TypeProductDataFilters
}

export interface iFilterActiontsPayload {
  key: keyof TypeProductDataFilters
  value: string
}
