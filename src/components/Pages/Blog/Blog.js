import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'


const Blog = () => {
  return (
    <div className='blog-page'>
      <h2>Blog Content Coming soon....</h2>
      <Link to='/'>
        <button className='btn btn-primary'>Back To Home</button>
      </Link>
    </div>
  )
}

export default Blog
