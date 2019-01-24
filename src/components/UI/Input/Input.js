import React from 'react'
import classes from './Input.module.css';

const input = (props) =>{
    return(
        <div className={classes.Input}>
            <input 
                style={{
                    border: props.error.status?'1px solid salmon':''
                }} onChange={(event)=>props.validityHandler(props.id,event)} type={props.type} placeholder={props.children} />
            {props.error.status ? <p className={classes.Error}><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {props.error.error}</p> :null}
        </div>
    )
}

export default input;