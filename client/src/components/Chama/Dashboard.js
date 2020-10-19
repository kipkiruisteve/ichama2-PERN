import React from 'react'
import { connect  } from 'react-redux'
import { Link } from 'react-router-dom'
class Dashboard extends React.Component{
    render(){
        const  { auth} = this.props
        return(
            <section id="dashboard">
                <div className="container">
                    
                    <div>
                     <table id="customers">
      <thead>
        <tr>
          <th>Chama Name</th>
          <th>Chama expected monthly contribution</th>
          <th>Chama Page</th>

        </tr>
      </thead>
      <tbody>
      {
                    auth.user.Chamas && auth.user.Chamas.map(order_item => (
                        <tr key={ order_item.id }>
                        <td>{ order_item.name}</td>
                        <td>{ order_item.monthlyContribution}</td>
                        <td> 
                            <Link to={`/chama/${order_item.id}`}>Check out the updates</Link>
                        </td>
                        </tr>
                    ))
                }
      </tbody>
    </table>
    </div>
            <div class="card">
                <i class="fas fa-user-tie fa-5x"></i>
            <p>{auth.user && auth.user.username}</p>
            <p>{auth.user && auth.user.phoneNumber}</p>
            </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps)(Dashboard)