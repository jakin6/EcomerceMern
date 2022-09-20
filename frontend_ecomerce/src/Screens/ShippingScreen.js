import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const ShippingScreen = () => {
    window.scrollTo(0, 0)
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
      <>
          <Header/>
          <div
              className="container d-flex justify-content-center align-items-center login-center"
          >
              <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                  <h6>DELIVERY ADDRESS</h6>
                  <input
                      type="text" placeholder="Enter address"
                      required=""
                      value="Bujumbura -Mairie, Ntahangwa, Kamenge"
                  /><input
                      type="text"
                      placeholder="Enter city"
                      required=""
                      value="Bujumbura"
                  /><input
                      type="text"
                      placeholder="Enter postal code"
                      required=""
                      value="257 79526728"
                  /><input
                      type="text"
                      placeholder="Enter country"
                      required=""
                      value="Burundi"
                  />
                  <button type="submit">
                      <Link to='/payment' className='text-white'>
                          Continue</Link></button>
              </form>
          </div>

      </>
  )
}

export default ShippingScreen