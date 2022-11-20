import React, { useEffect, useState } from 'react'
import './TopBar.css'
import Table from 'react-bootstrap/Table';
import { RiDeleteBinLine } from "react-icons/ri";


const TopBar = () => {
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/volunteer')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setVolunteer(data);
    })
  }, []);


  const handleDelete = (id) => {
    const procced = window.confirm("Are sure delete the volunteer?");

    if(procced){ 
      const url = `http://localhost:5000/volunteer/${id}`
      fetch(url, {
        method: "DELETE",
  
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          const remaining = volunteer.filter(vl => vl._id !== id);
          setVolunteer(remaining)
        }
      });
    }

  }


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
       
        {
          volunteer.map(volun => <tr>
            <td>{volun.name}</td>
            <td>{volun.email}</td>
            <td>{volun.date}</td>
            <td>{volun.organize}</td>
            <td><button onClick={() => handleDelete(volun._id)} className='btn btn-danger'><RiDeleteBinLine /></button></td>
          </tr> )
        } 
        
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
