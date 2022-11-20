import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
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
                    <span><li><FaUserFriends className='icons' /> Volunteer register list</li> </span>
                </Link>
                <Link style={{textDecoration: 'none', color: '#000'}} to='/add-event'>
                    <span><li><BsFillPlusCircleFill className='icons' /> Add event</li></span>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
