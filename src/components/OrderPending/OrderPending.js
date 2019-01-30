import React,{Component} from 'react';
import Layout from '../../containers/Layout/Layout'
import Order from '../Order/Order'
import classes from './OrderPending.module.css';
import Spinner from '../UI/Spinner/Spinner'
import axios from 'axios';

class OrderPending extends Component{
    state={
        orders:[],
        spinner:true
    }
    componentDidMount(){
        axios.get("https://uksxx8ggx7.execute-api.us-east-1.amazonaws.com/pending?user_id="+this.props.user_id)
        .then(res=>{
            this.setState({
                orders: res.data,
                spinner: false
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <Layout>
                <div className={classes.OrderPending}>
                    {this.state.orders.map(order=>{
                        return <Order data={order}/>
                    })}
                </div>
                {this.state.spinner?<Spinner margin="10% auto"/>:null}
            </Layout>
        )
    }
}
export default OrderPending;