import React from 'react'

const SingleVolunteer = ({service}) => {
    const {id, title, image, description} = service
  return (
    <div className='col-md-3'>
        <div className="single-card mb-4">
            <img src={image} className='img-fluid' alt="" /> 
            <h5 className='bg-warning p-3 rounded-3'>{title}</h5>
        </div>
    </div>
  )
}

export default SingleVolunteer
