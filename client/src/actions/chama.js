import {LOAD_ADMIN,REMOVE_CHAMA,PAY_LOAN,ALL_LOAN, DECLINE_LOAN,APPROVE_LOAN,ADD_CHAMA_FAIL,ADD_CHAMA_SUCCESS,LOAD_CHAMA,ADD_LOAN,LOAD_LOAN,LOAD_CHAMA_M, LOAD_LOAN_CHAMA,REMOVE_LOAN,REMOVE_USER} from './types'
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
            console.log(res.data)
            dispatch({
                type:LOAD_CHAMA,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const loadChamaD = id => (dispatch,getState) => {
    axios.get(`/api/chama/${id}`,tokenConfig(getState))
        .then(res => {
            console.log(res)
            dispatch({
                type:LOAD_CHAMA_M,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const addMember = ({ id, phoneNumber}) => (dispatch,getState) => {
    console.log(id, phoneNumber)
    const body = JSON.stringify({chamaId:id, phoneNumber})
    axios.post('/api/add_member/',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_CHAMA,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const addLoan = ({ chamaId,loan,repayment}) => (dispatch,getState) => {
    console.log(chamaId,loan,repayment)
    const body = JSON.stringify({chamaId,amount:loan,repayment})
    axios.post('/loan/',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:ADD_LOAN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const loadLoan = chamaId => (dispatch,getState) => {
    console.log(chamaId)
    const h = "hg"
    const body = JSON.stringify({chamaId,h})
    axios.get(`/loan/${chamaId}`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_LOAN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const chamaLoan = chamaId => (dispatch,getState) => {
    console.log(chamaId)
    const body = JSON.stringify({chamaId})
    axios.get(`loan/chama/loans/${chamaId}`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_LOAN_CHAMA,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}

export const approveLoans = (chamaId,loanId) => (dispatch,getState) => {
    console.log(loanId)
    const body = JSON.stringify({chamaId,loanId})
    axios.post('loan/loans/approve',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:APPROVE_LOAN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
// export const payLoanS = loanId => (dispatch,getState) => {
//     console.log(loanId)
//     const body = JSON.stringify({loanId})
//     axios.post('loan/pay',body,tokenConfig(getState))
//         .then(res => {
//             dispatch({
//                 type:PAY_LOAN,
//                 payload:res.data
//             })
//         })
//         .catch(err => console.log(err))
// }
// export const decLoans = (chamaId,loanId) => (dispatch,getState) => {
//     console.log(loanId)
//     const body = JSON.stringify({chamaId,loanId})
//     axios.post('loan/loans/decline',body,tokenConfig(getState))
//         .then(res => {
//             dispatch({
//                 type:DECLINE_LOAN,
//                 payload:res.data
//             })
//         })
//         .catch(err => console.log(err))
// }
// export const allLoans = (chamaId,loanId) => (dispatch,getState) => {
//     console.log(loanId)
//     const body = JSON.stringify({chamaId,loanId})
//     axios.get('loan/loans/',tokenConfig(getState))
//         .then(res => {
//             dispatch({
//                 type:ALL_LOAN,
//                 payload:res.data
//             })
//         })
//         .catch(err => console.log(err))
// }
export const removeUserF = (userId,chamaId) => (dispatch,getState) => {
    // console.log(loanId)
    const body = JSON.stringify({userId,chamaId})
    axios.post('api/remove',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:REMOVE_LOAN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const loadAdmin = () => (dispatch,getState) => {
    axios.get('/api/admin',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_ADMIN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}

export const payLoanS = loanId => (dispatch,getState) => {
    console.log(loanId)
    const body = JSON.stringify({loanId})
    axios.post('loan/pay',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:PAY_LOAN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const decLoans = (chamaId,loanId) => (dispatch,getState) => {
    console.log(loanId)
    const body = JSON.stringify({chamaId,loanId})
    axios.post('loan/loans/decline',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:DECLINE_LOAN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const allLoans = (chamaId,loanId) => (dispatch,getState) => {
    console.log(loanId)
    const body = JSON.stringify({chamaId,loanId})
    axios.get('loan/loans/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:ALL_LOAN,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const removeChama = chamaId => (dispatch,getState) => {
    // console.log(loanId)
    const body = JSON.stringify({chamaId})
    axios.post('api/admin/del',body,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:REMOVE_CHAMA,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}