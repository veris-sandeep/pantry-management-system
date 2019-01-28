import React from 'react'
import classes from './Sidebar.module.css'
import logo from '../../assets/images/logo.gif'
import SidebarLink from '../UI/SidebarLink/SidebarLink'
import HomeIcon from '../../assets/images/home-icon.png'
import OrderIcon from '../../assets/images/order-icon.png'
import PendingOrderIcon from '../../assets/images/pending-orders-icon.png'
import {NavLink,withRouter} from 'react-router-dom'

const sidebar=(props)=>{
    return(
        <div className={classes.Sidebar} style={{left: props.show ?'0px': '-300px'}}>
            <div className={classes.LogoContainer}>
                <div className={classes.Logo}>
                    <img src={logo} alt="Pantry"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
            </div>
            <ul>
                <NavLink to='/home' exact activeClassName={classes.active}><SidebarLink icon={HomeIcon}>Home</SidebarLink></NavLink>
                <NavLink to='/order' exact activeClassName={classes.active}><SidebarLink icon={OrderIcon}>Order</SidebarLink></NavLink>
                <NavLink to='/' exact activeClassName={classes.active}><SidebarLink icon={PendingOrderIcon}>Pending Orders</SidebarLink></NavLink>
            </ul>
        </div>
    )
}

export default withRouter(sidebar);