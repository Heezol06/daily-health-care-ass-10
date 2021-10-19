import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Login.css'

const Login = () => {
    const {handleUserLogin} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleLogin = (e) =>{
        handleUserLogin(email, password);
        
        // window.location.reload();
    }
    
    return (
        <div className="p-5 login-bg">
            <div className="my-5">
            <h2 className="my-5">Type your email password and login here. </h2>
                <div className="d-flex flex-column justify-content-center align-items-center">
                <input type="text" className="form-control w-50" placeholder="Type your email" onChange={handleEmail}/> <br />
                <input type="password" className="form-control w-50" name="password" placeholder="Type your Password" id="" onChange={handlePassword} />
                </div>
                <button className="btn-dark text-light p-2 m-3 rounded" onClick={handleLogin}>Login</button> <br />
                <Link to="/registration" className="text-danger">Don't have any account!</Link>
            </div>
        </div>
    );
};

export default Login;