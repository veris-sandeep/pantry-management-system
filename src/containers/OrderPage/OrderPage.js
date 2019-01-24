import React,{Component} from 'react'
import Layout from '../Layout/Layout'
import Items from '../../components/Items/Items'
import classes from './OrderPage.module.css';
import OrderSummary from '../../components/OrderSummary/OrderSummary'

class OrderPage extends Component{
    state={
        inventory:[{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'},{id:1,name:'Sandwich'},{id:2,name:'Peanuts'}]
    }
    render(){
        return(
            <Layout>
                <div className={classes.OrderPage}>
                    <div className={classes.Items}>
                        <h3>Inventory</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className={classes.Container}>
                            <Items items={this.state.inventory} />
                        </div>
                        
                    </div>
                    <div className={classes.Blank}> 
                        
                    </div>
                </div>
                <OrderSummary />
            </Layout>
        )
    }
}

export default OrderPage;