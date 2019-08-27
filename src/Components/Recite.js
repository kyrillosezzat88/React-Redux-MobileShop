import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../styles/Recite.scss'
class Recite extends Component{
   
    render(){
        if(this.props.Total < 100){
            var Tax = 1.6;
        } else if(this.props.Total >= 100 ){
            var Tax = 2.6
        } else if(this.props.Total > 110){
            var Tax = 3.6;
        }
      
        return(
            <div className="container Recite text-right ">
                <h3>Sub Total : {this.props.Total}$</h3>
                <h3>Tax : {Tax}$</h3>
                <h3>Total : {this.props.Total + Tax}$</h3>
                <button>Check Out</button>
            </div>
        )
    }
}
const MapDispatchToProps = (state)=>{
    return{
        Total:state.total
    }
}
export default connect(MapDispatchToProps)(Recite)