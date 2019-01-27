import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import Homepage from '../../containers/Homepage/Homepage'
import {Route, Redirect,Switch} from 'react-router-dom'
import OrderPage from '../OrderPage/OrderPage'
import axios from 'axios'
class App extends Component {
  state={
    authenticated:false,
    loginError: false
  }
  loginHandler=(event,props,fields)=>{
    event.preventDefault()
    const data={
      email: fields.email.value,
      password: fields.password.value
    }
    axios.post("https://awkn0po82h.execute-api.us-east-1.amazonaws.com/authenticate",data)
    .then(res=>{
      console.log(res)
      this.setState({ authenticated:true, loginError:false},()=>{
        props.history.replace("/home")
      })  
    })
    .catch(err=>{
      this.setState({loginError: err.response.data})
    })
  }
  render() {
    return (
        <Switch>
           <Route path="/" exact render={()=><LandingPage loginError={this.state.loginError} login={this.loginHandler} />}/>
           {this.state.authenticated ? <Route path="/home" component={Homepage} /> : <Redirect to="/"/>}    
           {this.state.authenticated ? <Route path="/order" component={OrderPage} /> : <Redirect to="/"/>}    
        </Switch>
    );
  }
}

export default App;
