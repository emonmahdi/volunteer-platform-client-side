import React from 'react'
import logoImg from '../../../assets/logo.png'
import './Register.css'



const Register = () => {
  return (
    <div>
      <div className='mx-auto w-25 mt-4'>
        <img src={logoImg} height='100px' width='200px' className='img-fluid' alt="" />
      </div>
      <div className='register-form'>
        <form>
            <h4 className='mb-3'>Register as a Volunteer</h4>
            <div>
                <input type="text" placeholder='Full Name' />
            </div>
            <div>
                <input type="email" placeholder='username or email' />
            </div>
            <div>
                <input type="text" placeholder='Date' />
            </div>
            <div>
                <input type="text" placeholder='Description' />
            </div>
            <div>
                <input type="text" placeholder='Organize book at the library' />
            </div>
            <div>
                <input type="submit" className='btn btn-primary' value="Registration" placeholder='Organize book at the library' />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
