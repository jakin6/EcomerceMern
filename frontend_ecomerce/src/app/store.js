import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productListReducer } from './Reducers/ProductReducers'
import { cartReducer } from './Reducers/CartReducer'
import { userLoginReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer } from './Reducers/UserReducer'
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer
})
const cartItemsFromLocalStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  :[]

  //login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null
//shippingAddress
  const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {}

  
const initialState = {
  cart: {
    cartItems:cartItemsFromLocalStorage, 
    shippingAddress:shippingAddressFromLocalStorage,
  },
  userLogin: {
    userLogin:{userInfo:userInfoFromLocalStorage}
  }
}
const middleware = [thunk]

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

