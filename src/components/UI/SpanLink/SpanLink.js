import React from 'react'
import classes from './SpanLink.module.css'

const spanLink=(props)=>{
    return(
        <span onClick={props.clicked} className={classes.SpanLink}>{props.children}</span>
    )
}

export default spanLink