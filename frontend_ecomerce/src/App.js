import React from 'react';
import './App.css';
import './responsive.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import SingleProduct from './Screens/SingleProduct';
import Login from './Screens/Login'
import Register from './Screens/Register';
import CartScreen from './Screens/CartScreen'
import ShippingScreen from './Screens/ShippingScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import NotFound from './Screens/NoFound'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/products/:id' component={SingleProduct} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/cart/:id' component={CartScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
