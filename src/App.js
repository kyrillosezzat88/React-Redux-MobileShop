import React, {Component} from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Details from './Components/Details'
class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route path='/Cart'  component={Cart} />
            <Route  path='/:pro_id' component={Details}/>
            <Route path="/Cart/:pro__id" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
     
    )
  }
 
}

export default App;
