import React from 'react'

import { connect } from 'react-redux'
import  { pinReset } from '../../actions/auth'
import { Redirect } from 'react-router-dom'
class PinReset extends React.Component {
    state = {
        username:'',
        password:'',
        password2:''
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { username,password,password2} = this.state
        if (password == password2){
            const pinResets = {
                username,password
            }
            console.log(pinResets)
            this.props.pinReset(pinResets)
        } else {
            alert('Pins Do Not match')
        }
    }
    render(){
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username,password,password2} = this.state
        return (
            <section className="reset">
                <div className="container">
                <h1>Reset your PIN</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Phone Number</label>
                        <input type="text" name="username" className="form-control" onChange={this.onChange} value={username} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text"  name="password" className="form-control" onChange={this.onChange} value={password} />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="text"  name="password2" className="form-control" onChange={this.onChange} value={password2} />
                    </div>
                    <button className="primary-btn">Reset</button>
                </form>

                </div>
            </section>

        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{pinReset})(PinReset)