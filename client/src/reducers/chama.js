import { ADD_CHAMA_FAIL,ADD_CHAMA_SUCCESS ,LOAD_CHAMA} from '../actions/types' 

const initialState = {
    chamas:[],
    chama:null
}
export default function(state=initialState,action){
    switch(action.type){
        case ADD_CHAMA_SUCCESS:
            return{
                ...state,
                chamas:[...state.chamas,action.payload]
            }
        case LOAD_CHAMA:
            return {
                ...state,
                chama:action.payload.data
            }
        default:
            return state
    }

}