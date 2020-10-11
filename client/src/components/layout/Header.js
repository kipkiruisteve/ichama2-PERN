import React from 'react'
import { Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        const guestLinks = (
            <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>

                </ul>
        )
        return(
            <main>
            <header>
                <div className="container">
                <div classsName='grids'>
{/* 
                    { isAuthenticated ? authLinks : guestLinks}  */}
                    { guestLinks}
                </div>
                </div>   
                 
            </header>
            </main>
        )
    }
}
export default Header