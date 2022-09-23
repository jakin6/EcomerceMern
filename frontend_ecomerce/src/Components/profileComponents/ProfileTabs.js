import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Toast } from '../LoadingError/Toast'
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error' 
import { toast } from 'react-toastify'

export const ProfileTabs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  const toastId=React.useRef(null)

 
  const Toastobjects={
    pauseOnFocusLoss:false,
    draggable:false,
    pauseOnHover:false,
    autoClose:2000

  }

  const dispatch=useDispatch()
  const userDetails=useSelector((state)=>state.userDetails)
  const {  loading,error,user } = userDetails

  useEffect(()=>{
    if(user){
      setName(user.name)
      setEmail(user.email)
    }
  },[dispatch,user])

  const submitHandler=(e)=>{
    e.preventDefault()
    //Password match
    if(password !== confirmPassword)
    {
      toastId.current=toast.error("Password does not match",Toastobjects  )
    }else{
      //UPDATE PROFILE
      alert("Password  match")

    }
  }
  return (
    <>
    <Toast/>
    {error && <Message variant="alert-danger">{error}</Message>}
    {loading && <Loading/>}
      <form className='row form-container' onSubmit={submitHandler}>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-fn'>UserName</label>
            <input className='form-control' type='text' required value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-email'>E-mail Address</label>
            <input className='form-control' type='email'
            required
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-pass'>New Password</label>
            <input className='form-control' type='password'
            value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form'>
            <label for='account-pass'>Confirm Password</label>
            <input className='form-control' type='password' 
            />
          </div>
        </div>
        <div>
          <button style={{width:"100%"}} type="submit">Update Profile</button>
        </div>
      </form>
    </>
  )
}
