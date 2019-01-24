import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props)=>{
    return(
        <div onClick={props.hide} className={classes.Backdrop} style={{display: props.show?'block':'none'}}>
        </div>
    )
}

export default backdrop;