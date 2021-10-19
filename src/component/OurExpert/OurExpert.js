import React, { useEffect, useState } from 'react';

const OurExpert = () => {
    const [experts, setExpert] = useState([]);
    useEffect(()=>{
        fetch('/expert.json')
        .then(res=> res.json())
        .then(data => setExpert(data))
    },[])
    return (
        <div className="my-5 container row">
            {
                experts.map(expert =>  <div key={expert.id} className="col-lg-4">
                    <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-header">{expert.drName}</div>
                        <div className="card-body">
                            <img src={expert.img} className="w-50 rounded" alt="" />
                            <h5 className="card-title">{expert.SpacialAt} Specialist</h5>
                            <p>Educational / Qualification: {expert.edu}</p>
                            <p className="card-text">{expert.description}</p>
                        </div>
                        </div>
                </div>)
            }
        </div>
    );
};

export default OurExpert;