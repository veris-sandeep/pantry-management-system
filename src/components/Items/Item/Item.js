import React from 'react'
import classes from './Item.module.css';

const items=(props)=>{
    return(
        <div className={classes.Item}>
            <div>{props.children}</div>
            <div>
                <button onClick={props.add} className="btn btn-success">Add</button>
            </div>
        </div>
    )
}

export default items;