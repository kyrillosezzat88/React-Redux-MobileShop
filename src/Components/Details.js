import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import '../styles/details.scss'
class Details extends Component{
  
   handelclick = ()=>{
    this.props.ADD_To_Cart(this.props.Product.id);
      let car =  document.getElementById('cart');
      car.innerHTML = 'Added To Cart'
      car.disabled = true
     car.style.backgroundColor = '#252a34'
   }
    render(){
        return(
            <div className="container">
                    <h1 className="text-center font-weight-bold">{this.props.Product.name}</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={this.props.Product.img} width="100%" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Model: {this.props.Product.name}</h2>
                        <span className="d-block">Made By: {this.props.Product.madeBy}</span>
                        <span>Price: {this.props.Product.price}$</span>
                        <span className="d-block font-weight-bold">Some Info About Product:</span>
                        <p>{this.props.Product.info}</p>
                        <Link to="/"><button>Back To Products</button></Link>
                        <button id="cart" onClick={this.handelclick}>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps =(state , ownpro)=>{
    let id = ownpro.match.params.pro_id;
    return{
        Product:state.Products.find(pro=> pro.id == id)
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        ADD_To_Cart : (id)=> {dispatch({type:'ADD_TO_CART' , id:id})}
    }
}
export default connect(MapStateToProps , MapDispatchToProps)(Details);