import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    const [userDetails, setUserDetails] = useState([]);
    


    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setUserDetails(data))
    },[])
    
    const search = userDetails.find(details => details.id == serviceId)
    return (
        <div>
            <div class="container w-75 my-5 card mb-3" style={{backgroundColor:"#FFF7E0"}}>
                <img src={search?.img} class="card-img-top mt-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{search?.serviceName}</h5>
                    <p class="card-text">{search?.description}</p>
                    <p class="card-text"><small class="text-muted">Schedule: {search?.schedule}</small></p>
                </div>
                </div>

        </div>
    );
};

export default Details;