import React from 'react';
import classes from './OrderSummary.module.css';
import Button from '../UI/Button/Button'
import OrderItems from '../OrderItems/OrderItems'
import EmptyCart  from '../../assets/images/empty-cart.jpg'
import Alert from '../../components/UI/Alert/Alert'
import Spinner from '../UI/Spinner/Spinner'
const orderSummary=(props)=>{
    return(
        <div className={classes.OrderSummary}>
            <p>O R D E R  S U M M A R Y</p>
            {props.error?<Alert class="alert-danger">Order Summary Updated</Alert>:null}
            {props.status?<Alert class="alert-success">Order Placed</Alert>:null}

            <div className={classes.EmptyCart}>
                <img src={EmptyCart}/>
            </div>
            <div className={classes.OrderItems}>
                <OrderItems orderItems={props.orderItems} remove={props.remove}/>
            </div>
            <Button clicked={props.orderHandler} disabled={props.orderItems.length==0} class="btn-danger">Place Order</Button>
            {props.spinner?<Spinner margin="10% auto"/>:null}
        </div> 

    )
}

export default orderSummary;