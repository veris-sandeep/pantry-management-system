import React from 'react';
import classes from './Header.module.css'
import {Link} from 'react-router-dom'

const header=(props)=>{
    return(
        <div className={classes.Header}>
            <ul className={classes.BurgerIcon}>
                <li onClick={props.burgerIconHandler}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></li>
            </ul>
            <ul>
                <li><Link to="/" exact><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    )
}

export default header;