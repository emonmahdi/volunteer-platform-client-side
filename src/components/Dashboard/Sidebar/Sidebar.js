import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/logo.png'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-dashboard'>
        <Link to='/'>  
         <img src={logoImg} height='80px' width='140px' className='img-fluid' alt="" />
        </Link>
        <div className='menu-item'>
            <ul>
                <Link style={{textDecoration: 'none', color: '#000'}} to='/dashboard'>
                    <li>Volunteer register list</li> 
                </Link>
                <Link style={{textDecoration: 'none', color: '#000'}} to='/add-event'>
                    <li>Add event</li>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
