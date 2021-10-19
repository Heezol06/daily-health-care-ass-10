import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <div className="py-5 d-flex">
            <div className="col-lg-3">
                <h4 className="" style={{textDecoration:"underline" , textDecorationColor:"#4eeced" }}>Contacts</h4>
                <h6 className="text-center mt-5">Address: 685 Lane St. California, 33020 <br />
                    Phone: +010 234 7892 34 <br />
                    E-mail: info@nordis.com</h6>
                    <input type="email" name="email" placeholder="Email address" className="bg-dark text-light input-style" id="" />
                    <i className="fas fa-envelope ms-3" style={{color:"#4eeced"}}></i>
                    <div className="mt-2 text-center" style={{color:"#4eeced"}}>
                    <i className="fab fa-facebook-f mx-3"></i>
                    <i className="fab fa-twitter mx-3"></i>
                    <i className="fab fa-tumblr mx-3"></i>
                    <i className="fab fa-dropbox mx-3"></i>
                    <i className="fas fa-basketball-ball mx-3"></i>
                    </div>
            </div>
            <div className="col-lg-3">
                <h4 style={{textDecoration:"underline" , textDecorationColor:"#4eeced" }}>Pages</h4>
                <div className="mt-5">
                    <h6 className="pages-style">
                    Home 
                    </h6>
                    <h6 className="pages-style">About Us </h6>
                    <h6 className="pages-style">Services  </h6>
                    <h6 className="pages-style"> Booking  </h6>
                    <h6 className="pages-style">  Blog  </h6>
                    <h6 className="pages-style">  Contacts  </h6>
                </div>
            </div>
            <div className="col-lg-3">
                <h4 style={{textDecoration:"underline" , textDecorationColor:"#4eeced" }}>Social</h4>
                <div className="mt-5">
                    <h6 className="pages-style">Facebook </h6>
                    <h6 className="pages-style">Instagram </h6>
                    <h6 className="pages-style"> Twitter</h6>
                    <h6 className="pages-style">Youtube</h6>
                </div>
            </div>
            <div className="col-lg-3">
                <h4 style={{textDecoration:"underline" , textDecorationColor:"#4eeced" }}>Photos</h4>
                <div className="mt-5">
                    <div className="col-lg-3 d-flex">
                        <img src="https://i.ibb.co/zRgWkJq/ordinary-busy-day-surgeon.jpg" className="w-100 h-100" alt="" />
                        <img src="https://i.ibb.co/QmmnX7q/surgeon-writing-down-some-operation-notes.jpg" className="w-100 h-100" alt="" />
                        <img src="https://i.ibb.co/d7Tj2X9/afro-doctors-consulting-young-adult-hospital-ward.jpg" className="w-100 h-100" alt="" />
                        <img src="https://i.ibb.co/cJNjDPx/team-young-specialist-doctors-standing-corridor-hospital.jpg" className="w-100 h-100" alt="" />
                    </div>
                    <div className="col-lg-4 d-flex">
                        <img src="https://i.ibb.co/ssfK11J/interior-view-operating-room.jpg" alt="" className="w-100 h-100" srcSet="" />
                        <img src="https://i.ibb.co/GRJDfhZ/large-modern-office-building.jpg" alt="" className="w-100 h-100" srcSet="" />
                        <img src="https://i.ibb.co/KwpGt7z/nurse-measuring-patient-blood-pressure.jpg" alt="" className="w-100 h-100" srcSet="" />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;