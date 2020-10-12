import { ADD_CHAMA_FAIL,ADD_CHAMA_SUCCESS,LOAD_CHAMA} from './types'
import axios from 'axios'
import { tokenConfig } from './auth'

export const addChama = ({chamaName,chamaLocation,off1Name,monthlyContribution,off1phone,off2Name,off2phone}) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({chamaName,chamaLocation,off1Name,monthlyContribution,off1phone,off2Name,off2phone})
    axios.post('/api/',body,config).then(res => {
        dispatch({
            type:ADD_CHAMA_SUCCESS,
            payload:res.data
        })

    })
    .catch (err => console.log(err))
}
export const loadChama = id => (dispatch,getState) => {
    axios.get(`/api/chama/${id}`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_CHAMA,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const loadOffChama = id => (dispatch,getState) => {
    axios.get(`/api/chama/off/${id}`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_CHAMA,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const addMember = ({ id, phoneNumber,username}) => (dispatch,getState) => {
    console.log(id, phoneNumber,username)
    const body = JSON.stringify({id, phoneNumber,username})
    axios.post('/api/add_member/',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_CHAMA,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}