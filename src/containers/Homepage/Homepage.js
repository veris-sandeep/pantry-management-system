import React,{Component} from 'react';
import Layout from '../Layout/Layout'
import classes from './Homepage.module.css'
import HomeIcon from '../../assets/images/plate-icon.png'
import MorningBeverage from '../../components/MorningBeverage/MorningBeverage'
import EveningBeverage from '../../components/EveningBeverage/EveningBeverage'
import LunchSlot from '../../components/LunchSlot/LunchSlot'
import SpanLink from '../../components/UI/SpanLink/SpanLink'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from 'axios';

class Homepage extends Component{
    state={
        showMorningBeverage: false,
        showLunchSlot: false,
        showEveningBeverage: false,
        preferenceSet:false,
        morningBeverage:4,
        morningBeverageLabel:"Coffee",
        eveningBeverage:4,
        eveningBeverageLabel:"Coffee",
        eveningSpinner: false,
        morningSpinner: false,
        lunchSpinner:false,
        spinner: true,
        lunchSlots: [
            {time: "1:30 - 2:00", qty:1},
            {time: "2:00 - 2:30", qty:1},
            {time: "2:30 - 3:00", qty:1},
            {time: "3:00 - 3:30", qty:1},
        ],
        slotSelected:false
    }
    componentDidMount(){
        const url="https://h3sp46qcq0.execute-api.us-east-1.amazonaws.com/beverage?user_id="+this.props.user_id
        axios.get(url).then(res=>{
            let morningLabel='';
            switch(res.data[0].morning){
                case(4): {morningLabel="Coffee";break;}
                case(3): {morningLabel="Tea";break;}
                case(7): {morningLabel="Iced Tea";break;}
                case(8): {morningLabel="Green Tea";break;}                      
            }
            let eveningLabel='';
            switch(res.data[0].evening){
                case(4): {eveningLabel="Coffee";break;}
                case(3): {eveningLabel="Tea";break;}
                case(7): {eveningLabel="Iced Tea";break;}
                case(8): {eveningLabel="Green Tea";break;}
                        
            }
            this.setState({
                morningBeverage:res.data[0].morning,
                eveningBeverage:res.data[0].evening,
                morningBeverageLabel: morningLabel,
                eveningBeverageLabel:eveningLabel,   
            })
            axios.get("https://4np5t34b52.execute-api.us-east-1.amazonaws.com/slots?user_id="+this.props.user_id)
            .then(res=>{
                this.setState({
                    lunchSlots: res.data.lunchSlots,
                    slotSelected: res.data.selected,
                    spinner: false
                })
            })
        })
        .catch(err=>{
            if(err.response.status===401){
                this.setState({
                    showMorningBeverage: true,
                    showEveningBeverage: true,
                    preferenceSet:false
                })
            }
        })
    }
    lunchClickHandler=(event)=>{
        this.setState({lunchSpinner: true})
        axios.get("https://4np5t34b52.execute-api.us-east-1.amazonaws.com/slots?user_id="+this.props.user_id)
            .then(res=>{
                this.setState({
                    lunchSlots: res.data.lunchSlots,
                    lunchSpinner: false
                })
            })
    }

