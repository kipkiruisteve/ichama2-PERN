import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Dashboard from './components/Chama/Dashboard'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Login from './components/auth/Login'
import AddChama  from './components/Chama/AddChama'
import './styles/main.scss'
import PinReset from './components/auth/PinReset'
import PrivateRoute from './components/common/PrivateRoute'
import { loadUser } from './actions/auth'
import Chama from './components/Chama/Chama'
import Loans from './components/Chama/Loans'
import Help from './components/layout/Help'
import About from './components/layout/About'
class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return(
        <Provider store={store}>
        <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard}/>
          <PrivateRoute  exact path='/chama/:id' component={Chama} />
          <PrivateRoute  exact path='/loans/' component={Loans} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={AddChama} />
          <Route exact path="/reset" component={PinReset} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
        </Router>
        </Provider>
    )
  }
}

export default App;
