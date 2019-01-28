import React from 'react';
import classes from './Spinner.module.css'

const spinner = (props) =>{
    return(
        <div className={classes.Container}>
            <div className={classes.Loader} style={{margin: props.margin}}>Loading...</div>
        </div>
        )
}

export default spinner;