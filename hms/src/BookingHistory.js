import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Customerdashboard.css';

function BookingHistory() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch booking history from the server
        async function fetchBookingHistory() {
            try {
                const response = await axios.get("http://localhost:9111/api-v1/bookings");
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching booking history:", error.message);
            }
        }

        fetchBookingHistory();
    }, []);
    const [isMenuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
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
            <h2>Booking Preview</h2>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>
                        <p>Room type: {booking.roomtype}</p>
                        <p>Check-In: {booking.checkinDate}, Check-Out: {booking.checkoutDate}</p>
                        <p>Adults: {booking.adults}, Children: {booking.children}</p>
                        <p>Extrabeds: {booking.extrabeds ? "Yes" : "No"}</p>
                    </li>
                ))}
            </ul>
            <Link to="/booknow">Go back to booking page</Link>
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
    </div>
    );
}

export default BookingHistory;
