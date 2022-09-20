import React from 'react'
import Header from '../Components/Header';
import { Link } from 'react-router-dom'

const PlaceOrderScreen = () => {
    window.scrollTo(0, 0);
    const placeOrderHandler = (e) => {
        e.preventDefault();
    }
  return (
      <>
          <Header />
          <div className="container">
              <div className="row  order-detail">
                  <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                      <div className="row ">
                          <div className="col-md-4 center">
                              <div className="alert-success order-box"><i className="fas fa-user"></i></div>
                          </div>
                          <div className="col-md-8 center">
                              <h5><strong>Customer</strong></h5>
                              <p>kj</p>
                              <p>irija@gmail.com</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                      <div className="row">
                          <div className="col-md-4 center">
                              <div className="alert-success order-box"><i className="fas fa-truck-moving"></i></div>
                          </div>
                          <div className="col-md-8 center">
                              <h5><strong>Order info</strong></h5>
                              <p>Shipping: Burundi</p>
                              <p>Pay method: </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                      <div className="row">
                          <div className="col-md-4 center">
                              <div className="alert-success order-box"><i className="fas fa-map-marker-alt"></i></div>
                          </div>
                          <div className="col-md-8 center">
                              <h5><strong>Deliver to</strong></h5>
                              <p>Address: Bujumbura, Bujumbura -Mairie, Ntahangwa, Kamenge, 257 79526728</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row order-products justify-content-between">
                  <div className="col-lg-8">
                      <div className="alert alert-info mt-5">Your cart is empty</div>
                  </div>
                  <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                      <table className="table table-bordered">
                          <tbody>
                              <tr>
                                  <td><strong>Products</strong></td>
                                  <td>$0.00</td>
                              </tr>
                              <tr>
                                  <td><strong>Shipping</strong></td>
                                  <td>$100.00</td>
                              </tr>
                              <tr>
                                  <td><strong>Tax</strong></td>
                                  <td>$0.00</td>
                              </tr>
                              <tr>
                                  <td><strong>Total</strong></td>
                                  <td>$100.00</td>
                              </tr>
                          </tbody>
                      </table>
                      <button type='submit' onClick={placeOrderHandler}>
                          <Link to='/order' classNameName='text-white'>
                              PLACE ORDER
                          </Link>
                      </button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default PlaceOrderScreen