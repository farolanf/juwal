import axios from 'axios'
import { createAction } from 'redux-actions'

import { API_HOST } from '$src/const'

export const fetchUserRequested = createAction('FETCH_USER_REQUESTED')
export const fetchUserSuccess = createAction('FETCH_USER_SUCCESS')
export const fetchUserError = createAction('FETCH_USER_ERROR')

export const fetchUser = () => dispatch => {
  dispatch(fetchUserRequested())
  return axios
    .get(API_HOST + '/users/me')
    .then(res => {
      dispatch(fetchUserSuccess({ user: res.data }))
    })
    .catch(err => {
      dispatch(fetchUserError(err))
    })
}