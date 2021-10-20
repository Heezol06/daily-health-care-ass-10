import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import logo from '../../img/healthcare-logo.png'

const Navabr = () => {
  const {user, logOut} = useAuth();
  // console.log(user);
  console.log(user.photoURL)
    return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div className="d-flex justify-content-center">
  <Link to="/home"><img src={logo} alt="" srcSet="" className="" style={{height:"50px" , width:"50px"}}/></Link>
  
  <Link to="/home" className="text-light text-decoration-none mt-2"><h3>Daily <span style={{color: "#E1F5FE"}}>-Health-</span> Care</h3></Link>
  </div>



  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <NavLink to="/" activeStyle={{fontWeight: "bold",color: "#E1F5FE"}} className="text-decoration-none text-light mx-5">Home</NavLink>
      <NavLink to="/ourexpert" activeStyle={{fontWeight: "bold",color: "#E1F5FE"}} className="text-decoration-none text-light mx-5">Our Experts</NavLink>
      <NavLink to="/aboutus" activeStyle={{fontWeight: "bold",color: "#E1F5FE"}} className="text-decoration-none text-light mx-5">About us</NavLink>
    </ul>
    <div className="d-flex justify-contain-around">
      {user?.email ? <button className="btn-danger rounded p-2" onClick={logOut} style={{marginLeft:"280px"}}>Logout</button> :
      <NavLink to="/login" activeStyle={{fontWeight: "bold",color: "#E1F5FE" }}  className="text-decoration-none text-light" style={{marginLeft:"280px", padding:"px"}}>
         <button className="btn-info rounded" >Login</button>
        </NavLink> }
        {user.email ?
          <img src={user.photoURL} className="rounded-circle" style={{height:"50px", marginLeft:"70px"}} alt="" /> :
          ""
          }
          </div> 
        </div>
  </div>
</nav>
    );
};

export default Navabr;