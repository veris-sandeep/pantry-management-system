import React from 'react'
import Item from './Item/Item'

const items=(props)=>{
    return(
        props.items.map(item=>{
            return (<Item add={()=>props.add(item.id)}>{item.name}</Item>)
        })
            
    )
}

export default items;