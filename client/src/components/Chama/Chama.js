import React from 'react'
import { connect } from  'react-redux'
import moment from 'moment'
import {payLoanS, decLoans,loadChama,loadOffChama,addMember,loadChamaD, addLoan,loadLoan , removeUserF,chamaLoan, approveLoans} from '../../actions/chama'
class Chama extends React.Component {

    componentDidMount(){
        if (this.props.user.isOfficial){
            console.log('official')
            this.props.loadOffChama(this.props.id)
            this.props.chamaLoan(this.props.id)
        } else {
            console.log('Not official')
            this.props.loadChamaD(this.props.id)
            this.props.loadLoan(this.props.id)
        }
        
    }
    // componentDidUpdate(){
    //     if (this.props.user.isOfficial){
    //         console.log('official')
    //         this.props.loadOffChama(this.props.id)
    //         // this.props.loadLoan(this.props.id)
    //     } else {
    //         console.log('Not official')
    //         this.props.loadChamaD(this.props.id)
    //         this.props.loadLoan(this.props.id)
    //     }
    // }
    state = {
        phoneNumber:'',
        username:'',
        loan:'',
        repayment:''
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const {phoneNumber } = this.state
        const id = this.props.chama.id
        const newUser = {
            id,phoneNumber
        }
        console.log(newUser)
        this.props.addMember(newUser)
        this.setState({phoneNumber:''})
    }
    onLoanApproval = loanId => {
        const chamaId = this.props.id
        console.log(loanId)
        this.props.approveLoans(chamaId,loanId)
    }
    onLoanDecline = loanId => {
        const chamaId = this.props.id
        console.log(loanId)
        this.props.decLoans(chamaId,loanId)
    }
    onLoanPay = loanId => {
        const chamaId = this.props.id
        console.log(loanId)
        this.props.payLoanS(loanId)
    }
    onRemoveUserF = userId => {
        const chamaId = this.props.id
        // console.log(loanId)
        this.props.removeUserF(chamaId,userId)   
    }
    onSubmitLoan = e => {
        e.preventDefault()
        const {loan,repayment } = this.state
        const chamaId = this.props.chamaf.id
        const newLoan = {
            chamaId,loan,repayment
        }
        console.log(newLoan)
        this.props.addLoan(newLoan)
        this.setState({loan:'',repayment:''})
    }
    render(){
        const  { chama,user,loans , chamaf, chamal } = this.props
        const { username,phoneNumber , loan, repayment} = this.state
        const officialSite = (
            <div className="container">
                <div className="gridc">
                    <div className="div">
                        <h1>{chama && chama.name}</h1>
                        <p>{chama && chama.location}</p>
                        <p>{chama && chama.monthlyContribution}</p>
                    </div>
                    <div>
                        <h1>Pending loans</h1>

                        <table id="customers">
      <thead>
        <tr>

          <th>UserID</th>
          <th>Loan Amount</th>
          <th>Approve</th>
          <th>Decline</th>
        </tr>
      </thead>
      <tbody>
      {
                     chamal && chamal.map(order_item => (
                        <tr key={ order_item.id }>
                        <td>{ order_item.userId }</td>
                        <td>{ order_item.amount }</td>

                        <td>
                            <button className="primary-btn" onClick={() => this.onLoanApproval(order_item.id)}>Approve</button> 
                             </td>
                        <td>
                            <button className="primary-btn" onClick={() => this.onLoanDecline(order_item.id)}>Decline</button> 
                            </td>
                        </tr>
                    ))
                }
      </tbody>
    </table>

                    </div>
                    <div>
                        <h1>Add Member</h1>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Phone Number </label>
                            <input type="text" name="phoneNumber" value={phoneNumber} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <button className="primary-btn">Add new Member</button>
                    </form>
                    <h1> Members</h1>

                    <table id="customers">
      <thead>
        <tr>
          <th>Phone Number</th>
          <th>Remove</th>
          {/* <th>Disk Size</th> */}
        </tr>
      </thead>
      <tbody>
      {
                    chama && chama.Users.map(order_item => (
                        <tr key={ order_item.id }>
                        <td>{ order_item.phoneNumber }</td>
                        
                        <td>
                            <button className="primary-btn" onClick={() => this.onRemoveUserF(order_item.id)}>x</button> 
                             </td>
                        </tr>
                    ))
                }
      </tbody>
    </table>
                    </div>
                    
                    
                    </div>
                </div>
        )
        const memberSite = (
            <div className="container">
                <div className="gridz">
                    <div>
                    <h1>{chamaf && chamaf.name}</h1>
                    <p>{chamaf && chamaf.location}</p>
                    <p>{chamaf && chamaf.monthlyContribution}</p>
                    </div>
                    <div>
                        <h1>Omba Mkopo</h1>
                    <form onSubmit={this.onSubmitLoan}>
                        <div>
                            <label>KIWANGO CHA HELA</label>
                            <input type="number" name="loan" value={loan} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <div>
                            <label>SIKU UTAKAYO LIPA</label>
                            <input type="date" name="repayment" value={repayment} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <button className="primary-btn">Omba Mkopo</button>
                    </form>
                    <h1>Mkopo zako zinginezo</h1>

                    <table id="customers">
      <thead>
        <tr>
          <th>KIWANGO</th>
          <th>Lipa Kabla ya tarehe</th>
          <th>LIPA MKOPO</th>
        </tr>
      </thead>
      <tbody>
      {
                    loans && loans.map(order_item => (
                        <tr key={ order_item.id }>
                        <td>{ order_item.amount }</td>
                        <td>{ moment(order_item.repaymentDate).format("MMM Do YY") }</td>
                        <td>
                            <button className="primary-btn" onClick={() => this.onLoanPay(order_item.id)}>LIPA MKOPO</button> 
                             </td>
                        </tr>
                    ))
                }
      </tbody>
    </table>
                    </div>
                </div>
                    
                </div>
        )
        
        return (
            <section id="chama">
                {/* { memberSite} */}
                { user && user.isOfficial ? officialSite : memberSite}
            </section>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
    id:ownProps.match.params.id,
    user:state.auth.user,
    chama:state.chama.chama,
    chamaf:state.chama.chamaf,
    chamal:state.chama.chamal,
    loans:state.loan.loans
})
export default connect(mapStateToProps,{ payLoanS,decLoans,loadChama,chamaLoan, removeUserF,loadOffChama,addMember , addLoan, loadChamaD, loadLoan, approveLoans})(Chama)