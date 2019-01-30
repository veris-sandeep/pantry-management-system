import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import Homepage from '../../containers/Homepage/Homepage'
import {Route, Redirect,Switch} from 'react-router-dom'
import OrderPage from '../OrderPage/OrderPage'
import OrderPending from '../../components/OrderPending/OrderPending'
import axios from 'axios'

class App extends Component {
  state={
    authenticated:false,
    loginError: false,
    user_id:'',
    spinner:false
  }
  loginHandler=(event,props,fields)=>{
    event.preventDefault()
    const data={
      email: fields.email.value,
      password: fields.password.value
    }

    this.setState({spinner: true})
    axios.post("https://awkn0po82h.execute-api.us-east-1.amazonaws.com/authenticate",data)
    .then(res=>{
      console.log(res)
      this.setState({ authenticated:true, loginError:false,user_id:res.data.user_id,spinner:false},()=>{
        props.history.replace("/home")
      })  
    })
    .catch(err=>{
      this.setState({loginError: err.response.data,spinner:false})
    })

  }
  render() {
    return (
        <Switch>
           <Route path="/" exact render={()=><LandingPage loginError={this.state.loginError} spinner={this.state.spinner} login={this.loginHandler} />}/>
           {this.state.authenticated ? <Route path="/home" render={()=><Homepage user_id={this.state.user_id}/>} /> : <Redirect to="/"/>}    
          {this.state.authenticated ? <Route path="/order" render={()=><OrderPage user_id={this.state.user_id} />} /> : <Redirect to="/"/>}    
          {this.state.authenticated ? <Route path="/pending_orders" render={()=><OrderPending user_id={this.state.user_id} />} /> : <Redirect to="/"/>}    
        </Switch>
    );
  }
}

export default App;
