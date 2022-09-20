import React from 'react'

export const ProfileTabs = () => {
  return (
    <>
      <form className='row form-container'>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-fn'>UserName</label>
            <input className='form-control' type='text' required/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-email'>E-mail Address</label>
            <input className='form-control' type='email'/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-pass'>New Password</label>
            <input className='form-control' type='password' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-pass'>Confirm Password</label>
            <input className='form-control' type='password' />
          </div>
        </div>
      </form>
    </>
  )
}
