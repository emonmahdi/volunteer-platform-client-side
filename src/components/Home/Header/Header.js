import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/logo.png'
import auth from '../../../firebase.init'
import './Header.css'


const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div className='navbar-top'>
      <Navbar collapseOnSelect expand="lg" fixed='top' bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logoImg} height='80px' width='140px' className='img-fluid' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
            <Nav.Link href="#event">Events</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link> 
          </Nav> 
           {
            user ? 
            <>
            <NavDropdown title={ <span className='fw-bold ms-3'>{user?.displayName}</span> } id="collasible-nav-dropdown"> 
              <NavDropdown.Item as={Link} to="/order">
                Order
              </NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="/dashboard">
                Dashboard
              </NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                <button onClick={handleSignOut} className='btn btn-danger mx-3'>Log Out</button> 
              </NavDropdown.Item>
            </NavDropdown>    
            <Link to='register'><button className='btn btn-primary mx-3'>Register</button></Link>
             {/* {user?.photoURL ? <span>
                <img src={user?.photoURL} className='img-fluid rounded-circle me-2' width='40px' height='40px' alt="" />
              </span> :  ""} 
              <span>{user?.displayName}</span>
              <button onClick={handleSignOut} className='btn btn-danger mx-3'>Log Out</button>  */}
            </>
           
            :
            <> 
              
              <Link to='/login'><button  className='btn btn-dark'>Login</button></Link> 
            </>
            
           }
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
