import React,{Component} from 'react';
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Backdrop from '../../components/UI/Backdrop/Backdrop'

class Layout extends Component{
    state={
        showSidebar: Math.max(document.documentElement.clientWidth)>=1200,
        showBackdrop: false
    }
    showSidebarHandler=()=>{
        this.setState({showSidebar:true, showBackdrop: true})
    }
    hideSidebarHandler=()=>{
        this.setState({showSidebar:false, showBackdrop: false})
    }
    render(){
        return(
            <div style={{backgroundColor: '#f3f3f3', minHeight:"100vh"}}>
                <Header burgerIconHandler={this.showSidebarHandler}/>
                <Backdrop show={this.state.showBackdrop} hide={this.hideSidebarHandler}/>
                <Sidebar show={this.state.showSidebar} />
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
            </div>
        )
    }       
}

export default Layout;