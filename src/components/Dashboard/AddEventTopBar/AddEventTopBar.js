import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddEventTopBar.css'


const AddEventTopBar = () => {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();


    const data = {
        title,
        description,
        date, 
        image
    }

    const handleAddEvent = (e) => {
        e.preventDefault();

        const url = 'http://localhost:5000/event';
        fetch(url, {
            method:"POST",
            headers: {
                'content-type': "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast("Add event successfully!");
            navigate('/')
        })

        /* axios.post(url, data)
        .then(res => {
            console.log(res?.data);
        }) */

        console.log(data);

    }

  return (
    <div className='topbar-section'>
    <h3>Add  Event </h3> 
    <div className="add-event-form">
        <form onSubmit={handleAddEvent}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='text-start mb-3'>
                            <label htmlFor="title">Title</label>
                            <input type="text" id='title' name='title' className='form-control' onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='text-start'>
                            <label htmlFor="description">Description</label>
                            <textarea className='form-control' onChange={(e) => setDesc(e.target.value)} name="description" id="description" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='text-start mb-3'>
                            <label htmlFor="date">Event Date</label>
                            <input type="date" onChange={(e) => setDate(e.target.value)} name='date' className='form-control' />
                        </div>
                        <div className='text-start'>
                            <label htmlFor="img">Event Image </label>
                            <input type="text" onChange={(e) => setImage(e.target.value)} name='img' className='form-control' />
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
