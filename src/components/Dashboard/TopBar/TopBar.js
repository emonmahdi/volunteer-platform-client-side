import React, { useEffect, useState } from 'react'
import './TopBar.css'
import Table from 'react-bootstrap/Table';

const TopBar = () => {
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/volunteer')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setVolunteer(data);
    })
  }, [])

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
        {
          volunteer.map(volun => {
            const {_id, name, email, description, date, organize} = volun;
            return(
              <> 
                <td>{name}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{organize}</td>
                <td><button className='btn btn-danger'>delete</button></td>
                
              </>
            )
          })
        } 
        </tr>
        {/* <tr>
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
        </tr>  */} 
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default TopBar
