import {  LOGIN_FAIL,LOGIN_SUCCESS} from '../actions/types'

const initialState = {
    user:null,
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false

}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN_SUCCESS:
            console.log(action.payload)
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                isAuthenticated:true,
                isLoading:false
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated:null,
                isLoading: false,
                user:null,
                token:null
            }
        default:
        return state
    }
    
}