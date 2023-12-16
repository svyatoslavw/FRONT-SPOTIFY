import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPlayerState } from './player.types'

const initialState: IPlayerState = {
  ids: [],
  activeId: undefined,
  volume: 0,
  isPlaying: false,
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
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    reset: (state) => {
      state.ids = []
      state.activeId = undefined
    },
  },
})
