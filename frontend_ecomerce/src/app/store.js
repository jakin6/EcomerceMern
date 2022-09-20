import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productListReducer } from './Reducers/ProductReducers'
import { cartReducer } from './Reducers/CartReducer'
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducer'
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})
const cartItemsFromLocalStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  :[]

  //login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

  
const initialState = {
  cart: {
    cartItems:cartItemsFromLocalStorage, 
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

