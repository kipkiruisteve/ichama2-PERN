import React from 'react'
import { connect } from  'react-redux'
import { loadChama,loadOffChama } from '../../actions/chama'
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
    render(){
        const  { chama,user } = this.props
        const officialSite = (
            <div className="container">
                <div className="gridc">
                    <div className="div">
                        <h1>{chama && chama.name}</h1>
                        <p>{chama && chama.location}</p>
                        <p>{chama && chama.monthlyContribution}</p>
                    </div>
                    < AddMember id={chama && chama.id} />
                    
                    </div>
                </div>
        )
        const memberSite = (
            <div className="container">
                    <h1>{chama && chama.name}</h1>
                    <p>{chama && chama.location}</p>
                    <p>{chama && chama.monthlyContribution}</p>
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
export default connect(mapStateToProps,{ loadChama,loadOffChama })(Chama)