import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({service}) => {
    const {serviceName, drName, schedule, img, description, id} = service
    return (
        <div className="col-lg-4 " style={{marginTop:"50px"}}>
           <div className="card my-3 shadow-sm service-container" style={{width: "20rem", height:"550px"}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text">{description.slice(0,90)}</p>
                    <h6 class="" style={{backgroundColor: "#ff9eaa", padding: "5px", borderRadius: "10px" ,}} ><i class="fas fa-stethoscope bg-dark p-2 rounded-circle me-3" style={{color: "#acf5ff",}}></i>{drName}</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>Schedule: {schedule}</p>
                        </div>
                        <div>
                        <i className="fas fa-star" style={{color:"#ffe234"}} ></i>
                        <i className="fas fa-star" style={{color:"#ffe234"}}></i>
                        <i className="fas fa-star" style={{color:"#ffe234"}}></i>
                        <i className="far fa-star" style={{color:"#ffe234"}}></i>
                        <i className="far fa-star" style={{color:"#ffe234"}}></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <button className="btn fw-light" style={{backgroundColor:"#D1E8E4"}}>Book Now</button>
                    <Link to={`/Details/${id}`}><button className="btn fw-light btn-dark">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;