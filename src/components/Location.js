import React from 'react'
import {Navbar, NavDropdown, Form, FormControl, Button, Nav} from 'react-bootstrap'
const Location = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>wedS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="Home">Home</Nav.Link>
      <NavDropdown title="Locations" id="basic-nav-dropdown">
        <NavDropdown.Item href="NorthDelhi">North Delhi</NavDropdown.Item>
        <NavDropdown.Item href="SouthDelhi">South Delhi</NavDropdown.Item>
        <NavDropdown.Item href="CentralDelhi">Central Delhi</NavDropdown.Item>
        <NavDropdown.Item href="EastDelhi">East Delhi</NavDropdown.Item>
        <NavDropdown.Item href="WestDelhi">West Delhi</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="Contact">Didn't Find?</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="Contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Location
