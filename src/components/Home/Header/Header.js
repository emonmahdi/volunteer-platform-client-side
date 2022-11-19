import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/logo.png'
import auth from '../../../firebase.init'


const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logoImg} height='80px' width='140px' className='img-fluid' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Donation</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link> 
          </Nav> 
           {
            user ? <button onClick={handleSignOut} className='btn btn-danger mx-3'>Log Out</button> 
            :
           <Link to='register'><button className='btn btn-primary mx-3'>Register</button></Link> 
           }
          
         <Link to='/login'><button  className='btn btn-dark'>Login</button></Link> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
