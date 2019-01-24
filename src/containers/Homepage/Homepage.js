import React,{Component} from 'react';
import Layout from '../Layout/Layout'
import classes from './Homepage.module.css'
import HomeIcon from '../../assets/images/plate-icon.png'
import MorningBeverage from '../../components/MorningBeverage/MorningBeverage'
import EveningBeverage from '../../components/EveningBeverage/EveningBeverage'
import LunchSlot from '../../components/LunchSlot/LunchSlot'
import SpanLink from '../../components/UI/SpanLink/SpanLink'

class Homepage extends Component{
    state={
        showMorningBeverage: false,
        showLunchSlot: false,
        showEveningBeverage: false
    }
    showMorningBeverageHandler=()=>{
        this.setState({showMorningBeverage: true})
    }
    hideMorningBeverageHandler=()=>{
        this.setState({showMorningBeverage: false})
    }
    showEveningBeverageHandler=()=>{
        this.setState({showEveningBeverage: true})
    }
    hideEveningBeverageHandler=()=>{
        this.setState({showEveningBeverage: false})
    }
    showLunchSlotHandler=()=>{
        this.setState({showLunchSlot: true})
    }
    hideLunchSlotHandler=()=>{
        this.setState({showLunchSlot: false})
    }
    render(props){
        return(
            <Layout>
                <div className={classes.Card}>
                    <div className={classes.Icon}><img src={HomeIcon} alt="Home"/></div>
                    <div className={classes.Content}>You will be served <SpanLink clicked={this.showMorningBeverageHandler}>Coffee</SpanLink> in the Morning, Lunch  at <SpanLink clicked={this.showLunchSlotHandler}>1:30</SpanLink> and <SpanLink clicked={this.showEveningBeverageHandler}>Tea</SpanLink>  in the evening</div>
                </div>
                <MorningBeverage show={this.state.showMorningBeverage} hide={this.hideMorningBeverageHandler}/>
                <LunchSlot show={this.state.showLunchSlot} hide={this.hideLunchSlotHandler}/>
                <EveningBeverage show={this.state.showEveningBeverage} hide={this.hideEveningBeverageHandler}/>
             </Layout>
        )
    }
}

export default Homepage;