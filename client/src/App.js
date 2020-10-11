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
class App extends React.Component{
  render(){
    return(
        <Provider store={store}>
        <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={AddChama} />
        </Switch>
        <Footer />
        </Router>
        </Provider>
    )
  }
}

export default App;
