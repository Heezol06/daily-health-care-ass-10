import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import logo from '../../img/healthcare-logo.png'

const Navabr = () => {
  const {user, logOut} = useAuth();
  console.log(user);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container className="text-light">
    <Navbar.Brand href="#home" className="d-flex justify-content-center">
        <Link to="/home"><img src={logo} alt="" srcSet="" className="" style={{height:"50px" , width:"50px"}}/></Link>
      <Link to="/home" className="text-light text-decoration-none mt-2"><h3>Daily <span style={{color: "#E1F5FE"}}>-Health-</span> Care</h3></Link>
        </Navbar.Brand>
      <NavLink to="/ourexpert" activeStyle={{fontWeight: "bold",color: "#E1F5FE"}} className="text-decoration-none text-light">Our Experts</NavLink>
      <NavLink to="/aboutus" activeStyle={{fontWeight: "bold",color: "#E1F5FE"}} className="text-decoration-none text-light">About us</NavLink>
        {user?.email ? <button className="btn-light rounded" onClick={logOut}>Logout</button> :
      <NavLink to="/login" activeStyle={{fontWeight: "bold",color: "#E1F5FE" }} className="text-decoration-none text-light">
         <button className="btn-light rounded" >Login</button>
        </NavLink> }
        {user.email ?
          <img src={user.photoURL} className="rounded-circle" style={{height:"50px"}} alt="" /> :
          ""
          }
    </Container>
  </Navbar>
        </div>
    );
};

export default Navabr;