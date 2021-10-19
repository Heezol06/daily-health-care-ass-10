import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-dark" style={{borderTop:"1px solid white",borderBottom:"1px solid white"}}>
            <div className="d-flex text-light mt-5">
            <div className="col-lg-2 bg-dark">
                <img src="https://i.ibb.co/KGzFLST/186250.png" className="w-25" alt="" />
                <h5>Address: 685 Lane St. California, 33020</h5>
            </div>
            <div className="col-lg-2 bg-dark">
                <img src="https://i.ibb.co/b158SVh/719703.png" className="w-25" alt="" />
                <h5>Phone: +010 234 7892 34</h5>
            </div>
            <div className="col-lg-2 bg-dark">
                <img src="https://i.ibb.co/PCRzRQS/2875394.png" className="w-25" alt="" />
                <h5>E-mail: info@nordis.com</h5>
            </div>
            <div className="col-lg-2 bg-dark">
                <img src="https://i.ibb.co/82nZQYM/2274361.png" className="w-25" alt="" />
                <h5>facebook.com/Daily-Health-Care</h5>
            </div>
            <div className="col-lg-2 bg-dark">
                <img src="https://i.ibb.co/chrkRw4/3578922.png" className="w-25" alt="" />
                <h5>twitter.com/Daily-Health-Care</h5>
            </div>
            <div className="col-lg-2 bg-dark">
                <img src="https://i.ibb.co/LtWC8xw/408707.png" className="w-25" alt="" />
                <h5>instagram.com/Daily-Health-Care</h5>
            </div>
        </div>
        <div className="container row">
        <div className="col-lg-6 mt-5">
        <img src="https://i.ibb.co/drY4QWj/intorduction-sec.jpg" style={{width:"90%", borderRadius:"15px"}} className="" alt="" />
        </div>
        <div className="col-lg-6 text-start mt-4 text-light d-flex p-0">
            <p>
                <span className="fw-bold">
            Science-Driven, Non-Toxic Stage IV Cancer Treatment in a Beautiful Healing Environment <br />
            </span>

            At Hope4Cancer, we recognize that no two patients are the same, and we believe treatment shouldn’t be either. That’s why we tailor our world-renowned healing program to each individual’s specific needs, diagnosis, and medical history to ensure the most comprehensive care possible. By considering the whole picture, we’re able to provide patients with a thorough and personalized stage 4 cancer treatment plan.

            Utilizing our foundational treatment philosophy, the 7 Key Principles of Cancer Therapy, we address the mental, physical, and emotional facets of disease to promote all-encompassing and long-lasting healing. This whole-body approach incorporates the best integrative and holistic technologies and treatments to strategically stage IV cancer at its roots while simultaneously supporting and stimulating the body’s natural healing mechanisms.

            Placing a special emphasis on education throughout our treatment program, we encourage our patients to become empowered decision-makers on their healing journey, and to confidently make the lifestyle changes necessary for long-term healing even after they return home. As part of our support system consisting of patients, staff, doctors, and loved ones alike, at Hope4Cancer, we don’t treat you like a statistic — we treat you like family.</p>
        </div>
        </div>
        </div>
    );
};

export default AboutUs;