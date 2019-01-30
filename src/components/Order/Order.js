import React from 'react'
import classes from './Order.module.css'
import pending from '../../assets/images/pending.png'

const order=(props)=>{
    return(
        <div className={classes.Order}>
            <div className={classes.Icon}>
                <img src={pending} alt="Pending"/>
            </div>
           
            <h6>Order No. : <strong>#{props.data.order_id}</strong></h6>
            {props.data.items.map(item=>{
                return <p>{item.order_qty} {item.item_name}</p>
            })}
        </div>
    )
}
export default order;