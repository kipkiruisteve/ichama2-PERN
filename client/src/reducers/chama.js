import { LOAD_ADMIN,REMOVE_CHAMA,ADD_CHAMA_FAIL,ADD_CHAMA_SUCCESS ,LOAD_CHAMA,LOAD_CHAMA_M,LOAD_LOAN_CHAMA,REMOVE_USER,DECLINE_LOAN} from '../actions/types' 

const initialState = {
    chamas:[],
    chama:null,
    chamaf:null,
    chamal:null,
    admin:[]
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
        case LOAD_CHAMA_M:
            return {
                ...state,
                chamaf:action.payload.data
            }
        case LOAD_LOAN_CHAMA:
            return {
                ...state,
                chamal:action.payload.data
            }
            case LOAD_ADMIN:
                return {
                    ...state,
                    admin:action.payload.data
                }
            case REMOVE_USER:
            case DECLINE_LOAN:
            case REMOVE_CHAMA:
                return {
                    ...state
                }
        default:
            return state
    }

}