import { combineReducers } from 'redux'
import auth from './auth'
import chama from './chama'
import loan from './loan'
export default combineReducers({
    auth,
    chama,
    loan
})