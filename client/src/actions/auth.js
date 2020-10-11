import axios from 'axios'
import { LOGIN_SUCCESS , LOGIN_FAIL } from './types'
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
// export const loadUser = (username)