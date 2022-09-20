import React from 'react'

export const CalltoActionSection = () => {
  return (
      <div className='subscribe-section bg-with-black'>
          <div className='container'>
              <div className='row'>
                  <div col-xs-12='true'>
                      <div className='subscribe-head'>
                          <h2>Do you need more tips?</h2>
                          <p>Signup free get the latest tips.</p>
                          <form className='form-section'>
                              <input placeholder='Your Email ...' name='email' type='email' />
                              <input value='Yes. I want' name='subscribe' type='submit'/>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default CalltoActionSection