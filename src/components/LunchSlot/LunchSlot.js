import React from 'react';
import Aux from '../../hoc/Wrap/Wrap'
import Modal from '../UI/Modal/Modal'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './LunchSlot.module.css';
import LunchSlot from '../../assets/images/lunch-slot.jpg'
import Button from '../UI/Button/Button'

const lunchSlot=(props)=>{
    return(
        <Aux>
            <Backdrop show={props.show} hide={props.hide}/>
            <Modal show={props.show} hide={props.hide}>
                <div className={classes.LunchSlot}>
                    <h3>Lunch Slot</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,</p>
                        <div className={classes.Icon}>
                            <img src={LunchSlot} alt="Morning Beverage"/>   
                        </div>
                        <select>
                            <option disabled selected>Select</option>
                            <option>1:30</option>
                            <option>2:30</option>
                        </select>
                        <div style={{width:'80%', margin:'auto'}}>
                            <Button class="btn-primary">Set Preference</Button>
                        </div>
                </div>
            </Modal>
        </Aux>
    )
}

export default lunchSlot;