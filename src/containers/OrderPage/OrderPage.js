import React,{Component} from 'react'
import Layout from '../Layout/Layout'
import Items from '../../components/Items/Items'
import classes from './OrderPage.module.css';
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from 'axios'


class OrderPage extends Component{
    state={
        inventory:[],
        orderItems: [],
        alert: false,
        status: false,
        spinner: true,
        orderSpinner:false
    }
    
    componentDidMount(){
        axios.get("https://2kyff8ynsi.execute-api.us-east-1.amazonaws.com/inventory")
        .then(res=>{
            let inventory = res.data.filter(item=>{
                return item.qty>0
            })
            this.setState({inventory: inventory,spinner:false})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    placeOrder=()=>{
        const data={
            orderItems: this.state.orderItems,
            user_id: this.props.user_id
        }
        this.setState({orderSpinner: true})
        axios.post("https://gthxv5x713.execute-api.us-east-1.amazonaws.com/orders",data)
        .then(res=>{
            axios.get("https://2kyff8ynsi.execute-api.us-east-1.amazonaws.com/inventory")
            .then(res=>{
                let inventory = res.data.filter(item=>{
                    return item.qty>0
                })
                this.setState({
                    inventory:inventory,
                    alert: false,
                    orderItems:[],
                    status: true,
                    orderSpinner: false
                })
            })
            
        })
        .catch(err=>{
            if(err.response.status===400){
                axios.get("https://2kyff8ynsi.execute-api.us-east-1.amazonaws.com/inventory")
                .then(res=>{
                    let inventory = res.data.filter(item=>{
                        return item.qty>0
                    })
                    let orderItems=err.response.data.filter(item=>{
                        return item.qty>0;
                    })
                    this.setState({
                        inventory: inventory,
                        orderItems: orderItems,
                        alert: true,
                        status: false,
                        orderSpinner: false
                    })
                })
                
                

            }
        })
    }
    addItemHandler=(id)=>{
        let updatedState = {...this.state}
        let orderItem
        let itemIndex=null;
        updatedState.orderItems.forEach((item,i)=>{
            if(item.item_id===id){
                itemIndex=i;
            }
        })
        if(itemIndex!==null){
            updatedState.orderItems[itemIndex].qty= ++updatedState.orderItems[itemIndex].qty
        }
        else{
            for(let i in updatedState.inventory){
                if(updatedState.inventory[i].item_id===id){
                    orderItem=updatedState.inventory[i]
                }
            }
            orderItem['qty']=1;
            updatedState.orderItems.push(orderItem);
        }
        
        this.setState({orderItems: updatedState.orderItems,alert:false,status:false})
    }
    removeItemHandler=(id)=>{
        let updatedState = {...this.state}
        const orderItems = updatedState.orderItems.filter(item=>{
            return item.item_id!==id
        })
        updatedState.orderItems=orderItems;
        this.setState({orderItems: updatedState.orderItems,alert:false,status:false})
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
                            {this.state.spinner?<Spinner margin="20% auto"/>:null}
                        </div>
                        </div>
                    <div className={classes.Blank}> 
                        
                    </div>
                </div>
                <OrderSummary spinner={this.state.orderSpinner} status={this.state.status} error={this.state.alert} orderHandler={this.placeOrder} orderItems={this.state.orderItems} remove={this.removeItemHandler}/>
            </Layout>
        )
    }
}

export default OrderPage;