import React from 'react'
import classes from './Modal.module.css';

const modal=(props)=>{
    return(
        <div className={classes.Modal} style={{transform: props.show ? 'translateY(0px)' : 'translateY(-200vh)'}}>
            <div onClick={props.hide} className={classes.Close}>x</div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default modal;