import React from 'react'
import { Link, Redirect} from 'react-router-dom'
import  {  connect } from 'react-redux'
import  {  loginUser } from '../../actions/auth'
class Login extends React.Component{
    state = {
        username:'',
        password:''
    }
    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        const {username,password} = this.state
        this.props.loginUser(username,password)
        this.setState({
            username:"",
            password:""
        })
    }
    render(){
        
        const {username,password} = this.state
        if (this.props.isAuthenticated){
            return <Redirect to='/' />
        }
        return(
            <section id="wrapper">
                <div id="left">
                    <div className="logo">
                    <i class="fas fa-wallet fa-7x"></i>
                        <p>Ichama</p>
                    </div>
                    <div id="signin">
                        <form onSubmit={this.onSubmit}>
                        <div>
                        <label>Username</label>
                        <input type="text"  placeholder="Enter a valid username" required value={username} onChange={this.onChange} name="username" className="form-control"  />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" minLength="8" placeholder="Ennter your password here" required value={password} onChange={this.onChange} name="password" className="form-control"  />
                    </div>
                    <button className="primary-btn">Log in </button>
                    <Link to='/reset'>Forgot your password? </Link>
                        </form>
                    </div>
                </div>
                <div id="right">
                    <div id="showcase">
                        <div className="showcase">
                        <h1 className="showcase-text">
                            Chama the Right Way
                        </h1>
                        <Link to="/register" className="secondary-btn">Register</Link>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{loginUser})(Login) 