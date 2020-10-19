import React from 'react'
import  { Link } from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <p>Ichama Application... Chama as a boss</p>
                <p>  <Link to="/help">Help</Link> || <Link to="/about">About</Link>  </p>
            </footer>
        )
    }
}
export default Footer