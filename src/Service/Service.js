import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container">
            <h1 className="mt-2 p-1 d-inline-flex" style={{backgroundColor:"#F9F3DF", borderRadius:"10px", fontFamily: "'Anton', sans-serif"}}>Our <span style={{color:"#69DADB"}}>Services</span> </h1>
            <div className="row mx-auto">
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