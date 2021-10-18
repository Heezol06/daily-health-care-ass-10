import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/healthcare-logo.png'

const Navabr = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className="d-flex">
        <img src={logo} alt="" srcset="" className="" style={{height:"50px" , width:"50px"}}/>
      <Nav.Link to="#home" className="text-light">Daily <span style={{color: "#E1F5FE"}}>-Health-</span> Care</Nav.Link>
        </Navbar.Brand>
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Contact us</Nav.Link>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navabr;