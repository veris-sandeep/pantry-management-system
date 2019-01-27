import React from 'react';
import classes from './OrderSummary.module.css';
import Button from '../UI/Button/Button'
import OrderItems from '../OrderItems/OrderItems'
import EmptyCart  from '../../assets/images/empty-cart.jpg'

const orderSummary=(props)=>{
    return(
        <div className={classes.OrderSummary}>
            <p>O R D E R  S U M M A R Y</p>
            <div className={classes.EmptyCart}>
                <img src={EmptyCart}/>
            </div>
            <div className={classes.OrderItems}>
                <OrderItems orderItems={props.orderItems} remove={props.remove}/>
            </div>
            <Button disabled={props.orderItems.length==0} class="btn-danger">Place Order</Button>
        </div> 

    )
}

export default orderSummary;