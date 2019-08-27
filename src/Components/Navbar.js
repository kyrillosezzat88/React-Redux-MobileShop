import React from 'react';
import '../styles/Navbar.scss'
import {NavLink} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav>
            <div className="container">
               <div className="row">
                   <div className="col-6">
                        <span>Mobile Shop</span>
                       <NavLink className="links active" to='/'>Products</NavLink>
                   </div>
                   <div className="col-6 text-right">
                       <NavLink className="links" to="/Cart"><i className="fas fa-shopping-cart"></i>MyCarts</NavLink>
                   </div>
               </div>
            </div>
        </nav>
    )
}
export default Navbar;