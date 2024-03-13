import React, { useState, useEffect } from "react";
import axios from "axios";
import './Booknow.css';
import './Customerdashboard.css'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Booknow() {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    roomtype:"",
    checkinDate: "",
    checkoutDate: "",
    adults: "",
    children: "",
    extrabeds: false,
    totalPrice:'',
    gstPercentage:'',
    discountPercentage:'',
    nettotal:'', // Ensure nettotal field is initialized
    disclaimer: false,
  });
  const [checkboxError, setCheckboxError] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceDetails, setPriceDetails] = useState({
    basePricePerAdult: 800, // Define your base price for adults
    basePricePerChild: 500, // Define your base price for children
    gstPercentage: 0.18,
    discountPercentage: 0.1,
  });

  useEffect(() => {
    calculateTotalPrice();
  }, [formData, priceDetails]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name === "checkinDate") {
      const checkinDate = new Date(value);
      const checkoutDate = new Date(checkinDate.getTime() + (24 * 60 * 60 * 1000)); // Add 24 hours
      setFormData({ ...formData, [name]: value, checkoutDate: checkoutDate.toISOString().split('T')[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateTotalPrice = () => {
    const { basePricePerAdult, basePricePerChild, gstPercentage, discountPercentage } = priceDetails;
    const { adults, children } = formData;

    const adultsPrice = adults * basePricePerAdult;
    const childrenPrice = children * basePricePerChild;
    let totalPriceBeforeDiscount = adultsPrice + childrenPrice;

    totalPriceBeforeDiscount *= 1 - discountPercentage;

    const totalPriceAfterGST = totalPriceBeforeDiscount * (1 + gstPercentage);

    setTotalPrice(totalPriceAfterGST);
    
    // Calculate net total and update formData
    const netTotal = totalPriceAfterGST; // Assuming net total is same as total price
    setFormData(prevFormData => ({ ...prevFormData, nettotal: netTotal }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const checkin = new Date(formData.checkinDate);
    const checkout = new Date(formData.checkoutDate);

    if (checkin > currentDate || checkout < currentDate) {
      setCheckboxError("Check-in and check-out dates should be present or greater than today's date");
      return;
    }

    if (!formData.checkinDate || !formData.checkoutDate) {
      setCheckboxError("Please enter both check-in and check-out dates");
      return;
    }

    if (checkout <= checkin) {
      setCheckboxError("Check-out date must be after check-in date");
      return;
    }

    try {
      await axios.post("http://localhost:8080/save", formData); // Send formData including nettotal
      setBookings([...bookings, formData]);
      setCheckboxError("");

      // Clear form data after successful submission
      setFormData({
        roomtype:"",
        checkinDate: "",
        checkoutDate: "",
        adults: "",
        children: "",
        extrabeds: false,
        totalPrice:'',
        gstPercentage:'',
        discountPercentage:'',
        nettotal:'', // Clear nettotal too
        disclaimer: false,
      });

      calculateTotalPrice(); // Recalculate total price after form reset

      alert(`Total Price: ₹${totalPrice.toFixed(2)} Net Total: ₹${totalPrice.toFixed(2)}`);

    } catch (error) {
      console.error("Error submitting booking:", error.message);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedFormData = { ...formData, [name]: checked };
    setFormData(updatedFormData);
    calculateTotalPrice(updatedFormData);
    if (name === "extrabeds") {
      const updatedPriceDetails = {
        ...priceDetails,
        basePricePerAdult: checked ? 1000 : 800, // Adjust the base price per adult if extrabeds are selected
      };
      setPriceDetails(updatedPriceDetails);
    }
  };
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="containern" style={{ backgroundColor: "#e9e3e3", width: "40.2cm", minHeight: "100vh", minWidth: "195vh" }}>
                <div className="header1">
                    <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm",borderRadius:"50%" }}></img><br />
                    <h2 style={{ float: "inline-start", marginLeft: "1cm",color:"rgb(70, 69, 69)" }}><b>Hotel Name</b></h2>
                    <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1.5cm", marginBottom: "0" ,color:"rgb(70, 69, 69)"}}><b>Nikhil Tammineedi</b></h4>
                   <div style={{marginTop:"-1.4cm"}}>
                    <img src="https://www.freeiconspng.com/uploads/profile-icon-9.png" alt="loading.." style={{width:"1cm",height:"50px",marginLeft:"38.7cm",marginTop:"-1cm"}}/><br/><br/>
                    </div>
                    <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1.5cm" }}><b>id:2484</b></h5>
                </div>
                <div className="navbar30" style={{ display: "flex", justifyContent: "center", backgroundColor: "rgb(70, 69, 69)", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "40.2cm" }}>
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
                
       <div className="main-content">
                <div className="booknow" style={{ height: "33cm", marginTop: "2cm" }}>
                    <form onSubmit={handleSubmit} style={{ width: "60%", textAlign: "center" }}>
                        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "500px" }}>
                            
                        <label htmlFor="roomtype" style={{fontSize:"x-large",marginLeft:"0.5cm"}}><b>Room Type :{'\t'}</b></label><br/>
                      <select id="roomtype" name="roomtype" onChange={handleInputChange} style={{marginLeft:"4.9cm",width:"10cm"}}>
                        <option value="">SELECT ROOM TYPE</option>
                        <option value="Premium Room">Premium Suite</option>
                        <option value="Luxury Suite">Deluxe Suite</option>
                        <option value="Deluxe Room">Classic Deluxe </option> 
                      </select>
                   </div><br/><br/>
                           
                            <label style={{fontSize:"x-large",marginLeft:"1.5cm"}}><b>Check-In Date{'\t'}:{'\t'}</b></label><br/>
                            <div className="check1" style={{marginTop:"0cm",marginLeft:"3.7cm"}}>
                            <input type="date" name="checkinDate" value={formData.checkinDate} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} required style={{marginLeft:"3cm",width:"10cm"}} /></div><br/><br/>
                          
                            <label style={{fontSize:"x-large",marginLeft:"2cm"}}><b>Check-Out Date:</b></label><br/>
                            <div  className="check1" style={{marginTop:"0cm",marginLeft:"-1.2cm"}}>
                            <input type="date" name="checkoutDate" value={formData.checkoutDate} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} required  style={{marginLeft:"8cm",width:"10cm"}}/></div><br/><br/>
                           
                            <label style={{fontSize:"x-large",marginLeft:"-1cm"}}><b>Adults:</b></label><br/>
                            <div   className="check1"style={{marginTop:"0cm",marginLeft:"8.8cm",width:"12.3cm"}}>
                            <input type="number" name="adults" placeholder="Enter Adults" value={formData.adults} onChange={handleInputChange} max={2} style={{width:"10cm"}} 
                            /></div>
                            <div className="check1" style={{color:"black",marginLeft:"0.3cm"}}>Price per adult:<p style={{marginTop:"-0.63cm",marginLeft:"5cm"}}><b>₹{priceDetails.basePricePerAdult.toFixed(2)}</b></p> </div><br/>
                           
                            <label  style={{fontSize:"x-large",marginLeft:"-0.5cm"}}><b>Children:</b></label>
                            <div  style={{marginTop:"0cm",marginLeft:"1cm",width:"10cm"}}>
                            <input style={{marginLeft:"8.8cm",width:"10cm"}}
                                type="number"
                                name="children"
                                placeholder="Enter Children"
                                value={formData.children}
                                onChange={handleInputChange}
                                max={2}
                                
                            /></div>
                            <div  className="check1"style={{color:"black",marginLeft:"0.2cm"}}>Price per child: <p style={{marginTop:"-0.63cm",marginLeft:"5cm"}}><b>₹{priceDetails.basePricePerChild.toFixed(2)}</b></p></div><br/>
                            {/* Extra beds checkbox */}
                            <label>
                                <input type="checkbox" name="extrabeds" checked={formData.extrabeds} onChange={handleCheckboxChange}  style={{marginLeft:"-1.5cm"}}/>
                                <p style={{marginLeft:"1cm",marginTop:"-0.7cm"}}><b>Extra bed</b></p>
                            </label><br/>
                            {/* Disclaimer checkbox */}
                            <div  className="check1">
                                <label>
                                <input type="checkbox" name="disclaimer" checked={formData.disclaimer} onChange={handleInputChange} required  style={{marginLeft:"-1.5cm"}}/>
                                    <p style={{marginLeft:"1.5cm",marginTop:"-0.7cm"}}><b>Disclaimer</b></p>
                                </label>
                                {formData.disclaimer && (
                              <div style={{ border: '1px solid black', padding: '5px', marginTop: '-1px',marginLeft:"8cm" }}>
                                <p>Your use of any information or materials on this website is entirely at your own risk,
                                  for which we shall not be liable. It shall be absolutely your own responsibility to ensure that any products,
                                  services or information available through this website meet your specific requirements.</p>
                              </div>
                            )}
                            </div><br/>
                            {/* Error message */}
                            {checkboxError && <div  className="check1" style={{ color: "red" }}>{checkboxError}</div>}
                            {/* Submit button */}
                            
                            <button type="submit"  style={{ padding: "0.5rem 1rem", marginTop: "1rem", backgroundColor: "rgb(70, 69, 69)", color: "white", border: "none", borderRadius: "5px", cursor: "pointer",marginLeft:"10cm" }}>Pay Now</button>
                            <br/>
                            <Link to="/PaymentForm" style={{ textDecoration: 'none' }}>
                            <button type="submit" style={{marginTop:"1cm",marginLeft:"10cm"}}>Go To Booking History</button>
                          </Link>
                            {/* Total price and other details */}
                            <div style={{ marginTop: "1rem", textAlign: "left" }}>
                                <div  className="check1"style={{marginTop:"1cm",marginLeft:"9cm"}}><b>Total Price: ₹{totalPrice.toFixed(2)}</b></div>
                                <div  className="check1"style={{marginLeft:"9cm"}}><b>GST: {priceDetails.gstPercentage * 100}%</b></div>
                                <div className="check1" style={{marginLeft:"9cm"}}><b>Discount: {priceDetails.discountPercentage * 100}%</b></div>
                                <div  className="check1"style={{marginLeft:"9cm"}}><b>Net Total: ₹{totalPrice.toFixed(2)}</b></div>
                            </div>
                            </form>
                        </div>
                    
                    
                    {/* Display bookings */}
                    <div  className="display" style={{ marginLeft:"5cm" }}>
                       
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {bookings.map((booking, index) => (
                                <li key={index} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem", borderRadius: "5px" }}>
                                    <p>Room type: {booking.roomtype}</p>
                                    <p>Check-In: {booking.checkinDate}, Check-Out: {booking.checkoutDate}</p>
                                    <p>Adults: {booking.adults}, Children: {booking.children}</p>
                                    <p>Extrabeds: {booking.extrabeds ? "Yes" : "No"}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div><br/>
                
                <Link to={'/Customerdashboard'}>
                  <button type="submit" className="btn" style={{backgroundColor:"rgb(70, 69, 69)",color:"whitesmoke",marginLeft:"5cm",marginTop:"-3cm"}}><b>Back</b></button>
                </Link>
                
                <div className="footercontent" style={{backgroundColor:"rgb(70, 69, 69)",width:"40cm",marginLeft:"-0.3cm",height:"6cm",marginTop:"1cm"}}><br/>
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
  );
}

export default Booknow;
