import React from 'react';
import classes from './OrderSummary.module.css';
import Button from '../UI/Button/Button'

const orderSummary=(props)=>{
    return(
        <div className={classes.OrderSummary}>
            <p>O R D E R  S U M M A R Y</p>
            <div></div>
            <div className={classes.OrderItems}>
                <div className={classes.OrderItem}>
                    <p>Hello</p>
                    <p>: 30</p>
                </div> 
                <div className={classes.OrderItem}>
                    <p>Hello</p>
                    <p>: 30</p>
                </div>     <div className={classes.OrderItem}>
                    <p>Hello</p>
                    <p>: 30</p>
                </div>  <div className={classes.OrderItem}>
                    <p>Hello</p>
                    <p>: 30</p>
                </div>       
            </div>
            <p>Total :400</p>
            <Button class="btn-danger">Place Order</Button>
        </div> 

    )
}

export default orderSummary;