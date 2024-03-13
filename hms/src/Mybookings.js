import React from "react";
import './Customerdashboard.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


const tableData = [
    {
      
      booking_refid: null,
      customerid: null,
      customername: '',
      mobileno: null,
      emailid: '',
      booking_type: '',
      adults: null,
      children: null,
      aadons: '',
      amount:null,
      date:'',
      status:'',
      refund_status: null,
      
    },
  ];

 
function Mybookings(){
        
        const [allBookings, setAllBookings] = useState([]); 
        const [isMenuOpen, setMenuOpen] = useState(false); 
    
      
        const toggleMenu = () => {
            setMenuOpen(!isMenuOpen);
        };
    
        
        const getAllBookings = async () => {
            try {
                const response = await axios.get('http://localhost:8083/api-v1/2484');
                setAllBookings(response.data);
            } catch (error) {
                console.error('Error fetching all Bookings:', error); 
            }
        };
    
      
        const cancelBooking = async (bookingId) => {
            try {
                const confirmCancel = window.confirm('Are you sure you want to cancel this booking?'); 
                if (!confirmCancel) return; 
    
                const bookingToCancel = allBookings.find(booking => booking.booking_refid === bookingId); 
                await axios.post('http://localhost:8088/api-v1', bookingToCancel); 
    
               
                const updatedBookings = allBookings.map(booking => {
                    if (booking.booking_refid === bookingId) {
                        return { ...booking, status: 'Cancelled', refund_status: 'Refunded' };
                    }
                    return booking;
                });
    
                setAllBookings(updatedBookings); 
            } catch (error) {
                console.error('Error cancelling booking:', error); 
            }
        };
    
        useEffect(() => {
            getAllBookings(); 
        }, []);
  
    return(
        <>
         <div className="containern" style={{ backgroundColor: "lightgray", width: "42cm", minHeight: "100vh", minWidth: "195vh" }}>
                <div className="header1">
                    <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm",borderRadius:"50%" }}></img><br />
                    <h2 style={{ float: "inline-start", marginLeft: "1cm" }}><b>Hotel Name</b></h2>
                    <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1.5cm", marginBottom: "0" }}><b>Nikhil Tammineedi</b></h4>
                   <div style={{marginTop:"-1.4cm"}}>
                    <img src="https://www.freeiconspng.com/uploads/profile-icon-9.png" alt="loading.." style={{width:"1cm",height:"50px",marginLeft:"40.5cm",marginTop:"-1cm"}}/><br/><br/>
                    </div>
                    <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1.5cm" }}><b>id:2484</b></h5>
                </div>
                <div className="navbar30" style={{ display: "flex", justifyContent: "center", backgroundColor: "black", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "42cm" }}>
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
                    
                    <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger", transition: "background-color 0.3s" }}>
                        <a href="/LoginCard" style={{ color: "whitesmoke", textDecoration: "none" }}>Sign-Out</a>
                    </li>
                   
                </ul>
                
            </div>
        
        
            <div className="menu-icon hover-effect" onClick={toggleMenu} style={{ position: "absolute", top: "5.8cm", right: "1.5cm", color: "whitesmoke", zIndex: "1000" }}>
                {isMenuOpen ? <span>&#x2715;</span> : <span> &#9776;</span>}
            </div>

                
                
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
            <div className="book">
                <h3 style={{marginTop:"1cm",marginLeft:"1cm"}}><b>My Bookings</b></h3><br/>
                <div className="card_n" style={{width:"42cm",backgroundColor:"whitesmoke",border:"1px solid black",float:"left",marginLeft:"-0.3cm",height:"10cm"}}>
                    <div className="card-body">
                        <h5 style={{marginLeft:"1cm"}}><b>Recent Bookings{'\t'}:{'\t'}</b></h5><br/>
                        <table style={{width:"40cm",marginLeft:"0.7cm"}}>
                        <thead>
                                    <tr>
                                        
                                        <th>customer_Id</th>
                                        <th>Booking_refid</th>
                                        <th>Customer_name</th>
                                        <th>Mobile.No</th>
                                        <th>Email_id</th>
                                        <th>Booking_type</th>
                                        <th>Adults</th>
                                        <th>Children</th>
                                        <th>Addons</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                      
                                        {allBookings.some(booking => booking.status === 'Cancelled') && <th>Refund_status</th>}
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                    {allBookings.map((booking, index) => (
                                        <tr key={index}>
                                            {/* Table data cells */}
                                            <td>{booking.customerid}</td>
                                            <td>{booking.booking_refid}</td>
                                            <td>{booking.customername}</td>
                                            <td>{booking.mobileno}</td>
                                            <td>{booking.emailid}</td>
                                            <td>{booking.booking_type}</td>
                                            <td>{booking.adults}</td>
                                            <td>{booking.children}</td>
                                            <td>{booking.aadons}</td>
                                            <td>{booking.amount}</td>
                                            <td>{booking.date}</td>
                                            {/* Render status in red if it's "Cancelled" */}
                                            <td style={{ color: booking.status === 'Cancelled' ? 'red' : 'inherit' }}>{booking.status}</td>
                                            {/* Conditionally render Refund Status cell */}
                                            {booking.status === 'Cancelled' && <td>{booking.refund_status}</td>}
                                            {/* Cancel button */}
                                            <td>
                                                <button type="button" className="btn btn-light" onClick={() => cancelBooking(booking.booking_refid)} disabled={booking.status === 'Cancelled'} style={{backgroundColor:"red"}}>
                                                    Cancel
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Back button */}
                    <Link to={'/Customerdashboard'}>
                        <button type="submit" className="btn btn-light" style={{ marginTop: "1cm", marginLeft: "1cm", backgroundColor: "black", color: "whitesmoke" }}><b>Back</b></button>
                    </Link>

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
        </>
    )
}
export default Mybookings;