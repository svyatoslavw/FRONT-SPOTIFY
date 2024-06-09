import { create } from 'zustand'

interface FilterStore {
  isFilterUpdated: boolean
  queryParams: Record<string, string>
  updateQueryParam: (key: string, value: string) => void
  resetFilterUpdate: () => void
}

const useFilterStore = create<FilterStore>((set) => ({
  isFilterUpdated: false,
  queryParams: {
    searchTerm: '',
  },
  updateQueryParam: (key: string, value: string) => {
    set((state) => ({
      queryParams: {
        ...state.queryParams,
        [key]: value,
      },
      isFilterUpdated: true,
    }))
  },
  resetFilterUpdate: () => {
    set({
      isFilterUpdated: false,
      queryParams: {
        searchTerm: '',
      },
    })
  },
}))

export default useFilterStore
