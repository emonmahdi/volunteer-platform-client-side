import React from 'react'
import './AddEventTopBar.css'


const AddEventTopBar = () => {
  return (
    <div className='topbar-section'>
    <h3>Add  Event </h3> 
    <div className="add-event-form">
        <form>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='text-start'>
                            <label htmlFor="title">Title</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='text-start'>
                            <label htmlFor="description">Description</label>
                            <textarea className='form-control' name="" id="" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='text-start'>
                            <label htmlFor="date">Event Date</label>
                            <input type="date" className='form-control' />
                        </div>
                        <div className='text-start'>
                            <label htmlFor="img">Event Image </label>
                            <input type="text" name='img' className='form-control' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='text-end'>
                            <input type="submit" value="Add Event" className='btn btn-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
  )
}

export default AddEventTopBar
