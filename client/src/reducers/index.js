import { combineReducers } from 'redux'
import auth from './auth'
import chama from './chama'
export default combineReducers({
    auth,
    chama
})