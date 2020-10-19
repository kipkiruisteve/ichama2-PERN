import React from 'react'
import { connect } from 'react-redux'
import { allLoans } from '../../actions/chama'
class Loans extends React.Component{
    componentDidMount(){
        if(this.props.user.id){
            this.props.allLoans()
        }
    }
    render(){
        return(
            <section>
                <div className="container">
                    <h1>hey there</h1>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    user:state.auth.user,
    all:state.loan.allLoans
})
export default connect(mapStateToProps,{allLoans})(Loans)