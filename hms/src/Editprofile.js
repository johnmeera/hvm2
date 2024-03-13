import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Customerdashboard.css';

function Editprofile() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [profiledata, setProfileData] = useState(null);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const [formData, setFormData] = useState({
        customername: '',
        emailid: '',
        mobileno: null,
        gender: '',
        address: '',
        username: '',
        password: '',
        
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data:', formData);
        axios.put('http://localhost:8081/api-v1/2484', formData)
            .then(response => {
                console.log('Form submitted successfully:', response.data);
                // Handle success, e.g., show a success message
            })
            .catch(error => {
                console.error('Error submitting form:', error.message);
                // Handle errors, e.g., show an error message
            });
    };
    const fetchProfileData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api-v1/customerid/2484');
            setProfileData(response.data);
        } catch (error) {
            console.error('Error fetching Profile data:', error);
        }
    };
    
    useEffect(() => {
        fetchProfileData();
    }, []);
   
    return (
        <>
         <div className="containern" style={{ backgroundColor: "lightgray", width: "40.2cm", minHeight: "100vh", minWidth: "195vh" }}>
                <div className="header1">
                    <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm",borderRadius:"50%" }}></img><br />
                    <h2 style={{ float: "inline-start", marginLeft: "1cm" }}><b>Hotel Name</b></h2>
                    <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1.5cm", marginBottom: "0" }}><b>Nikhil Tammineedi</b></h4>
                   <div style={{marginTop:"-1.4cm"}}>
                    <img src="https://www.freeiconspng.com/uploads/profile-icon-9.png" alt="loading.." style={{width:"1cm",height:"50px",marginLeft:"38.7cm",marginTop:"-1cm"}}/><br/><br/>
                    </div>
                    <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1.5cm" }}><b>id:2484</b></h5>
                </div>
                <div className="navbar30" style={{ display: "flex", justifyContent: "center", backgroundColor: "black", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "40.2cm" }}>
                   <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
                    <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
                        <a href="#info" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Info</a>
                    </li>
                    <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
                        <a href="#rooms" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Rooms</a>
                    </li>
                    <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
                        <a href="/Food" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Food</a>
                    </li>
                    <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
                        <a href="/Addcust" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Addon's</a>
                    </li>
                    <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
                        <a href="/Area" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Areainfo</a>
                    </li>
                    {/* <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
                        <a href="/Mybookings" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>My Bookings</a>
                    </li> */}
                    <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger", transition: "background-color 0.3s" }}>
                        <a href="/LoginCard" style={{ color: "whitesmoke", textDecoration: "none" }}>Sign-Out</a>
                    </li>
                   
                </ul>
                
            </div>
        
            {/* Menu Icon */}
            <div className="menu-icon hover-effect" onClick={toggleMenu} style={{ position: "absolute", top: "5.8cm", right: "1.5cm", color: "whitesmoke", zIndex: "1000" }}>
                {isMenuOpen ? <span>&#x2715;</span> : <span> &#9776;</span>}
            </div>

                
                {/* Menu Content */}
                {isMenuOpen && (
                    <div className="menu30" style={{ position: "absolute", bottom:"1", right: "0", backgroundColor: "black", zIndex: "999", width: "250px", padding: "10px" ,marginRight:"0.25cm",height:"10cm",color:"whitesmoke"}}>
                        <ul>
                            <li style={{fontFamily:"cursive",fontSize:"x-large"}}>
                                <a href="/Profile" style={{color:"whitesmoke"}}><b>Profile</b></a>
                                </li><br/>
                            <li style={{fontFamily:"cursive",fontSize:"x-large"}}>
                            <a href="/Mybookings" style={{color:"whitesmoke"}}><b>Booking-History</b></a>
                            </li><br/>
                            <li style={{fontFamily:"cursive",fontSize:"larger"}}><b>FAQ's</b></li><br/>
                            <li style={{fontFamily:"cursive",fontSize:"X-large"}}><b>ContactUs</b></li><br/>
                        </ul>
                    </div>
                )}
        <div className="container">
            <form onSubmit={handleSubmit} style={{float:"center",marginLeft:"12cm",marginTop:"2cm"}}>
                <label><b>Name: </b></label>
                <input style={{marginLeft:"1cm",textAlign:"center"}}
                    type="text"
                    placeholder="Enter customer name"
                    name="customername"
                    value={formData.customername}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label><b>Email_id: </b></label>
                <input style={{marginLeft:"0.4cm",textAlign:"center"}}
                    type="text"
                    placeholder="Enter Email id"
                    name="emailid"
                    value={formData.emailid}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label><b>Mobile no: </b></label>
                <input style={{marginLeft:"0.25cm",textAlign:"center"}}
                    type="number"
                    placeholder="mobile"
                    name="mobileno"
                    value={formData.mobileno}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label><b>Gender: </b></label>
                <input style={{marginLeft:"0.75cm",textAlign:"center"}}
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label><b>Address: </b></label>
                <input style={{marginLeft:"0.55cm",textAlign:"center"}}
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                /><br /><br />
                
                <label><b>Username: </b></label>
                <input style={{marginLeft:"0.1cm",textAlign:"center"}}
                    type="text"
                    placeholder="username"
                    name="username"
                   value={formData.username} 
                    onChange={handleChange}
                    required
                /><br /><br />

                <label><b>password: </b></label>
                <input style={{marginLeft:"0.2cm",textAlign:"center"}}
                    type="text"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br /><br />
                <br/>

               
                
                <button type='submit' className="btn btn-light" style={{ marginLeft: "3.8cm" ,backgroundColor:"black",color:"whitesmoke",marginTop:"0cm",width:"3cm"}}><b>Confirm</b></button>
            </form>
            <Link to={'/Profile'} style={{ marginLeft: "-4cm"}}>
                    <button type="button" className="btn btn-light" style={{color:"whitesmoke",backgroundColor:"black"}}>Back</button>
                </Link>
        </div>
        </div>
         
        <div className="footercontent" style={{backgroundColor:"black",width:"40cm",marginLeft:"-0.3cm",height:"6cm",marginTop:"1cm"}}><br/>
                <footer class="footer" id="contact">     
                <div class="footer__col">
                     <h4 style={{color:"whitesmoke",marginLeft:"12cm"}}>OUR SERVICES</h4>
                    <ul class="footer__links">
                        <li style={{marginLeft:"10.5cm",marginTop:"-0.5cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Concierge Assistance</a></li>
                        <li style={{marginLeft:"10.3cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Flexible Booking Options</a></li>
                        <li style={{marginLeft:"11cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Airport Transfers</a></li>
                        <li style={{marginLeft:"10.5cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Wellness & Recreation</a></li>
                    </ul>
                    </div>
                    <br></br>
                    <div class="footer__col">
                    <h4 style={{marginLeft:"24cm",color:"whitesmoke",marginTop:"-5.3cm"}}>CONTACT US</h4>
                    
                        <li style={{marginLeft:"21cm",marginTop:"1cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}} >anarghyacommunications@gmail.com</a></li>
                        <li style={{marginLeft:"22.6cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Call now : 9845612340</a></li>
                    
                    </div>
     
      
                </footer>
                </div>
                <div className="footercontent2" style={{backgroundColor:"whitesmoke",width:"40cm",marginLeft:"-0.5cm"}}>
                <div class="footer__bar" >
                © 2023-2024 Anarghya Communications. All Rights Reserved.
                </div>
                </div>

        </>
    );
}

export default Editprofile;
