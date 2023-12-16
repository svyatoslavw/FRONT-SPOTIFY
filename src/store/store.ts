import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { filtersSlice } from './filters/filters.slice'
import { playerSlice } from './player/player.slice'
import { userSlice } from './user/user.slice'

const isClient = typeof window !== 'undefined'

const combinedReducers = combineReducers({
  user: userSlice.reducer,
  filters: filtersSlice.reducer,
  player: playerSlice.reducer,
})

let mainReducer = combinedReducers

if (isClient) {
  const { persistReducer } = require('redux-persist')
  const storage = require('redux-persist/lib/storage').default

  const persistConfig = {
    key: 'vgames',
    storage,
  }

  mainReducer = persistReducer(persistConfig, combinedReducers)
}

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>
