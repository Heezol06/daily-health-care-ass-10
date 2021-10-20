import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container p-0">
            <h1 className=" p-1 d-inline-flex shadow" style={{backgroundColor:"#F9F3DF", borderRadius:"10px", fontFamily: "'Anton', sans-serif", marginTop:"100px"}}>Our <span style={{color:"#69DADB"}}>Services</span> </h1>
            <div className="row mx-auto service-container">
            {
                services.map(service => <SingleService
                key={service.id}
                service={service}
                ></SingleService>)
            }
            </div>
            
        </div>
    );
};

export default Service;