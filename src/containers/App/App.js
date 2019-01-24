import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import Homepage from '../../containers/Homepage/Homepage'
import {Route, Redirect,Switch} from 'react-router-dom'
import OrderPage from '../OrderPage/OrderPage'
class App extends Component {
  state={
    authenticated:true
  }
  loginHandler=(props)=>{
    this.setState({
      authenticated:true
    })
    props.history.replace("/home")
  }
  render() {
    return (
        <Switch>
           <Route path="/" exact render={()=><LandingPage login={this.loginHandler} />}/>
           {this.state.authenticated ? <Route path="/home" component={Homepage} /> : <Redirect to="/"/>}    
           {this.state.authenticated ? <Route path="/order" component={OrderPage} /> : <Redirect to="/"/>}    
        </Switch>
    );
  }
}

export default App;
