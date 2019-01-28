import React, {Component} from'react'
import classes from './LandingPage.module.css'
import logo from '../../assets/images/logo.gif'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import SpanLink from '../../components/UI/SpanLink/SpanLink'
import Signup from '../../components/Signup/Signup'
import axios from 'axios'
import Alert from '../../components/UI/Alert/Alert'
import Spinner from '../../components/UI/Spinner/Spinner'
import {withRouter} from 'react-router-dom'

class LandingPage extends Component{
    state={
        showSignupModal: false,
        loginFields : {
            email: {
                error:{
                    status:false,
                    error:"None",
                },
                regularExpression:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                value:''
            },
            password: {
                error:{
                    status:false,
                    error:"None",
                },
                regularExpression:/^(?=.{1,})^/,
                value:''
            },
        },
        loginButtonDisabled: true,
        signupFields : {
            email: {
                error:{
                    status:false,
                    error:"None",
                },
                regularExpression:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                value:''
            },
            password: {
                error:{
                    status:false,
                    error:"None",
                },
                regularExpression:/^(?=.{8,})^/,
                value:''
            },
            confirmPassword: {
                error:{
                    status:false,
                    error:"None",
                },
                regularExpression:/^^/,
                value:''
            },
            name: {
                error:{
                    status:false,
                    error:"None",
                },
                regularExpression:/^(?=.{1,})^/,
                value:''
            }
        },
        signupButtonDisabled: true,
        signupError: false,
        spinner:false
    }
    loginValidityHandler=(id, event)=>{
        const value = event.target.value;
        let loginFields = {...this.state.loginFields}
        let loginField = {...loginFields[id]}
        let loginFieldError = {...loginField.error}
        let re = loginField.regularExpression;
        re=new RegExp(re);
        let error;
        let status;
        if(!re.test(value)){
            status=true
            if(id==='email'){
                error="Enter valid Email"
            }
            if(id==='password'){
                error="Password is Required"
            }
        }
        else{
            error=""
            status=false
        }
        loginFieldError.error = error;
        loginFieldError.status = status;
        loginField.error=loginFieldError;
        loginField.value=value;
        loginFields[id]=loginField;
        this.setState({loginFields:loginFields}) 
        this.enableLoginButtonHandler(loginFields)
    }
    enableLoginButtonHandler(state){
        if(state.email.error.error==="" &&
           state.password.error.error===""){
               this.setState({loginButtonDisabled: false})
           }
         else{
            this.setState({loginButtonDisabled: true})
         }  
    }
    signupValidityHandler=(id, event)=>{
        const value = event.target.value;
        let signupFields = {...this.state.signupFields}
        let signupField = {...signupFields[id]}
        let signupFieldError = {...signupField.error}
        let re = signupField.regularExpression;
        re=new RegExp(re);
        let error;
        let status;
        
        // For handling confirm password field

        if(id==="password"){
            signupFields.confirmPassword.regularExpression = "^"+value+"$"
            if(signupFields.confirmPassword.error.error !== "None"){
                if(signupFields.confirmPassword.value !== value){
                    signupFields.confirmPassword.error.error= "Password don't match";
                    signupFields.confirmPassword.error.status= true;
                }
                else{
                    signupFields.confirmPassword.error.error= "";
                    signupFields.confirmPassword.error.status= false;
                }
            }
            
        }

        if(!re.test(value)){
            status=true
            if(id==='email'){
                error="Enter valid Email"
            }
            if(id==='name'){
                error="Name is required"
            }
            if(id==='password'){
                error="Password length should be greater than 7"
            }
            if(id==='confirmPassword'){
                error="Password don't match"
            }
        }
        else{
            error=""
            status=false

        }
        signupFieldError.error = error;
        signupFieldError.status = status;
        signupField.error=signupFieldError;
        signupField.value=value;
        signupFields[id]=signupField;
        this.setState({signupFields:signupFields,signupError:false}) 
        this.enableSignupButtonHandler(signupFields)
    }
    enableSignupButtonHandler(state){
        if(state.email.error.error==="" &&
           state.password.error.error==="" &&
           state.confirmPassword.error.error==="" &&
           state.name.error.error===""){
               this.setState({signupButtonDisabled: false})
           }
         else{
            this.setState({signupButtonDisabled: true})
         }  
    }
    showSignupModalHandler=()=>{
        this.setState({showSignupModal: true})
    }
    hideSignupModalHandler=()=>{
        this.setState({showSignupModal: false})
    }
    signupHandler=(event)=>{
        event.preventDefault()
        const data = {
            email: this.state.signupFields.email.value,
            password: this.state.signupFields.password.value,
            name: this.state.signupFields.name.value
        }
        this.setState({spinner:true})
        axios.post("https://6xiyxvrwqg.execute-api.us-east-1.amazonaws.com/join",data)
        .then(res=>{
            this.setState({signupError: false,spinner:false},()=>{
                this.props.history.replace('/home')
            })
        })
        .catch(err=>{
            let error="Something went wrong"
            console.log(err.response)
            if(err.response.status==409){
                error="User already exists"
            }
            this.setState({signupError: error, spinner:false})
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className={classes.LandingPage}>
                            <div className={classes.Logo}>
                                <img src={logo} alt="Pantry Management System"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            {this.props.loginError!==false?<Alert class="alert-danger">{this.props.loginError}</Alert>:null}
                            <form onSubmit={(event)=>this.props.login(event,this.props,this.state.loginFields)}>
                                <Input id="email" type="email" validityHandler={this.loginValidityHandler} error={this.state.loginFields.email.error}>Enter Email</Input>
                                <Input id="password" type="password" validityHandler={this.loginValidityHandler} error={this.state.loginFields.password.error}>Enter Password</Input>
                                <Button type="submit" disabled={this.state.loginButtonDisabled} class="btn-success">Login</Button>
                            </form>
                            <p style={{marginTop: '10px'}}>Not a member? <SpanLink clicked={this.showSignupModalHandler}>Sign up</SpanLink></p>
                        </div>
                        {this.props.spinner?<Spinner margin="50% auto"/>:null}
                    </div>
                </div>
                <Signup spinner={this.state.spinner} signupError={this.state.signupError} handler={this.signupHandler} disabled={this.state.signupButtonDisabled} validityHandler={this.signupValidityHandler} show={this.state.showSignupModal} errors={this.state.signupFields} hide={this.hideSignupModalHandler}/>
            </div>
        )
    }
}

export default withRouter(LandingPage)