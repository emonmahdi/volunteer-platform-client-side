import React from 'react'
import { Link } from 'react-router-dom'
import './SingleVolunteer.css'


const SingleVolunteer = ({service}) => {
    const {_id, title, image, description} = service
  return (
    <div className='col-md-3'>
        <div className="single-card mb-4">
            <img src={image} className='img-fluid' alt="" /> 
            <Link className='link-items' to={`/checkout/${_id}`}>
              <h5 className='bg-warning p-3 rounded-3'>{title}</h5>
            </Link>
           
        </div>
    </div>
  )
}

export default SingleVolunteer
