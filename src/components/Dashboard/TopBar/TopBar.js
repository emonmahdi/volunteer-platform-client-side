import React from 'react'
import './TopBar.css'
import Table from 'react-bootstrap/Table';

const TopBar = () => {
  return (
    <div className='topbar-section'>
      <h3>Volunteer List</h3> 
      <div className="list-volunter">
      <Table striped className='table-list'>
      <thead>
        <tr>
          <th>Name</th>
          <th>EmailID</th>
          <th>Registration Date</th>
          <th>Volunteer list</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pro Rasel</td>
          <td>rasel@gmail.com</td>
          <td>21/11/22</td>
          <td>organize book at the library</td>
          <td><button className='btn btn-danger'>delete</button></td>
        </tr>  
        <tr>
          <td>Pro Rasel</td>
          <td>rasel@gmail.com</td>
          <td>21/11/22</td>
          <td>organize book at the library</td>
          <td><button className='btn btn-danger'>delete</button></td>
        </tr>  
        <tr>
          <td>Pro Rasel</td>
          <td>rasel@gmail.com</td>
          <td>21/11/22</td>
          <td>organize book at the library</td>
          <td><button className='btn btn-danger'>delete</button></td>
        </tr>  
        <tr>
          <td>Pro Rasel</td>
          <td>rasel@gmail.com</td>
          <td>21/11/22</td>
          <td>organize book at the library</td>
          <td><button className='btn btn-danger'>delete</button></td>
        </tr>  
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default TopBar
