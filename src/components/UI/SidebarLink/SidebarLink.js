import React from 'react'
import classes from './SidebarLink.module.css';

const sidebarLink = (props) =>{
    return(
        <li className={classes.SidebarLink}>
            <div className={classes.Icon}>
                <img src={props.icon} alt="home"/>
            </div>
            {props.children}
        </li>
    )
}

export default sidebarLink;