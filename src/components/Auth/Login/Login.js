import React from 'react'
import './Login.css'
import logoImg from '../../../assets/logo.png' 
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Loading from '../Loading/Loading'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';
    

    if(loading){
      return <Loading></Loading>
    }

    let errorElement; 
    if (error) { 
        errorElement = <p className='text-danger'>Error: {error}</p> 
      }

    if(user){
        navigate(from, {replace: true})
    }  
   


    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
      <div className='mx-auto w-25 mt-4'>
      <Link to='/'> 
         <img src={logoImg} height='100px' width='200px' className='img-fluid' alt="" />
        </Link>
         
      </div>
      <div className='login-form'>
        <form onSubmit={handleSubmit}>
            <h4>Login With</h4>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='login-btn'> <span> <FcGoogle className='iconG' /> </span>  Continue with Google </button>
            <br />
            <span>Don't have an account <Link to='/register'>Create Account</Link> </span>
        </form>
      </div>
    </div>
  )
}

export default Login
