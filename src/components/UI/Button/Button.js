import React from 'react'
import classes from './Button.module.css'

const button =(props)=>{
    const appliedClasses = ['btn',props.class]
    return(
        <div className={classes.Button}>
            <button type={props.type} onClick={props.clicked} disabled={props.disabled} className={appliedClasses.join(' ')}>{props.children}</button>
        </div>
    )
}

export default button