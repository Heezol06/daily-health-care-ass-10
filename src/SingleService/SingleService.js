import React from 'react';

const SingleService = ({service}) => {
    const {serviceName, drName, schedule, img, description} = service
    return (
        <div className="col-lg-4">
           <div class="card my-3" style={{width: "20rem", height:"550px"}}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{serviceName}</h5>
                    <p class="card-text">{description.slice(0,90)}</p>
                    <h6 className="" style={{backgroundColor:"#FFCDD2", padding:"5px" , borderRadius:"10px"}}><i class="fas fa-stethoscope bg-dark p-2 rounded-circle me-3" style={{color:"#E1F5FE"}}></i>{drName}</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>Schedule: {schedule}</p>
                        </div>
                        <div>
                        <i class="fas fa-star" style={{color:"#ffe234"}} ></i>
                        <i class="fas fa-star" style={{color:"#ffe234"}}></i>
                        <i class="fas fa-star" style={{color:"#ffe234"}}></i>
                        <i class="far fa-star" style={{color:"#ffe234"}}></i>
                        <i class="far fa-star" style={{color:"#ffe234"}}></i>
                        </div>
                    </div>
                    <button className="btn fw-light" style={{backgroundColor:"#D1E8E4"}}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;