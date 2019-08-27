import React , {Component}  from 'react';
import '../styles/Products.scss'
import $ from 'jquery'
import Details from './Details'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Products extends Component{
    AddToCart = (id)=>{
        this.props.ADD_To_Cart(id);
        $('.alert').slideDown()
        setTimeout(() => {
            $('.alert').slideUp()
        }, 2000);
    }
    render(){
        const {Products} = this.props;
       const proList = Products.length ? (
            Products.map(pro=>{
                return(
                    <div className="col-6 col-md-3" key={pro.id}>
                     <Link to={'/' + pro.id} className="text-decoration-none">
                     <div className="item" >
                      <img src={pro.img} width="200" />
                      <div className="detils d-flex justify-content-between align-items-center">
                      <span>{pro.name}</span>
                      <span>{pro.price}$</span>
                  </div>
                  </div>
                     </Link>
                     <span className="buy" ><i className="fas fa-plus-circle" onClick={()=>{this.AddToCart(pro.id)}}></i></span>

              </div>
                )
            })
        ):(
            <p>There is no Prduct yet</p>
        )

      return(
        <div className="products">
            <div className="alert alert-success text-center" role="alert">
               This Product Added Success To Cart!!
            </div>
            <h1 className="text-center">Our Products</h1>
            <div className="container">
               <div className="row">
                {proList}
               </div>
            </div>
        </div>
    )
}
}


const MapStateToProps =(state)=>{
    return{
        Products:state.Products
    }
}
const MapDispatchToPtops = (dispatch) =>{
    return{
        ADD_To_Cart: (id) => {dispatch({type:'ADD_TO_CART' , id})},
    }
}
export default connect(MapStateToProps, MapDispatchToPtops)(Products);