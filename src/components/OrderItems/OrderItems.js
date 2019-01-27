import React from 'react';
import OrderItem from '../../components/OrderItems/OrderItem/OrderItem'

const orderItems = (props)=>{
    return(
        props.orderItems.map(item=>{
            return (<OrderItem remove={()=>props.remove(item.id)}>{item.name}</OrderItem>)
        })
    )
}

export default orderItems;