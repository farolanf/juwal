import axios from 'axios'
import { createAction } from 'redux-actions'

import { clearToken } from '$src/modules/auth'
import { createAsyncAction } from '$src/modules/actions'
import { API_HOST } from '$src/const'

export const fetchUserAsync = createAsyncAction('fetchUser')

export const logout = createAction('LOGOUT')

export const fetchUser = () => dispatch => {
  dispatch(fetchUserAsync.requested())
  return axios
    .get(API_HOST + '/users/me')
    .then(res => {
      dispatch(fetchUserAsync.success({ data: res.data }))
    })
    .catch(err => {
      dispatch(fetchUserAsync.error(err))
    })
}

export const doLogout = () => dispatch => {
  clearToken()
  dispatch(logout())
}