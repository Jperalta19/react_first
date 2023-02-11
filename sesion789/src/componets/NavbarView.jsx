import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import {HouseDoor} from 'react-bootstrap-icons'

const NavbarView = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><HouseDoor style={{width:'30', height:'30', marginRight:'20' }}/>Agent contact</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
              <Nav className="me-auto nav justify-content-center">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="/Register" >Register</Nav.Link>
                <Nav.Link href="/Dashboard" >Dashboard</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
      
    </div>
  )
}

export default NavbarView
