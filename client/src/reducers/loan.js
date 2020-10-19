import { ALL_LOAN,ADD_LOAN,LOAD_LOAN ,APPROVE_LOAN,PAY_LOAN} from '../actions/types'

const intialState = {
    loan:[],
    loans:[],
    allLoans:[]
}
export default function(state=intialState,action){
    switch(action.type){
        case ADD_LOAN:
            return {
                ...state,
                loan:action.payload.data
            }
        case LOAD_LOAN:
            return {
                ...state,
                loans:action.payload.data
            }
            case ALL_LOAN:
                return {
                    ...state,
                    allLoans:action.payload.data
                }
            case APPROVE_LOAN:
            case PAY_LOAN:
                return {
                    ...state
                }
        default:
             return state
    }
}