import React from 'react'
import { connect } from 'react-redux'
import  { addMember } from '../../actions/chama'
class AddMember extends React.Component {
    state = {
        id:this.props.id,
        phoneNumber:'',
        username:''
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const {id, phoneNumber,username } = this.state
        const newUser = {
            id,phoneNumber,username
        }
        console.log(newUser)
        this.props.addMember(newUser)
    }
    render(){
        const { username,phoneNumber } = this.state
        return(
            <section>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Phone Number </label>
                            <input type="text" name="phoneNumber" value={phoneNumber} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <div>
                            <label>Member Username </label>
                            <input type="text" name="username" value={username} className="form-control" onChange={this.onChange} required  />
                        </div>
                        <button className="primary-btn">Add new Member</button>
                    </form>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{addMember})(AddMember)