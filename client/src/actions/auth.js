import axios from 'axios'
import { LOGIN_SUCCESS , LOGIN_FAIL,LOGOUT_SUCCESS, PIN_RESET , USER_LOADED} from './types'
export const loginUser = (username,password) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const  body = JSON.stringify({username,password})
    axios.post('/auth/',body,config)
         .then(res => {
             dispatch({
                 type:LOGIN_SUCCESS,
                 payload:res.data
             })
         })
         .catch(err => console.log(err))
}
export  const pinReset = ({username,password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({username,password})
    axios.post('/auth/reset',body,config)
        .then(res => {
            dispatch({
                type:PIN_RESET,
                payload:res.data
            })
        })
        .catch (err => console.log(err))
}
export const tokenConfig = getState => {
    //GET token
    const token = getState().auth.token;
    console.log(token)
    //Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    console.log(config)
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}
export const loadUser = () => (dispatch,getState) => {
    axios.get('/auth/user/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:USER_LOADED,
                 payload:res.data
             })
         })
         .catch(err => console.log(err))
}

export const logOut = () => (dispatch,getState) => {
    axios.get('/auth/user/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:LOGOUT_SUCCESS
             })
         })
         .catch(err => console.log(err))
}
