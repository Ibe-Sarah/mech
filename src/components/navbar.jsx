import React from 'react';
// import logo from './srcassets/logo.png';
import img from '/Users/sarahi/snt/src/assets/logo.png'
import './navbar.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className='container'>
<div className='imgsearch'>
<img style={{width:'4em', height:'2em'}} src={img}></img>
<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

          </Form>
   
</div>

<div className='toggle'>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        </Nav>
        <div className='links'>
             <Link to='/' >HOME</Link>
            <Link to="/about-us">ABOUT US</Link>
            
            <Link to="/services">SERVICES</Link>
            
            <Link to='contact-us'> Contact us   
            </Link>
            </div>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;