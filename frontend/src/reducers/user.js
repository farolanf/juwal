import { handleActions } from 'redux-actions'

import {
  fetchUserRequested,
  fetchUserSuccess,
  fetchUserError
} from '$act/user'

const initialState = {
  completed: true,
  user: null,
  error: null
}

export default handleActions(
  {
    [fetchUserRequested]: state => ({
      ...state,
      completed: false,
      user: null,
      error: null
    }),
    [fetchUserSuccess]: (state, { payload: { user }}) => ({
      ...state,
      completed: true,
      user,
      error: null
    }),
    [fetchUserError]: (state, { payload: { error }}) => ({
      ...state,
      completed: true,
      user: null,
      error
    }),
  },
  initialState
)