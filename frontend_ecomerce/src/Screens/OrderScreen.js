import React, { useEffect } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch } from 'react-redux'
import { getOrderDetails } from '../app/Actions/OrderActions'
import Header from '../Components/Header'
import Message from '../Components/LoadingError/Error'
import Loading from '../Components/LoadingError'

const OrderScreen = ({}) => {
    window.scrollTo(0, 0)

    const orderId=match.params.id
    const dispatch=useDispatch()
    const orderDetails=useSelector((state)=>state.orderDetails)
    const {order,loading,error}=orderDetails

    useEffect(()=>{
        dispatch(getOrderDetails(orderId))
    },[dispatch,orderId])

    return (
        <>
            <Header />
            <div className="container">
                {
                    loading ? (<Loading/>):error?(<Message variant="alert-danger" >{error}</Message>):
                    (
                        <>
                                        <div className="row order-detail">
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box"><i className="fas fa-user"></i></div>
                            </div>
                            <div className="col-md-8 center">
                                <h5><strong>Customer</strong></h5>
                                <p>kj</p>
                                <p><a href="mailto:irija@gmail.com">irija@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5><strong>Order info</strong></h5>
                                <p>Shipping: Burundi</p>
                                <p>Pay method: PayPal</p>
                                <div className="bg-danger p-1 col-12">
                                    <p className="text-white text-center text-sm-start">Not Paid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5><strong>Deliver to</strong></h5>
                                <p>
                                    Address: Bujumbura, Bujumbura -Mairie, Ntahangwa, Kamenge, 257
                                    79526728
                                </p>
                                <div className="bg-danger p-1 col-12">
                                    <p className="text-white text-center text-sm-start">Not Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        <div className="order-product row">
                            <div className="col-md-3 col-6">
                                <img
                                    src="https://res.cloudinary.com/zpune/image/upload/v1644396419/random/10_kglqts.png"
                                    alt="new product"
                                />
                            </div>
                            <div className="col-md-5 col-6 d-flex align-items-center">
                                <a href="/products/620b912eba52eb3919a7e51c">
                                    <h6>new product</h6>
                                </a>
                            </div>
                            <div
                                className="mt-3 mt-md-0 col-6 col-md-2 d-flex align-items-center flex-column justify-content-center"
                            >
                                <h4>QUANTITY</h4>
                                <h6>1</h6>
                            </div>
                            <div
                                className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column justify-content-center"
                            >
                                <h4>SUBTOTAL</h4>
                                <h6>$30</h6>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order"
                    >
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td><strong>Products</strong></td>
                                    <td>$30.00</td>
                                </tr>
                                <tr>
                                    <td><strong>Shipping</strong></td>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <td><strong>Tax</strong></td>
                                    <td>$4.5</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>$134.5</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    <div className="col-12">
                        <PayPalButton />
                    </div>
                    </div>
                </div>
                        </>
                    )
                }

            </div>

        </>
    )  
}

export default OrderScreen
