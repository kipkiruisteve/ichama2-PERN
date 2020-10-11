import { ADD_CHAMA_FAIL,ADD_CHAMA_SUCCESS} from './types'
import axios from 'axios'

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