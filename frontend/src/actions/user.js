import { createAction } from 'redux-actions'

export const fetchUserRequested = createAction('FETCH_USER_REQUESTED')
export const fetchUserSuccess = createAction('FETCH_USER_SUCCESS')
export const fetchUserError = createAction('FETCH_USER_ERROR')

export const fetchUser = () => {
  
}