    bookLunchSlotHandler=(event)=>{
        const data={
            slot_id: event.target.value,
            user_id: this.props.user_id
        }
        console.log("Book",data)
        this.setState({lunchSpinner:true,slotSelected: event.target.value})
        axios.post("https://4np5t34b52.execute-api.us-east-1.amazonaws.com/slots",data)
        .then(res=>{
            this.setState({
                lunchSpinner: false,
                showLunchSlot:false
            })
         })
         .catch(err=>{
            this.setState({
                lunchSpinner: false,
                showLunchSlot:false
            })
         })
        
    }
    updateLunchSlotHandler=(event)=>{
        const data={
            slot_id: event.target.value,
            user_id: this.props.user_id
        }
        console.log("update",data)
        this.setState({lunchSpinner:true,slotSelected: event.target.value})
        axios.patch("https://4np5t34b52.execute-api.us-east-1.amazonaws.com/slots",data)
        .then(res=>{
            this.setState({
                lunchSpinner: false,
                showLunchSlot:false
            })
         })
         .catch(err=>{
             console.log(err.response)
            this.setState({
                lunchSpinner: false,
                showLunchSlot:false
            })
         })
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
        this.lunchClickHandler()
    }
    hideLunchSlotHandler=()=>{
        this.setState({showLunchSlot: false})
    }
    morningBeverageHandler=(event)=>{
        let label='';
        switch(event.target.value){
            case('4'): {label="Coffee";break;}
            case('3'): {label="Tea";break;}
            case('7'): {label="Iced Tea";break;}
            case('8'): {label="Green Tea";break;}
        }
        this.setState({morningBeverage: event.target.value, morningBeverageLabel:label},()=>{
            const data={
                user_id: this.props.user_id,
                morning: this.state.morningBeverage,
                evening: this.state.eveningBeverage
            }
            this.setState({morningSpinner: true})
            axios.patch("https://h3sp46qcq0.execute-api.us-east-1.amazonaws.com/beverage",data)
            .then(res=>{
                this.setState({morningSpinner: false, showMorningBeverage: false})
            })
            .catch(err=>{
                console.log(err.response)
            })
        })
    }
    eveningBeverageHandler=(event)=>{
        let label='';
        switch(event.target.value){
            case('4'): {label="Coffee";break;}
            case('3'): {label="Tea";break;}
            case('7'): {label="Iced Tea";break;}
            case('8'): {label="Green Tea";break;}
        }
        this.setState({eveningBeverage: event.target.value, eveningBeverageLabel:label},()=>{
            const data={
                user_id: this.props.user_id,
                morning: this.state.morningBeverage,
                evening: this.state.eveningBeverage
            }
            this.setState({eveningSpinner: true})
            axios.patch("https://h3sp46qcq0.execute-api.us-east-1.amazonaws.com/beverage",data)
            .then(res=>{
                console.log(res.data)
                this.setState({eveningSpinner: false,showEveningBeverage:false})
            })
            .catch(err=>{
                console.log(err.response)
            })
        })
    }
    render(props){
        return(
            <Layout>
                <div className={classes.Card}>
                    <div className={classes.Icon}><img src={HomeIcon} alt="Home"/></div>
                    <div className={classes.Content}>You will be served <SpanLink clicked={this.showMorningBeverageHandler}>{this.state.morningBeverageLabel}</SpanLink> in the Morning, Lunch  at <SpanLink clicked={this.showLunchSlotHandler}>{this.state.slotSelected!==false?this.state.lunchSlots[this.state.slotSelected].time:"Select"}</SpanLink> and <SpanLink clicked={this.showEveningBeverageHandler}>{this.state.eveningBeverageLabel}</SpanLink>  in the evening</div>
                    {this.state.spinner?<Spinner margin="15% auto"/>:null}
                </div>
                <LunchSlot spinner={this.state.lunchSpinner} click={this.lunchClickHandler} book={this.bookLunchSlotHandler} update={this.updateLunchSlotHandler} value={this.state.slotSelected} slots={this.state.lunchSlots} show={this.state.showLunchSlot} hide={this.hideLunchSlotHandler}/>
                <EveningBeverage spinner={this.state.eveningSpinner} handler={this.eveningBeverageHandler} value={this.state.eveningBeverage} show={this.state.showEveningBeverage} hide={this.hideEveningBeverageHandler}/>
                <MorningBeverage spinner={this.state.morningSpinner} handler={this.morningBeverageHandler} value={this.state.morningBeverage} show={this.state.showMorningBeverage} hide={this.hideMorningBeverageHandler}/>
             </Layout>
        )
    }
}

export default Homepage;