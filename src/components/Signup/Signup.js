import React from 'react'
import Modal from '../UI/Modal/Modal'
import classes from './Signup.module.css';
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Backdrop from '../UI/Backdrop/Backdrop'
import Aux from '../../hoc/Wrap/Wrap'

const signup = (props) =>{
    return(
        <Aux>
            <Backdrop show={props.show} hide={props.hide}/>
            <Modal show={props.show} hide={props.hide}>
                <div className={classes.Signup}>
                    <h1>Signup</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <form onSubmit={(event)=>(event.preventDefault())}>
                        <Input id="email" type="email" validityHandler={props.validityHandler} error={props.errors.email.error}>Enter Email</Input>
                        <Input id="name" type="text" validityHandler={props.validityHandler} error={props.errors.name.error}>Enter Name</Input>
                        <Input id="password" type="password" validityHandler={props.validityHandler} error={props.errors.password.error}>Enter Password</Input>
                        <Input id="confirmPassword" type="password" validityHandler={props.validityHandler} error={props.errors.confirmPassword.error}>Confirm Password</Input>
                        <Button disabled={props.disabled} class="btn-dark">Signup</Button>
                    </form>
                </div>
            </Modal>
        </Aux>
    )
}

export default signup;