import { ADD_CHAMA_FAIL,ADD_CHAMA_SUCCESS } from '../actions/types' 

const initialState = {
    chamas:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case ADD_CHAMA_SUCCESS:
            return{
                chamas:[...state.chamas,action.payload]
            }
        default:
            return state
    }

}