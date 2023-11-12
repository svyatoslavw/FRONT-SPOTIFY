import { createSlice } from '@reduxjs/toolkit'
import { IPlayerState } from './player.types'

const initialState: IPlayerState = {
  ids: [],
  activeId: undefined,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.activeId = action.payload
    },
    setIds: (state, action) => {
      state.ids = action.payload
    },
    reset: (state) => {
      state.ids = []
      state.activeId = undefined
    },
  },
})
