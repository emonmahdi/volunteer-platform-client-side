import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TopBar from '../TopBar/TopBar'
import './DashboardHome.css'


const DashboardHome = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <TopBar />
    </div>
  )
}

export default DashboardHome
