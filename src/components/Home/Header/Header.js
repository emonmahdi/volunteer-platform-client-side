import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logoImg from '../../../assets/logo.png'


const Header = () => {
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
          <button className='btn btn-primary mx-3'>Register</button>
          <button className='btn btn-dark'>Admin</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
