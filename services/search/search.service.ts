import { axiosClassic } from '@/api/api.interceptor'
import { ISearchData, TypeSearchDataFilters } from './search,types'

const SEARCH = 'search'

export const SearchService = {
  async getAll(queryData = {} as TypeSearchDataFilters) {
    const { data } = await axiosClassic<ISearchData>({
      url: SEARCH,
      method: 'GET',
      params: queryData,
    })
    return data
  },
}
