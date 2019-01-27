import React from 'react'
import classes from './OrderItem.module.css';

const orderItem=(props)=>{
    return (
        <div className={classes.OrderItem}>
            <p>{props.children}</p>
            <p><i onClick={props.remove} className="fa fa-trash" aria-hidden="true"></i></p>
        </div>  
    )
}

export default orderItem;