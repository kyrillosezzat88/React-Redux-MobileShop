import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/Cart.scss'
import $ from 'jquery'
import Reciet from './Recite'
class Cart extends Component{
    
     handeleAddQuantity = (id)=>{
        this.props.AddQuantity(id);
       }
       handeleRemoveQuantity = (id)=>{
        this.props.RemoveQuantity(id)
        }
        handelDelteProduct = (id)=>{
            this.props.DelteProduct(id)
        }
    render(){
        let product = this.props.additems.map(pro => {
          
           
            return(
                    
                    <div className="row item" key={pro.id}>
                    
                        <div className="col-2 d-flex align-items-center">
                            <img src={pro.img} width="40%" />
                        </div>
                        <div className="col-2 d-flex align-items-center">
                            {pro.name}
                        </div>
                        <div className="col-2 d-flex align-items-center">
                           {pro.price}$
                        </div>
                        <div className="col-2 d-flex align-items-center">
                           <Link to="/Cart"><button id="decreement" onClick={()=>{this.handeleRemoveQuantity(pro.id)}}>-</button></Link> 
                            <span id="quanti">{pro.quantity}</span>
                            <Link to="/Cart"><button id="increement" onClick={()=>{this.handeleAddQuantity(pro.id)}}>+</button></Link>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-center">
                            <i className="fas fa-trash" onClick={()=>{this.handelDelteProduct(pro.id)}}></i>
                        </div>
                       
                        <div className="col-2 d-flex align-items-center">
                            Total is : {pro.price * pro.quantity}$
                        </div>
                    </div>
            )
        })
      
        return(
            
            product.length?(
                <div className="container Product">
                <div className="row titles">
                    <div className="col-2">Product</div>
                    <div className="col-2">Name of Product</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Quantity</div>
                    <div className="col-2 d-flex align-items-center justify-content-center">Remove</div>
                    <div className="col-2">Sub Total</div>
                </div>
                   {product}
                   <Reciet />
                </div>
               
            ):(
                <h2 className="meg text-center text-danger font-weight-bold">Your cart is empty</h2>
            )
           
        )
    }
}
const MapStateToProps = (state)=>{
    return{
        additems:state.addproducts
    }
}
const MapDispathcToProps = (dispatch)=>{
    return{
       
        AddQuantity: (id) => {dispatch({type:'ADD_QUANTITY' , id})},
        RemoveQuantity : (id) =>{dispatch({type:'SUB_QUANTITY' , id})},
        DelteProduct :(id) => {dispatch({type:"DELETE_PRODUCT" , id})}
    }
}
export default connect(MapStateToProps , MapDispathcToProps)(Cart)