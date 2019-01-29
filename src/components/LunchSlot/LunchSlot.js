import React from 'react';
import Aux from '../../hoc/Wrap/Wrap'
import Modal from '../UI/Modal/Modal'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './LunchSlot.module.css';
import LunchSlot from '../../assets/images/lunch-slot.jpg'
import Button from '../UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'

const lunchSlot=(props)=>{
    let slots = props.slots;
    let value = props.value
    let i=0
    let options = slots.map(slot=>{
        return <option disabled={(slot.qty==0 || i===value)?true:false} value={i++}>{slot.time}</option>
    })
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
                        <select value={value!==false?value:null} onChange={value!==false?(event)=>props.update(event):(event)=>props.book(event)}>
                            <option disabled selected>Select Time</option>
                            {options}
                        </select>
                        <div style={{width:'80%', margin:'auto'}}>
                            {/* <Button class="btn-primary">Set Preference</Button> */}
                        </div>
                </div>
                {props.spinner?<Spinner margin="30% auto"/>:null}
            </Modal>
        </Aux>
    )
}

export default lunchSlot;