import React from 'react'
import Item from './Item/Item'

const items=(props)=>{
    return(
        props.items.map(item=>{
            return (<Item add={()=>props.add(item.item_id)}>{item.item_name}</Item>)
        })
            
    )
}

export default items;