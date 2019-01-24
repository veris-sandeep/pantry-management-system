import React from 'react';
import Aux from '../../hoc/Wrap/Wrap'
import Modal from '../UI/Modal/Modal'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './MorningBeverage.module.css';
import MorningBeverage from '../../assets/images/morning-beverage.png'
import Button from '../UI/Button/Button'

const morningBeverage=(props)=>{
    return(
        <Aux>
            <Backdrop show={props.show} hide={props.hide}/>
            <Modal show={props.show} hide={props.hide}>
                <div className={classes.MorningBeverage}>
                    <h3>Morning Beverage</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,</p>
                        <div className={classes.Icon}>
                            <img src={MorningBeverage} alt="Morning Beverage"/>   
                        </div>
                        <select>
                            <option disabled selected>Select</option>
                            <option>Tea</option>
                            <option>Coffee</option>
                        </select>
                        <div style={{width:'80%', margin:'auto'}}>
                            <Button class="btn-primary">Set Preference</Button>
                        </div>
                </div>
            </Modal>
        </Aux>
    )
}

export default morningBeverage;