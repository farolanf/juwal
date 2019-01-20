import { handleActions } from 'redux-actions'

import {
  fetchUserRequested,
  fetchUserSuccess,
  fetchUserError
} from '$act/user'

const initialState = {
  completed: true,
  loggedIn: false,
  user: null,
  error: null,
}

export default handleActions(
  {
    [fetchUserRequested]: state => ({
      ...state,
      completed: false,
      loggedIn: false,
      user: null,
      error: null,
    }),
    [fetchUserSuccess]: (state, { payload: { user }}) => ({
      ...state,
      completed: true,
      loggedIn: true,
      user,
      error: null
    }),
    [fetchUserError]: (state, { payload }) => ({
      ...state,
      completed: true,
      loggedIn: false,
      user: null,
      error: payload
    }),
  },
  initialState
)