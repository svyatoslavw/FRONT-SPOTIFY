import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IFilterState, iFilterActiontsPayload } from './filters.types'

const initialState: IFilterState = {
  isFilterUpdated: false,
  queryParams: {
    searchTerm: '',
    //sort: EnumProductSort.NEWEST,
    // page: 1,
    // perPage: 9,
  },
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateQueryParam: (state, action: PayloadAction<iFilterActiontsPayload>) => {
      const { key, value } = action.payload
      if (value === '') {
        delete state.queryParams[key]
        state.isFilterUpdated = false
      } else {
        state.queryParams[key] = value
      }
      state.isFilterUpdated = true
    },
    resetFilterUpdate: (state) => {
      state.isFilterUpdated = false
    },
  },
})
