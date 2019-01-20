import { combineReducers } from 'redux'
import sidebar from './sidebar'
import account from './account'

export default combineReducers({
  sidebar,
  account,
})