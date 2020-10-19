import React from 'react'
import { Link} from 'react-router-dom'
import {  connect } from 'react-redux'
import { logOut } from '../../actions/auth'
class Header extends React.Component{
    render(){
        const authLinks = (
            <div className="grids">
                {/* <h1>Ichama</h1> */}
                <Link to="/" className="ead"><h1> Ichama</h1> </Link>
            <ul>
                {/* <li>
                    <Link to="/loans/">Past Loans</Link>
                </li> */}
            <a><button onClick= {this.props.logOut} className="primary-btn"><i class="fas fa-sign-out-alt"> Log out</i></button></a>

                </ul>
            </div>
        )
        const guestLinks = (
            <div className="grids">
                <h1>Ichama</h1>
            
            <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>

                </ul>
                </div>
        )
        const { isAuthenticated } = this.props
        return(
            <main>
            <header>
                <div className="container">
                <div classsName='grids'>

                    { isAuthenticated ? authLinks : guestLinks} 
                    {/* { guestLinks} */}
                </div>
                </div>   
                 
            </header>
            </main>
        )
    }
}
const mapStateToProps =  state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{logOut})(Header)