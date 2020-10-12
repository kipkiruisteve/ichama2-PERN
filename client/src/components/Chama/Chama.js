import React from 'react'
import { connect } from  'react-redux'
import { loadChama,loadOffChama,addMember } from '../../actions/chama'
import AddMember from './AddMember'
class Chama extends React.Component {

    componentDidMount(){
        if (this.props.user.isOfficial){
            console.log('official')
            this.props.loadOffChama(this.props.id)
        } else {
            console.log('Not official')
            this.props.loadOffChama(this.props.id)
        }
    }
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
    }
    onSubmitLoan = e => {
        e.preventDefault()
        const {loan,repayment } = this.state
        const newLoan = {
            loan,repayment
        }
        console.log(newLoan)
        // this.props.addMember(newLoan)
    }
    render(){
        const  { chama,user } = this.props
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
                        <h1>Add Member</h1>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Phone Number </label>
                            <input type="text" name="phoneNumber" value={phoneNumber} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <button className="primary-btn">Add new Member</button>
                    </form>
                    <h1> Members</h1>
                    { chama&& chama.Users.map(user => (
                        <div>
                            <h1>Phone Number:{user.phoneNumber}</h1>
                        </div>
                    ))}
                    </div>
                    
                    
                    </div>
                </div>
        )
        const memberSite = (
            <div className="container">
                <div className="gridc">
                    <div>
                    <h1>{chama && chama.name}</h1>
                    <p>{chama && chama.location}</p>
                    <p>{chama && chama.monthlyContribution}</p>
                    </div>
                    <div>
                        <h1>Omba Mkopo</h1>
                    <form onSubmit={this.onSubmitLoan}>
                        <div>
                            <label>Loan Amount</label>
                            <input type="number" name="loan" value={loan} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <div>
                            <label>Repayment Date</label>
                            <input type="date" name="repayment" value={repayment} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <button className="primary-btn">Omba Mkopo</button>
                    </form>
                    </div>
                </div>
                    
                </div>
        )
        
        return (
            <section id="chama">
                { user && user.isOfficial ? officialSite : memberSite}
            </section>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
    id:ownProps.match.params.id,
    user:state.auth.user,
    chama:state.chama.chama
})
export default connect(mapStateToProps,{ loadChama,loadOffChama,addMember })(Chama)