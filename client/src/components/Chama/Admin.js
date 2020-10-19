import React from 'react'
import { connect } from 'react-redux'
import { loadAdmin,removeChama } from '../../actions/chama'
class Admin extends React.Component {
    componentDidMount(){
        this.props.loadAdmin()
    }
    render(){
        return (
            <section id="lays">
            <div className="container"></div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    admins:state.chama.admin
})
export default connect(mapStateToProps,{loadAdmin,removeChama}) (Admin)