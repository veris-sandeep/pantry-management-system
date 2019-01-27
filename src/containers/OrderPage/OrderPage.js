import React,{Component} from 'react'
import Layout from '../Layout/Layout'
import Items from '../../components/Items/Items'
import classes from './OrderPage.module.css';
import OrderSummary from '../../components/OrderSummary/OrderSummary'

class OrderPage extends Component{
    state={
        inventory:[{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'}],
        orderItems: []
    }
    addItemHandler=(id)=>{
        let updatedState = {...this.state}
        let orderItem
        for(let i in updatedState.inventory){
            if(updatedState.inventory[i].id===id){
                orderItem=updatedState.inventory[i]
            }
        }
        updatedState.orderItems.push(orderItem);
        this.setState({orderItems: updatedState.orderItems})
    }
    removeItemHandler=(id)=>{
        let updatedState = {...this.state}
        const orderItems = updatedState.orderItems.filter(item=>{
            return item.id!==id
        })
        updatedState.orderItems=orderItems;
        this.setState({orderItems: updatedState.orderItems})
    }
    render(){
        return(
            <Layout>
                <div className={classes.OrderPage}>
                    <div className={classes.Items}>
                        <h3>Inventory</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className={classes.Container}>
                            <Items items={this.state.inventory} add={this.addItemHandler}/>
                        </div>
                        
                    </div>
                    <div className={classes.Blank}> 
                        
                    </div>
                </div>
                <OrderSummary orderItems={this.state.orderItems} remove={this.removeItemHandler}/>
            </Layout>
        )
    }
}

export default OrderPage;