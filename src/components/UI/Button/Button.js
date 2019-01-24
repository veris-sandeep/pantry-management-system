import React from 'react'
import classes from './Button.module.css'

const button =(props)=>{
    const appliedClasses = ['btn',props.class]
    return(
        <div className={classes.Button}>
            <button onClick={props.clicked} disabled={props.disabled} type="button" className={appliedClasses.join(' ')}>{props.children}</button>
        </div>
    )
}

export default button