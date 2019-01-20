import { combineReducers } from 'redux'
import sidebar from './sidebar'
import user from './user'

export default combineReducers({
  sidebar,
  user,
})