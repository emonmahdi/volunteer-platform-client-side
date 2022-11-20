import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import logoImg from '../../../assets/logo.png'
import './Register.css'



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [organize, setOrganize] = useState('');
 
  

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = {
      name, 
      email,
      date, 
      description,
      organize
    }
    console.log(formData);

    const url = 'https://volunteer-platform.onrender.com/volunteer'
    fetch(url, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast('Register Volunteer Successfully!!')
      e.target.reset();
    })

  }

  return (
    <div className='register-route'>
      <div className='mx-auto w-25 mt-4'>
        <Link to='/'> 
         <img src={logoImg} height='100px' width='200px' className='img-fluid' alt="" />
        </Link>
      </div>
      <div className='register-form'>
        <form onSubmit={handleRegister}>
            <h4 className='mb-3'>Register as a Volunteer</h4>
            <div>
                <input className='form-control' name='name' type="text" placeholder='Full Name' onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <input className='form-control' name='email' type="email" placeholder='username or email' onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <input className='form-control' name='date' type="date" placeholder='Date' onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <input className='form-control' name='description' type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <input className='form-control' name='organize' type="text" placeholder='Organize book at the library' onChange={(e) => setOrganize(e.target.value)} required />
            </div>
            <div>
                <input type="submit" className='btn btn-primary' value="Registration" placeholder='Organize book at the library' />
            </div>
            <span>You have an account!! <Link to='/login'>Please Login</Link> </span>
        </form> 
      </div>
    </div>
  )
}

export default Register
