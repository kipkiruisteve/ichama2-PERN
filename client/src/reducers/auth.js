import {  LOGIN_FAIL,LOGIN_SUCCESS, PIN_RESET,USER_LOADED,LOGOUT_SUCCESS} from '../actions/types'

const initialState = {
    user:null,
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false

}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN_SUCCESS:
        case PIN_RESET:
            console.log(action.payload)
            localStorage.setItem('token',action.payload.data.token)
            return{
                ...state,
                ...action.payload.data,
                isAuthenticated:true,
                isLoading:false
            }
            case USER_LOADED:
                return{
                    ...state,
                    isAuthenticated:true,
                    isLoading:false,
                    user:action.payload.data.user
                }
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
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