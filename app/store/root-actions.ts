import { filtersSlice } from './filters/filters.slice'
import { playerSlice } from './player/player.slice'
import * as userActions from './user/user.actions'

export const rootActions = {
  ...userActions,
  ...filtersSlice.actions,
  ...playerSlice.actions,
}
