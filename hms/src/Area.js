import "./Area.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Area(){
  const currentDate = new Date();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [customerData, setCustomerData] = useState(null);
    
  const fetchCustomerData = async () => {
   try {
     const response = await axios.get('http://localhost:8081/api-v1/customerid/2484');
     setCustomerData(response.data);
   } catch (error) {
     console.error('Error fetching customer data:', error);
   }
 };

 // useEffect to fetch data when the component mounts
 useEffect(() => {
    fetchCustomerData();
 }, []);

return(
<>
<div className="containern" style={{ backgroundColor: "lightgray", width: "40.2cm", minHeight: "100vh", minWidth: "195vh" }}>
                
                <div>
          <h3 className="customerabac" style={{ marginTop: "0cm", marginLeft: "8.5cm" }}>Date: {formattedDate} </h3>
          <br />
          <h3 className="customersabac" style={{ marginTop: "0cm", marginLeft: "8.5cm" }}>Time: {formattedTime}</h3>
        </div>
                    <div className="header1" style={{marginTop:"-0.5cm"}}>
                        <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm",borderRadius:"50%" }}></img><br />
                        <h2 style={{ float: "inline-start", marginLeft: "1cm" }}><b>Hotel Name</b></h2>
                        <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1.5cm", marginBottom: "0" }}><b>
                             {customerData && (
                                    <>
                                    {customerData.customername}
                                    </>
                                )}</b></h4>
                       <div style={{marginTop:"-1.4cm"}}>
                        <img src="https://www.freeiconspng.com/uploads/profile-icon-9.png" alt="loading.." style={{width:"1cm",height:"50px",marginLeft:"38.7cm",marginTop:"-1cm"}}/><br/><br/>
                        </div>
                        <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1.5cm" }}><b>Id:
                        {customerData && (
                                    <>
                                    {customerData.customerid}
                                    </>
                                )}</b></h5>
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
    
 <div class="containerarea" style={{padding:"70px",marginTop:"4cm",marginLeft:"2cm"}}>
    <div class="cardarea">
      <img src="https://images.unsplash.com/photo-1562644296-23b1879b73e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFuZGklMjBoaWxscyUyQyUyMGluZGlhfGVufDB8fDB8fHww" alt="Card Image 1"></img>
      <div class="cardarea-content">
        <div class="cardarea-title">Nandhi Hills</div>
        <div class="cardarea-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>

    <div class="cardarea">
      <img src="https://i.pinimg.com/originals/0f/44/34/0f44347c1961308b75c7aef63affe5a0.jpg" alt="Card Image 2"></img>
      <div class="cardarea-content">
        <div class="cardarea-title">Chikkaballapur Isha Foundation</div>
        <div class="cardarea-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>

    <div class="cardarea">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hogenakkal_Falls_Close.jpg" alt="Card Image 3"></img>
      <div class="cardarea-content">
        <div class="cardarea-title">Hogenakkal Falls</div>
        <div class="cardarea-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>

    {/* <div class="card">
      <img src="https://im.indiatimes.in/content/2023/Nov/stone-chariot-hampi-tourism-entry-fee-timings-holidays-reviews-header_654dddba5fdf9.jpg?w=1200&h=900&cc=1" alt="Card Image 4"></img>
      <div class="card-content">
        <div class="card-title">Hampi</div>
        <div class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div> */}
<div class="cardarea">
      <img src="https://live.staticflickr.com/2831/33041439210_11bbf6bb21_b.jpg" alt="Card Image 6"></img>
      <div class="cardarea-content">
        <div class="cardarea-title">Mysore Palace</div>
        <div class="cardarea-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>
    
  </div>
  <Link to={'/Customerdashboard'}>
                <button type="submit" className="btn btn-light" style={{marginTop:"10cm",marginLeft:"2cm",backgroundColor:"black",color:"whitesmoke"}}><b>Back</b></button>
                </Link>
  </div>
  <div className="footercontent" style={{backgroundColor:"black",width:"40.4cm",marginLeft:"-0.3cm",height:"6cm",marginTop:"auto"}}><br/>
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
                <div className="footercontent2" style={{backgroundColor:"whitesmoke",width:"40.55cm",marginLeft:"-0.5cm"}}>
                <div class="footer__bar" >
                © 2023-2024 Anarghya Communications. All Rights Reserved.
                </div>
                </div>
</>
);
}
export default Area;