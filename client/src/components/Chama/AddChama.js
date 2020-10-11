import React from 'react'
import { addChama } from '../../actions/chama'
import  { connect  } from 'react-redux'
class AddChama extends React.Component{
    state = {
        chamaName:"",
        chamaLocation:"",
        off1Name:"",
        monthlyContribution:"",
        off1phone:"",
        off2Name:"",
        off2phone:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { chamaName,chamaLocation,off1Name,monthlyContribution,off1phone,off2Name,off2phone} = this.state
        const newChama = {
            chamaName,chamaLocation,off1Name,monthlyContribution,off1phone,off2Name,off2phone
        }
        console.log(newChama)
        this.props.addChama(newChama)

    }
    render(){
        const { chamaName,chamaLocation,off1Name,monthlyContribution,off1phone,off2Name,off2phone} = this.state
        return (
            <section id="addChama">
                <div className="container">
                <h1>Add Chama</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="grids">
                        <div>
                            <label>Chama Name</label>
                            <input type="text"  placeholder="Enter a valid chama name" required value={chamaName} onChange={this.onChange} name="chamaName" className="form-control"  />
                        </div>
                        <div>
                            <label>Chama Location</label>
                            <input type="text"  placeholder="Enter a valid chama location" required value={chamaLocation} onChange={this.onChange} name="chamaLocation" className="form-control"  />
                        </div>
                    </div>
                    <div className="grids">
                        <div>
                            <label>Official1 Name</label>
                            <input type="text"  placeholder="Enter a valid  name" required value={off1Name} onChange={this.onChange} name="off1Name" className="form-control"  />
                        </div>
                        <div>
                            <label>Official1 Phone</label>
                            <input type="text"  placeholder="Enter a valid phone Number" required value={off1phone} onChange={this.onChange} name="off1phone" className="form-control"  />
                        </div>
                    </div>
                    <div className="grids">
                    <div>
                            <label>Official2 Name</label>
                            <input type="text"  placeholder="Enter a valid  name" required value={off2Name} onChange={this.onChange} name="off2Name" className="form-control"  />
                        </div>
                        <div>
                            <label>Official2 Phone</label>
                            <input type="text"  placeholder="Enter a valid phone Number" required value={off2phone} onChange={this.onChange} name="off2phone" className="form-control"  />
                        </div>
                    </div>
                    <div className="grids">
                    <div>
                            <label>monthly monthlyContribution</label>
                            <input type="number"  placeholder="Enter a valid  name" required value={monthlyContribution} onChange={this.onChange} name="monthlyContribution" className="form-control"  />
                        </div>
                        <button type="submit" className="primary-btn">Add Chama </button>
                    </div>
                </form>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{addChama})(AddChama)