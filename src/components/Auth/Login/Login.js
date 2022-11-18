import React from 'react'
import './Login.css'
import logoImg from '../../../assets/logo.png'
import glogoImg from '../../../assets/google-logo.png'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div className='mx-auto w-25 mt-4'>
        <img src={logoImg} height='100px' width='200px' className='img-fluid' alt="" />
      </div>
      <div className='login-form'>
        <form>
            <h4>Login With</h4>
            <button className='login-btn'> <span> <FcGoogle className='iconG' /> </span>  Continue with Google </button>
            <br />
            <span>Don't have an account <Link to='/register'>Create Account</Link> </span>
        </form>
      </div>
    </div>
  )
}

export default Login
