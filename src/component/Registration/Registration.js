import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import illustration from '../../img/Login/undraw_medical_care_movn.svg'


const Registration = () => {
    console.log(useAuth());
    const {user, signInUsingGoogle, signInUsingGithub, handleUserRegistration } = useAuth() || {};
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/Details/:serviceId';



    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleGithubLogin = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleRegistration = (e) =>{
        handleUserRegistration(email, password);
        
        window.location.reload();
    }
    return (
        <div className="d-flex">
            <div className="col-lg-6 py-5">
                <img src={illustration} className="w-100" alt="" srcSet="" />
            </div>


            <div className="col-lg-6 py-5">
            <div className="my-5">
            <h2 className="my-5">Type your email password or signin with google, github. </h2>
                <div className="d-flex flex-column justify-content-center align-items-center">
                <input type="text" className="form-control w-50" onChange={handleEmail} placeholder="Type your email" /> <br />
                <input type="password" className="form-control w-50" onChange={handlePassword} name="password" placeholder="Type your Password" id="" />
                </div>
                <div className="my-3">
                <button className="btn" onClick={handleGithubLogin} ><i className="fab fa-github fa-lg mx-3"></i></button>
                <button className="btn" onClick={handleGoogleLogin}><i className="fab fa-google fa-lg mx-3"></i></button>
                </div>
                {user?.email ?
                    <h1>Welcome {user?.displayName}</h1> 
                    : ""
                }
                <div>
                <button className="btn-dark text-light p-2 m-3 rounded" onClick={handleRegistration}>Signin</button> <br />
                <Link to="/login" className="text-danger">Already have an account!</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Registration;