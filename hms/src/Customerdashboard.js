import {useState, React, useEffect} from "react";
import './Customerdashboard.css'; 
import axios from "axios";
import { Link } from "react-router-dom";

function Customerdashboard() {
     
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleCheckInChange = (event) => {
        setCheckInDate(event.target.value);
        const selectedCheckInDate = new Date(event.target.value);
        const nextDay = new Date(selectedCheckInDate);
        nextDay.setDate(selectedCheckInDate.getDate() + 1);
        setCheckOutDate(nextDay.toISOString().split('T')[0]);
    }
    
   const handleCheckOutChange = (event) => {
    const selectedCheckOutDate = new Date(event.target.value);
    const selectedCheckInDate = new Date(checkInDate);


    const maxSelectableDate = new Date(selectedCheckInDate);
    maxSelectableDate.setDate(selectedCheckInDate.getDate() + 1);

   
    if (selectedCheckOutDate >= selectedCheckInDate && selectedCheckOutDate <= maxSelectableDate) {
        setCheckOutDate(event.target.value);
    } else {
       
        setCheckOutDate(maxSelectableDate.toISOString().split('T')[0]);
    }
};

    const isAvailabilityButtonDisabled = !checkInDate || !checkOutDate;

    const handleSubmit = () => {
        alert("Checking the availability!");
    }
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
  
  const [customerData, setCustomerData]=useState(''); 
  const fetchCustomerData = async () => {
   try {
     const response = await axios.get('http://localhost:8081/api-v1/customerid/2484');
     setCustomerData(response.data);
   } catch (error) {
     console.error('Error fetching customer data:', error);
   }
 };


 useEffect(() => {
    fetchCustomerData();
 }, []);

    const currentDate = new Date();
  
 
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    return (
        <>
            <div className="containern" style={{ backgroundColor: "#e9e3e3", width: "40.2cm", minHeight: "100vh", minWidth: "195vh" }}>
            

            <div>
      <h3 className="customerabac" style={{ marginTop: "0cm", marginLeft: "8.5cm" }}>Date: {formattedDate} </h3>
      <br />
      <h3 className="customersabac" style={{ marginTop: "0cm", marginLeft: "8.5cm" }}>Time: {formattedTime}</h3>
    </div>

        <div class="highlighted-blink" style={{marginLeft:"12cm",marginTop:"3.5cm",fontSize:"larger"}}>
    <span class="blinking-star">*</span>
    <span class="blinking-text">Welcome to our Hotel! Make your stay more rewarding</span>
    <span class="blinking-star">*</span>
    </div>

    
                <div className="header1" style={{marginTop:"-5cm"}}>
                    <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm",borderRadius:"50%" }}></img><br />
                    <h2 style={{ float: "inline-start", marginLeft: "1cm",color:"grey" }}><b>Hotel Name</b></h2>
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
                
                <div className="navbar30" style={{ display: "flex", justifyContent: "center", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "40.2cm" }}>
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
                    <div className="menu30" style={{ position: "absolute", bottom:"1", right: "0", backgroundColor: " rgb(70, 69, 69)", zIndex: "999", width: "250px", padding: "10px" ,marginRight:"0.25cm",height:"10cm",color:"whitesmoke"}}>
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

                     <div className="content30" >
                    
                    <div className="card30" style={{ width: "8cm", float: "inline-start", backgroundColor: "white", border: "0.5px solid black", height: "9cm" }}>
                        <div className="card-body30" >
                            <h3 style={{ marginTop: "0.5cm", marginLeft: "0.5cm" }}><b>Search</b></h3><br />
                            <label style={{ marginLeft: "0.5cm" }}><b>Check-in: </b></label><br />
                            <input type="date" style={{ width: "6cm", marginLeft: "0.5cm" }}
                                placeholder="Check-In Date" onChange={handleCheckInChange} value={checkInDate} min={new Date().toISOString().split('T')[0]} /><br />

                            <label style={{ marginTop: "0.3cm", marginLeft: "0.5cm" }}><b>Check-out</b></label><br />
                            <input type="date" style={{ width: "6cm", marginLeft: "0.5cm" }}
                                placeholder="Check-Out Date" onChange={handleCheckOutChange} value={checkOutDate} min={checkOutDate} /><br /><br />
                            
                            <Link to={isAvailabilityButtonDisabled ? '#' : '/Checkavailability'}>
                                <button type="button" style={{ marginLeft: "1.5cm" }} onClick={handleSubmit} disabled={isAvailabilityButtonDisabled}><b>Check Availability</b></button><br />
                            </Link>

                           
                            <p style={{ color: "red", opacity: "0.8", marginTop: "0.3cm",fontSize:"small", marginLeft:"0.5cm" }}>
                                <b>Note:</b> Only 2 Adults & 1 or 2 children are allowed for 1 Room...
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="img30">
                        <img src="https://i.pinimg.com/originals/20/07/d6/2007d6dd4ca8f4b527d19c7baaefab7e.jpg" alt="loading.." style={{ width: "32.2cm", marginLeft: "0cm", height: "18cm" }} />
                    </div>

                    <div className="gif-container">
                        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzd1eTdjbWI0aHhsMXgzcnYwNWp4N3pqODU5ZzJsM2ZtbnJ0ajJkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPbirbfL6lTO3YI/giphy.gif" alt="loading..." style={{ width: "8cm", height: "9cm", marginTop: "-9cm" }} />
                    </div>

                    <div class="info" style={{ width: "8cm", margin: "auto" }} id="info">
                        <div class="info-body">
                            <h2 style={{ marginTop: "1cm",marginLeft:"-15cm" }}><b>Exclusive Experience Awaits You</b></h2>
                            <p style={{marginLeft:"-15cm",marginTop:"2cm"}}>
                                Welcome to Exquisite Paradise Hotel, where luxury meets comfort. Our hotel is designed to provide you with an unforgettable experience, whether you're here for business or leisure.
                            </p>
                            <p style={{marginLeft:"-15cm",marginTop:"1cm"}}>
                                <b>Indulge in Elegance:</b> Our beautifully appointed rooms and suites offer a perfect blend of sophistication and modern amenities. Enjoy breathtaking views and plush accommodations during your stay.
                            </p>
                            <p style={{marginLeft:"-15cm"}}>
                                <b>Culinary Delights:</b> Savor the finest cuisines at our on-site restaurants. From gourmet dishes to local flavors, our chefs create culinary masterpieces that will tantalize your taste buds.
                            </p>
                            <p style={{marginLeft:"-15cm"}}>
                                <b>Relax and Unwind:</b> Dive into luxury with our spa and wellness services. Pamper yourself with rejuvenating treatments, and unwind in our state-of-the-art facilities.
                            </p>
                            <p style={{marginLeft:"-15cm"}}>
                                <b>Explore the Surroundings:</b> Conveniently located near popular attractions, our hotel offers easy access to the city's best landmarks and entertainment venues.
                            </p>
                            <img src="https://img.freepik.com/free-photo/hammocks-umbrellas-arranged-rows_1203-181.jpg?w=2000&t=st=1706870931~exp=1706871531~hmac=3aaa56997b7c3eafa131d45eeab439d989f13cdd217deafd0bb5a4d24ad2de87" alt="loading.." style={{width:"12.5cm",height:"10cm",marginLeft:"10cm",marginTop:"-10cm",borderRadius:"30%"}}/>
                        </div>
                    </div>
                    <div className="img3" id="addons">
                        <input type="text" placeholder="&#9749; Breakfast" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
                        <input type="text" placeholder="&#127860; Restaurant" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
                        <input type="text" placeholder="&#128663; Parking" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
                        <input type="text" placeholder="&#128705; Bathtub" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
                        <input type="text" placeholder="&#128169; Central Air Conditioner" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
                        <input type="text" placeholder="💆‍♀️ Spa" style={{ width: "6cm", height: "1cm", marginLeft: "0.4cm", marginTop: "0.5cm" }} readOnly />
                        <input type="text" placeholder="🎉 Function Hall" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
                        <input type="text" placeholder="🎮 Games" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
                        <input type="text" placeholder="&#128246; Free WiFi" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
                        <input type="text" placeholder="&#127947; Fitness Center" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
                        <input type="text" placeholder="&#127866; Room Service" style={{ width: "6cm", height: "1cm", marginLeft: "0.4cm", marginTop: "0.4cm" }} readOnly />
                        <input type="text" placeholder="&#128166; Swimming Pool" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
                    </div><br/><br/>

                    <div className="content31" id="rooms">
                        <h2 style={{marginLeft:"0.5cm"}}><b>Available Rooms</b></h2><br/>
                        <Link to={'/Premiumsuite'}>
                        <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                        <div className="cardbody" style={{backgroundImage:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                            <h3 style={{marginTop:"1cm", marginLeft:"1cm",backgroundImage:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)",color
                        :"whitesmoke"}}><b>Premium Suite</b></h3>
                           <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
                        </div>
                    </div>
                    </Link><br/>
                    <Link to={'/Deluxesuite'}>
                    <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                    <div className="cardbody" style={{backgroundImage:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                          
                            <h3 style={{marginTop:"1cm", marginLeft:"1cm",color:"whitesmoke"}}><b>Deluxe Suite</b></h3>
                            <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
                      
                             </div>
                    </div></Link><br/>
                    <Link to={'/Classicdeluxe'}>
                    <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                    <div className="cardbody" style={{backgroundImage:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                          
                            <h3 style={{marginTop:"1cm", marginLeft:"1cm",color:"whitesmoke"}}><b>Classic  Deluxe</b></h3>
                           <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
                        </div>
                    </div></Link><br/>
                    <Link to={'/Banquethalls'}>
                    <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                    <div className="cardbody" style={{backgroundImage:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                          
                            <h3 style={{marginTop:"1cm", marginLeft:"1cm",color:"whitesmoke"}}><b>Banquet Hall</b></h3>
                           <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
                        </div>
                    </div></Link><br/>
                    <Link to={'/Seminarhalls'}>
                    <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                    <div className="cardbody" style={{backgroundImage:"url(https://img.freepik.com/free-vector/pink-halftone-background_53876-91650.jpg?t=st=1709126042~exp=1709129642~hmac=9b1c5ecc99edfe42fddf59c15fdf0d78384a3dc9ebb517ddaea36f6bc762492a&w=1060)"}}>
                      
                            <h3 style={{marginTop:"1cm", marginLeft:"1cm",color:"whitesmoke"}}><b>Seminar Hall</b></h3>
                           <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
                        </div>
                    </div></Link><br/>
                        <div className="areainfo">
                            <h2 style={{marginLeft:"1cm"}}><b>Rules & Regulations</b></h2>
                            <div class="card32" style={{marginLeft:"0.5cm",width:"38.5cm",height:"34cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
                            <div class="card-body32">
                                
                                 <p class="card-text" style={{float:"inline-start",marginTop:"2cm",marginLeft:"2cm"}}><b>Check-In:</b></p><br/>
                                 <p className="card-text" style={{float:"inline-end",marginTop:"1.4cm",marginRight:"25cm"}}> From 12:00</p><br/><hr style={{marginTop:"2cm"}}/>
                                 <p class="card-text" style={{float:"inline-start",marginLeft:"2cm",marginTop:"1cm"}}><b>Check-Out:</b></p>
                                 <p className="card-text" style={{float:"inline-end",marginTop:"1cm",marginRight:"25.3cm"}}> Until 11:00</p><br/><hr style={{marginTop:"1.5cm"}}/>
                                 <p class="card-text" style={{float:"inline-start",marginLeft:"2cm",marginTop:"1cm"}}><b>Cancellation/prepayment:</b></p><br/>
                                 <p class="card-text" style={{float:"inline-end",marginTop:"0.4cm",marginRight:"10.4cm"}}>Cancellation and prepayment policies vary according to accommodation type. </p><br/><hr style={{marginTop:"1cm"}}/>
                                 <p class="card-text" style={{float:"inline-start",marginLeft:"2cm",marginTop:"1cm"}}><b>Children and Beds:</b></p><br/>
                                 <p class="card-text" style={{float:"inline-end",marginRight:"24.3cm",marginTop:"0.4cm"}}><b>Child policies</b></p><br/>
                                 <p class="card-text" style={{float:"inline-end",marginRight:"-7.1cm",marginTop:"1cm"}}>Children of any  age are welcome.</p><br/>
                                 <p class="card-text" style={{float:"inline-end",marginRight:"12.55cm"}}>Children 18 years are above will be charged as adults at this property.</p><br/>
                                 <p class="card-text" style={{float:"inline-end",marginRight:"4.5cm"}}>see correct prices and occupancy information, please add number of children in your group and their ages.</p><br/><br/>
                                 <p class="card-text" style={{float:"inline-end",marginTop:"1.5cm",marginRight:"-5.7cm"}}><b>Cot and extra bed policies</b></p><br/>
                                 <div class="card34" style={{marginTop:"2.5cm",width:"18cm",marginLeft:"11.2cm",height:"3cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
                                    <div class="card-body34">
                                        <p  style={{marginLeft:"2cm", marginTop:"0.2cm"}}><b>0 - 8 years</b></p><hr/>
                                        <p style={{float:"left", marginLeft:"1cm"}}>Extra Bed upon request</p>
                                        <p style={{float:"right",marginRight:"5cm",fontSize:"larger"}}><b>Free</b></p>
                                    </div>
                                 </div><br/>
                                 <div class="card35" style={{width:"18cm",marginLeft:"11.2cm",height:"3cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
                                    <div class="card-body35">
                                        <p style={{marginLeft:"2cm", marginTop:"0.2cm"}}><b> 9+ years</b></p><hr/>
                                        <p style={{float:"left", marginLeft:"1cm"}}>Extra Bed upon request</p>
                                        <p style={{float:"right",marginRight:"0.5cm"}}><b>Rs.800 per person,per night</b></p>
                                    </div>
                                 </div>
                                <p class="card-text" style={{marginLeft:"11.2cm",marginTop:"1cm"}}>Prices for extra beds are not included in the total price, and will have to be paid for separately during your stay.</p>

                                    <p class="card-text" style={{marginLeft:"11.2cm"}}>The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.</p>

                                    <p class="card-text" style={{marginLeft:"11.2cm"}}>There are no cots available at this property.</p>

                                    <p class="card-text" style={{marginLeft:"11.2cm"}}>All extra beds are subject to availability.</p><hr/>

                                    <p class="card-text" style={{float:"inline-start",marginTop:"1cm",marginLeft:"2cm"}}><b>No Age Restriction:</b></p><br/>
                            <p class="card-text" style={{float:"inline-end",marginRight:"18.8cm",marginTop:"0.4cm"}}>There is no age restrictions for check-In.</p><br/><hr style={{marginTop:"1cm"}}/>
                            <p class="card-text" style={{float:"inline-start",marginTop:"0.5cm",marginLeft:"2cm"}}><b>Pets:</b></p><br/>
                            <p class="card-text" style={{float:"inline-end",marginRight:"22.9cm"}}>Pets are not Allowed</p><br/>
                            </div>
                            </div><br/><br/>
                            <div className="content33" id="areainfo">
                                <h2 style={{marginLeft:"1cm"}}><b>Hotel Surrondings</b></h2>
                                < div class="card35" style={{width:"38.5cm",marginLeft:"0.5cm",height:"10cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
                                    <div class="card-body35">
                                        <p style={{marginLeft:"2.5cm",marginTop:"0.5cm"}}>Nandhi Hills</p><br/>
                                                <p style={{marginLeft:"2.5cm"}}>Chikkaballapur Isha Foundation</p><br/>
                                               <p style={{marginLeft:"2.5cm"}}> Hogenakkal Falls</p><br/>
                                                <p style={{marginLeft:"2.5cm"}}>Hampi</p><br/>
                                                <p style={{marginLeft:"2.5cm"}}>Mysore Palace</p><br/>
                                                <p style={{marginLeft:"2.5cm"}}>Dodda Aalada Mara</p><br/>
                                                <p  style={{marginLeft:"14cm",marginTop:"-10.2cm"}}>Bannerghatta Biological Park</p><br/>
                                                <p style={{marginLeft:"14cm"}}>Mekedatu</p><br/>
                                                <p style={{marginLeft:"14cm"}}>Balmuri and Edmuri waterfalls</p><br/>
                                                <p style={{marginLeft:"14cm"}}>Anthargange</p><br/>
                                                <p style={{marginLeft:"14cm"}}>Bannerghatta National Park</p><br/>
                                                <p style={{marginLeft:"14cm"}}>Manchinbele</p><br/>
                                                <p style={{marginLeft:"25cm",marginTop:"-10.2cm"}}>Devanahalli Fort</p><br/>
                                                <p style={{marginLeft:"25cm"}}>Janapada Loka </p><br/>
                                                <p style={{marginLeft:"25cm"}}>Skandagiri</p><br/>
                                                <p style={{marginLeft:"25cm"}}>Bheemeshwari Adventure and Nature Camp</p><br/>
                                                <p style={{marginLeft:"25cm"}}>shilhaandra Resort</p><br/>
                                                <p style={{marginLeft:"25cm"}}>Sri Someshwara swamy Temple</p>
                                               
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div><br/>

                    
                </div><br/>
                <div className="footercontent" style={{backgroundColor:"rgb(70, 69, 69)",width:"40.4cm",marginLeft:"-0.3cm",height:"6cm",marginTop:"-0.6cm"}}><br/>
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
    )
}

export default Customerdashboard;

// import {useState, React, useEffect} from "react";
// import './Customerdashboard.css'; 
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Customerdashboard({currentUser}) {
     
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');

//     const handleCheckInChange = (event) => {
//         setCheckInDate(event.target.value);
//         const selectedCheckInDate = new Date(event.target.value);
//         const nextDay = new Date(selectedCheckInDate);
//         nextDay.setDate(selectedCheckInDate.getDate() + 1);
//         setCheckOutDate(nextDay.toISOString().split('T')[0]);
//     }
//     // const handleCheckOutChange = (event) => {
//     //     setCheckOutDate(event.target.value);
//     // };
//     // const handleCheckOutChange = (event) => {
//     //     const selectedCheckOutDate = new Date(event.target.value);
//     //     const selectedCheckInDate = new Date(checkInDate);
    
//     //     // Calculate the maximum selectable date for check-out (2 days after check-in)
//     //     const maxSelectableDate = new Date(selectedCheckInDate);
//     //     maxSelectableDate.setDate(selectedCheckInDate.getDate() + 1);
    
//     //     // If the selected date is within the allowable range, update the checkout date state
//     //     if (selectedCheckOutDate >= selectedCheckInDate && selectedCheckOutDate <= maxSelectableDate) {
//     //         setCheckOutDate(event.target.value);
//     //     } else {
//     //         // Otherwise, set the checkout date to the maximum selectable date
//     //         setCheckOutDate(maxSelectableDate.toISOString().split('T')[0]);
//     //     }
//     // };
//     const handleCheckOutChange = (event) => {
//         const selectedCheckOutDate = new Date(event.target.value);
//         const selectedCheckInDate = new Date(checkInDate);
    
//         // Calculate the maximum selectable date for check-out (2 days after check-in)
//         const maxSelectableDate = new Date(selectedCheckInDate);
//         maxSelectableDate.setDate(selectedCheckInDate.getDate() + 1);
    
//         // If the selected date is within the allowable range, update the checkout date state
//         if (selectedCheckOutDate >= selectedCheckInDate && selectedCheckOutDate <= maxSelectableDate) {
//             setCheckOutDate(event.target.value);
//         } else {
//             // Otherwise, set the checkout date to the maximum selectable date
//             setCheckOutDate(maxSelectableDate.toISOString().split('T')[0]);
//         }
//     };
    
    

//     const isAvailabilityButtonDisabled = !checkInDate || !checkOutDate;

//     const handleSubmit = () => {
//         alert("Checking the availability!");
//     }
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setMenuOpen(!isMenuOpen);
//     };
  
  
//     const [customerData, setCustomerData] = useState({
//         customername:'',
//         customerid:null,
//     });

//   const fetchCustomerData = async (customerid) => {
//     try {
//       const response = await axios.get(`http://localhost:8112/hotelmanagement/customer/${customerid}`);
//       setCustomerData(prevData => ({
//         ...prevData,
//         [customerid]: response.data
//       }));
//     } catch (error) {
//       console.error(`Error fetching customer data for customerId ${customerid}:`, error);
//     }
//   };

//   useEffect(() => {
//     if (currentUser) {
//       fetchCustomerData(currentUser.customerid); 
//     }
//   }, [currentUser]);


//     const currentDate = new Date();
  
 
//     const formattedDate = currentDate.toLocaleDateString();
//     const formattedTime = currentDate.toLocaleTimeString();

//     return (
//         <>
//             <div className="containern" style={{ backgroundColor: "lightgray", width: "40.2cm", minHeight: "100vh", minWidth: "195vh" }}>
                
//             <div>
//       <h3 className="customerabac" style={{ marginTop: "0cm", marginLeft: "8.5cm" }}>Date: {formattedDate} </h3>
//       <br />
//       <h3 className="customersabac" style={{ marginTop: "0cm", marginLeft: "8.5cm" }}>Time: {formattedTime}</h3>
//     </div>
//     <div className="header1" style={{ marginTop: "-0.5cm" }}>
//       <img
//         src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6"
//         alt="loading.."
//         style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm", borderRadius: "50%" }}
//       ></img>
//       <br />
//       <h2 style={{ float: "left", marginLeft: "1cm" }}><b>Hotel Name</b></h2>
//       <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1.5cm", marginBottom: "0" }}><b>
//                         {customerData && (
//                                 <>
//                                 {customerData.name}
//                                 </>
//                             )}</b></h4>
//                    <div style={{marginTop:"-1.4cm"}}>
//                     <img src="https://www.freeiconspng.com/uploads/profile-icon-9.png" alt="loading.." style={{width:"1cm",height:"50px",marginLeft:"38.7cm",marginTop:"-1cm"}}/><br/><br/>
//                     </div>
//                     <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1.5cm" }}><b>Id:
//                     {customerData && (
//                                 <>
//                                 {customerData.customerid}
//                                 </>
//                             )}</b></h5>
//                             </div>
                
//                 <div className="navbar30" style={{ display: "flex", justifyContent: "center", backgroundColor: "black", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "40.2cm" }}>
//                    <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
//                     <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                         <a href="#info" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Info</a>
//                     </li>
//                     <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                         <a href="#rooms" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Rooms</a>
//                     </li>
//                     <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                         <a href="/Food" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Food</a>
//                     </li>
//                     <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                         <a href="/Addcust" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Addon's</a>
//                     </li>
//                     <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                         <a href="/Area" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Areainfo</a>
//                     </li>
//                     {/* <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                         <a href="/Mybookings" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>My Bookings</a>
//                     </li> */}
//                     <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger", transition: "background-color 0.3s" }}>
//                         <a href="/LoginCard" style={{ color: "whitesmoke", textDecoration: "none" }}>Sign-Out</a>
//                     </li>
                   
//                 </ul>
                
//             </div>
            
          
        
//             {/* Menu Icon */}
//             <div className="menu-icon hover-effect" onClick={toggleMenu} style={{ position: "absolute", top: "5.8cm", right: "1.5cm", color: "whitesmoke", zIndex: "1000" }}>
//                 {isMenuOpen ? <span>&#x2715;</span> : <span> &#9776;</span>}
//             </div>

                
//                 {/* Menu Content */}
//                 {isMenuOpen && (
//                     <div className="menu30" style={{ position: "absolute", bottom:"1", right: "0", backgroundColor: "black", zIndex: "999", width: "250px", padding: "10px" ,marginRight:"0.25cm",height:"10cm",color:"whitesmoke"}}>
//                         <ul>
//                             <li style={{fontFamily:"cursive",fontSize:"x-large"}}>
//                                 <a href="/Profile" style={{color:"whitesmoke"}}><b>Profile</b></a>
//                                 </li><br/>
//                             <li style={{fontFamily:"cursive",fontSize:"x-large"}}>
//                             <a href="/Mybookings" style={{color:"whitesmoke"}}><b>Booking-History</b></a>
//                             </li><br/>
//                             <li style={{fontFamily:"cursive",fontSize:"larger"}}><b>FAQ's</b></li><br/>
//                             <li style={{fontFamily:"cursive",fontSize:"X-large"}}><b>ContactUs</b></li><br/>
//                         </ul>
//                     </div>
//                 )}

//                      <div className="content30" >
                    
//                     <div className="card30" style={{ width: "8cm", float: "inline-start", backgroundColor: "white", border: "0.5px solid black", height: "9cm" }}>
//                         <div className="card-body30" >
//                             <h3 style={{ marginTop: "1cm", marginLeft: "0.5cm" }}><b>Search</b></h3><br />
//                             <label style={{ marginLeft: "0.5cm" }}><b>Check-in: </b></label><br />
//                             <input type="date" style={{ width: "6cm", marginLeft: "0.5cm" }}
//                                 placeholder="Check-In Date" onChange={handleCheckInChange} value={checkInDate} min={new Date().toISOString().split('T')[0]} /><br />

//                             <label style={{ marginTop: "0.3cm", marginLeft: "0.5cm" }}><b>Check-out</b></label><br />
//                             <input type="date" style={{ width: "6cm", marginLeft: "0.5cm" }}
//                                 placeholder="Check-Out Date" onChange={handleCheckOutChange} value={checkOutDate} min={checkOutDate} /><br /><br />
                            
//                             <Link to={isAvailabilityButtonDisabled ? '#' : '/Checkavailability'}>
//                                 <button type="button" style={{ marginLeft: "1.5cm" }} onClick={handleSubmit} disabled={isAvailabilityButtonDisabled}><b>Check Availability</b></button><br />
//                             </Link>

                           
//                             <p style={{ color: "red", opacity: "0.8", marginTop: "0.3cm",fontSize:"small", marginLeft:"0.5cm" }}>
//                                 <b>Note:</b> Only 2 Adults & 1 or 2 children are allowed for 1 Room...
//                             </p>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="img30">
//                         <img src="https://i.pinimg.com/originals/20/07/d6/2007d6dd4ca8f4b527d19c7baaefab7e.jpg" alt="loading.." style={{ width: "32.2cm", marginLeft: "0cm", height: "18cm" }} />
//                     </div>

//                     <div className="gif-container">
//                         <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzd1eTdjbWI0aHhsMXgzcnYwNWp4N3pqODU5ZzJsM2ZtbnJ0ajJkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPbirbfL6lTO3YI/giphy.gif" alt="loading..." style={{ width: "8cm", height: "9cm", marginTop: "-9cm" }} />
//                     </div>

//                     <div class="info" style={{ width: "8cm", margin: "auto" }} id="info">
//                         <div class="info-body">
//                             <h2 style={{ marginTop: "1cm",marginLeft:"-15cm" }}><b>Exclusive Experience Awaits You</b></h2>
//                             <p style={{marginLeft:"-15cm",marginTop:"2cm"}}>
//                                 Welcome to Exquisite Paradise Hotel, where luxury meets comfort. Our hotel is designed to provide you with an unforgettable experience, whether you're here for business or leisure.
//                             </p>
//                             <p style={{marginLeft:"-15cm",marginTop:"1cm"}}>
//                                 <b>Indulge in Elegance:</b> Our beautifully appointed rooms and suites offer a perfect blend of sophistication and modern amenities. Enjoy breathtaking views and plush accommodations during your stay.
//                             </p>
//                             <p style={{marginLeft:"-15cm"}}>
//                                 <b>Culinary Delights:</b> Savor the finest cuisines at our on-site restaurants. From gourmet dishes to local flavors, our chefs create culinary masterpieces that will tantalize your taste buds.
//                             </p>
//                             <p style={{marginLeft:"-15cm"}}>
//                                 <b>Relax and Unwind:</b> Dive into luxury with our spa and wellness services. Pamper yourself with rejuvenating treatments, and unwind in our state-of-the-art facilities.
//                             </p>
//                             <p style={{marginLeft:"-15cm"}}>
//                                 <b>Explore the Surroundings:</b> Conveniently located near popular attractions, our hotel offers easy access to the city's best landmarks and entertainment venues.
//                             </p>
//                             <img src="https://img.freepik.com/free-photo/hammocks-umbrellas-arranged-rows_1203-181.jpg?w=2000&t=st=1706870931~exp=1706871531~hmac=3aaa56997b7c3eafa131d45eeab439d989f13cdd217deafd0bb5a4d24ad2de87" alt="loading.." style={{width:"12.5cm",height:"10cm",marginLeft:"10cm",marginTop:"-10cm",borderRadius:"30%"}}/>
//                         </div>
//                     </div>
//                     <div className="img3" id="addons">
//                         <input type="text" placeholder="&#9749; Breakfast" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
//                         <input type="text" placeholder="&#127860; Restaurant" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
//                         <input type="text" placeholder="&#128663; Parking" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
//                         <input type="text" placeholder="&#128705; Bathtub" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
//                         <input type="text" placeholder="&#128169; Central Air Conditioner" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "1cm" }} readOnly />
//                         <input type="text" placeholder="💆‍♀️ Spa" style={{ width: "6cm", height: "1cm", marginLeft: "0.4cm", marginTop: "0.5cm" }} readOnly />
//                         <input type="text" placeholder="🎉 Function Hall" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
//                         <input type="text" placeholder="🎮 Games" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
//                         <input type="text" placeholder="&#128246; Free WiFi" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
//                         <input type="text" placeholder="&#127947; Fitness Center" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
//                         <input type="text" placeholder="&#127866; Room Service" style={{ width: "6cm", height: "1cm", marginLeft: "0.4cm", marginTop: "0.4cm" }} readOnly />
//                         <input type="text" placeholder="&#128166; Swimming Pool" style={{ width: "6cm", height: "1cm", marginLeft: "0.5cm", marginTop: "0.3cm" }} readOnly />
//                     </div><br/><br/>

//                     <div className="content31" id="rooms">
//                         <h2 style={{marginLeft:"0.5cm"}}><b>Available Rooms</b></h2><br/>
//                         <Link to={'/Premiumsuite'}>
//                         <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-102132.jpg?w=2000&t=st=1707116618~exp=1707117218~hmac=7c352cf70d19be0af02385effcf4cdc4887ff02091623b34b5882cb1708cc825)"}}>
//                         <div className="cardbody" style={{backgroundColor:"whitesmoke"}}>
//                             <h3 style={{marginTop:"1cm", marginLeft:"1cm"}}><b>Premium Suite</b></h3>
//                            <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
//                         </div>
//                     </div>
//                     </Link><br/>
//                     <Link to={'/Deluxesuite'}>
//                     <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-102132.jpg?w=2000&t=st=1707116618~exp=1707117218~hmac=7c352cf70d19be0af02385effcf4cdc4887ff02091623b34b5882cb1708cc825)"}}>
//                         <div className="cardbody" >
//                             <h3 style={{marginTop:"1cm", marginLeft:"1cm"}}><b>Deluxe Suite</b></h3>
//                             <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
                      
//                              </div>
//                     </div></Link><br/>
//                     <Link to={'/Classicdeluxe'}>
//                     <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-102132.jpg?w=2000&t=st=1707116618~exp=1707117218~hmac=7c352cf70d19be0af02385effcf4cdc4887ff02091623b34b5882cb1708cc825)"}}>
//                         <div className="cardbody" >
//                             <h3 style={{marginTop:"1cm", marginLeft:"1cm"}}><b>Classic  Deluxe</b></h3>
//                            <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
//                         </div>
//                     </div></Link><br/>
//                     <Link to={'/Banquethalls'}>
//                     <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-102132.jpg?w=2000&t=st=1707116618~exp=1707117218~hmac=7c352cf70d19be0af02385effcf4cdc4887ff02091623b34b5882cb1708cc825)"}}>
//                         <div className="cardbody" >
//                             <h3 style={{marginTop:"1cm", marginLeft:"1cm"}}><b>Banquet Hall</b></h3>
//                            <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.3cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
//                         </div>
//                     </div></Link><br/>
//                     <Link to={'/Seminarhalls'}>
//                     <div className="card100" style={{width:"38.5cm",border:"0.5px solid black", marginLeft:"0.5cm",background:"url(https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-102132.jpg?w=2000&t=st=1707116618~exp=1707117218~hmac=7c352cf70d19be0af02385effcf4cdc4887ff02091623b34b5882cb1708cc825)"}}>
//                         <div className="cardbody" >
//                             <h3 style={{marginTop:"1cm", marginLeft:"1cm"}}><b>Seminar Hall</b></h3>
//                            <a href="#"  className="btn btn-primary" style={{marginLeft:"29cm", marginTop:"-1.cm",backgroundColor:"lightgray",border:"1px solid black", width:"8cm", color:"black"}}><b>Show prices</b></a>
//                         </div>
//                     </div></Link><br/>
//                         <div className="areainfo">
//                             <h2 style={{marginLeft:"1cm"}}><b>Rules & Regulations</b></h2>
//                             <div class="card32" style={{marginLeft:"0.5cm",width:"38.5cm",height:"34cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
//                             <div class="card-body32">
                                
//                                  <p class="card-text" style={{float:"inline-start",marginTop:"2cm",marginLeft:"2cm"}}><b>Check-In:</b></p><br/>
//                                  <p className="card-text" style={{float:"inline-end",marginTop:"1.4cm",marginRight:"25cm"}}> From 12:00</p><br/><hr style={{marginTop:"2cm"}}/>
//                                  <p class="card-text" style={{float:"inline-start",marginLeft:"2cm",marginTop:"1cm"}}><b>Check-Out:</b></p>
//                                  <p className="card-text" style={{float:"inline-end",marginTop:"1cm",marginRight:"25.3cm"}}> Until 11:00</p><br/><hr style={{marginTop:"1.5cm"}}/>
//                                  <p class="card-text" style={{float:"inline-start",marginLeft:"2cm",marginTop:"1cm"}}><b>Cancellation/prepayment:</b></p><br/>
//                                  <p class="card-text" style={{float:"inline-end",marginTop:"0.4cm",marginRight:"10.4cm"}}>Cancellation and prepayment policies vary according to accommodation type. </p><br/><hr style={{marginTop:"1cm"}}/>
//                                  <p class="card-text" style={{float:"inline-start",marginLeft:"2cm",marginTop:"1cm"}}><b>Children and Beds:</b></p><br/>
//                                  <p class="card-text" style={{float:"inline-end",marginRight:"24.3cm",marginTop:"0.4cm"}}><b>Child policies</b></p><br/>
//                                  <p class="card-text" style={{float:"inline-end",marginRight:"-7.1cm",marginTop:"1cm"}}>Children of any  age are welcome.</p><br/>
//                                  <p class="card-text" style={{float:"inline-end",marginRight:"12.55cm"}}>Children 18 years are above will be charged as adults at this property.</p><br/>
//                                  <p class="card-text" style={{float:"inline-end",marginRight:"4.5cm"}}>see correct prices and occupancy information, please add number of children in your group and their ages.</p><br/><br/>
//                                  <p class="card-text" style={{float:"inline-end",marginTop:"1.5cm",marginRight:"-5.7cm"}}><b>Cot and extra bed policies</b></p><br/>
//                                  <div class="card34" style={{marginTop:"2.5cm",width:"18cm",marginLeft:"11.2cm",height:"3cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
//                                     <div class="card-body34">
//                                         <p  style={{marginLeft:"2cm", marginTop:"0.2cm"}}><b>0 - 8 years</b></p><hr/>
//                                         <p style={{float:"left", marginLeft:"1cm"}}>Extra Bed upon request</p>
//                                         <p style={{float:"right",marginRight:"5cm",fontSize:"larger"}}><b>Free</b></p>
//                                     </div>
//                                  </div><br/>
//                                  <div class="card35" style={{width:"18cm",marginLeft:"11.2cm",height:"3cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
//                                     <div class="card-body35">
//                                         <p style={{marginLeft:"2cm", marginTop:"0.2cm"}}><b> 9+ years</b></p><hr/>
//                                         <p style={{float:"left", marginLeft:"1cm"}}>Extra Bed upon request</p>
//                                         <p style={{float:"right",marginRight:"0.5cm"}}><b>Rs.800 per person,per night</b></p>
//                                     </div>
//                                  </div>
//                                 <p class="card-text" style={{marginLeft:"11.2cm",marginTop:"1cm"}}>Prices for extra beds are not included in the total price, and will have to be paid for separately during your stay.</p>

//                                     <p class="card-text" style={{marginLeft:"11.2cm"}}>The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.</p>

//                                     <p class="card-text" style={{marginLeft:"11.2cm"}}>There are no cots available at this property.</p>

//                                     <p class="card-text" style={{marginLeft:"11.2cm"}}>All extra beds are subject to availability.</p><hr/>

//                                     <p class="card-text" style={{float:"inline-start",marginTop:"1cm",marginLeft:"2cm"}}><b>No Age Restriction:</b></p><br/>
//                             <p class="card-text" style={{float:"inline-end",marginRight:"18.8cm",marginTop:"0.4cm"}}>There is no age restrictions for check-In.</p><br/><hr style={{marginTop:"1cm"}}/>
//                             <p class="card-text" style={{float:"inline-start",marginTop:"0.5cm",marginLeft:"2cm"}}><b>Pets:</b></p><br/>
//                             <p class="card-text" style={{float:"inline-end",marginRight:"22.9cm"}}>Pets are not Allowed</p><br/>
//                             </div>
//                             </div><br/><br/>
//                             <div className="content33" id="areainfo">
//                                 <h2 style={{marginLeft:"1cm"}}><b>Hotel Surrondings</b></h2>
//                                 < div class="card35" style={{width:"38.5cm",marginLeft:"0.5cm",height:"10cm",backgroundColor:"whitesmoke",border:"0.5px solid black"}}>
//                                     <div class="card-body35">
//                                         <p style={{marginLeft:"2.5cm",marginTop:"0.5cm"}}>Nandhi Hills</p><br/>
//                                                 <p style={{marginLeft:"2.5cm"}}>Chikkaballapur Isha Foundation</p><br/>
//                                                <p style={{marginLeft:"2.5cm"}}> Hogenakkal Falls</p><br/>
//                                                 <p style={{marginLeft:"2.5cm"}}>Hampi</p><br/>
//                                                 <p style={{marginLeft:"2.5cm"}}>Mysore Palace</p><br/>
//                                                 <p style={{marginLeft:"2.5cm"}}>Dodda Aalada Mara</p><br/>
//                                                 <p  style={{marginLeft:"14cm",marginTop:"-10.2cm"}}>Bannerghatta Biological Park</p><br/>
//                                                 <p style={{marginLeft:"14cm"}}>Mekedatu</p><br/>
//                                                 <p style={{marginLeft:"14cm"}}>Balmuri and Edmuri waterfalls</p><br/>
//                                                 <p style={{marginLeft:"14cm"}}>Anthargange</p><br/>
//                                                 <p style={{marginLeft:"14cm"}}>Bannerghatta National Park</p><br/>
//                                                 <p style={{marginLeft:"14cm"}}>Manchinbele</p><br/>
//                                                 <p style={{marginLeft:"25cm",marginTop:"-10.2cm"}}>Devanahalli Fort</p><br/>
//                                                 <p style={{marginLeft:"25cm"}}>Janapada Loka </p><br/>
//                                                 <p style={{marginLeft:"25cm"}}>Skandagiri</p><br/>
//                                                 <p style={{marginLeft:"25cm"}}>Bheemeshwari Adventure and Nature Camp</p><br/>
//                                                 <p style={{marginLeft:"25cm"}}>shilhaandra Resort</p><br/>
//                                                 <p style={{marginLeft:"25cm"}}>Sri Someshwara swamy Temple</p>
                                               
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div><br/>

                    
//                 </div><br/>
//                 <div className="footercontent" style={{backgroundColor:"black",width:"40.4cm",marginLeft:"-0.3cm",height:"6cm",marginTop:"-0.6cm"}}><br/>
//                 <footer class="footer" id="contact">     
//                 <div class="footer__col">
//                      <h4 style={{color:"whitesmoke",marginLeft:"12cm"}}>OUR SERVICES</h4>
//                     <ul class="footer__links">
//                         <li style={{marginLeft:"10.5cm",marginTop:"-0.5cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Concierge Assistance</a></li>
//                         <li style={{marginLeft:"10.3cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Flexible Booking Options</a></li>
//                         <li style={{marginLeft:"11cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Airport Transfers</a></li>
//                         <li style={{marginLeft:"10.5cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Wellness & Recreation</a></li>
//                     </ul>
//                     </div>
//                     <br></br>
//                     <div class="footer__col">
//                     <h4 style={{marginLeft:"24cm",color:"whitesmoke",marginTop:"-5.3cm"}}>CONTACT US</h4>
                    
//                         <li style={{marginLeft:"21cm",marginTop:"1cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}} >anarghyacommunications@gmail.com</a></li>
//                         <li style={{marginLeft:"22.6cm"}}><a href="#" style={{color:"whitesmoke",textDecoration:"none"}}>Call now : 9845612340</a></li>
                    
//                     </div>
     
      
//                 </footer>
//                 </div>
//                 <div className="footercontent2" style={{backgroundColor:"whitesmoke",width:"40.55cm",marginLeft:"-0.5cm"}}>
//                 <div class="footer__bar" >
//                 © 2023-2024 Anarghya Communications. All Rights Reserved.
//                 </div>
//                 </div>
            
//         </>
//     )
// }

// export default Customerdashboard;