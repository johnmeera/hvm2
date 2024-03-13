import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Customerdashboard.css';
import './Availability.css';

function Availability() {
    const [premiumSuiteData, setPremiumSuiteData] = useState(null);
    const [deluxeSuiteData, setDeluxeSuiteData] = useState(null);
    const [classicDeluxeData, setClassicDeluxeData] = useState(null);
    const [banquetHallData, setBanquetHallData] = useState(null);
    const [seminarHallData, setSeminarHallData] = useState(null);

    const [showRegisterCard, setShowRegisterCard] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [blurContent, setBlurContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRegisterCard(true);
            setBlurContent(true); // Apply blur when register card is displayed
        }, 10000); // Show the card after 10 seconds

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, []);

    useEffect(() => {
        // Fetch Premium Suite data
        const fetchPremiumSuiteData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api-v1/1');
                setPremiumSuiteData(response.data);
            } catch (error) {
                console.error('Error fetching Premium Suite data:', error);
            }
        };
        fetchPremiumSuiteData();

        // Fetch Deluxe Suite data
        const fetchDeluxeSuiteData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api-v1/2');
                setDeluxeSuiteData(response.data);
            } catch (error) {
                console.error('Error fetching Deluxe Suite data:', error);
            }
        };
        fetchDeluxeSuiteData();

        // Fetch Classic Deluxe data
        const fetchClassicDeluxeData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api-v1/3');
                setClassicDeluxeData(response.data);
            } catch (error) {
                console.error('Error fetching Classic Deluxe data:', error);
            }
        };
        fetchClassicDeluxeData();

        // Fetch Banquet Hall data
        const fetchBanquetHallData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api-v1/4');
                setBanquetHallData(response.data);
            } catch (error) {
                console.error('Error fetching Banquet Hall data:', error);
            }
        };
        fetchBanquetHallData();

        // Fetch Seminar Hall data
        const fetchSeminarHallData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api-v1/5');
                setSeminarHallData(response.data);
            } catch (error) {
                console.error('Error fetching Seminar Hall data:', error);
            }
        };
        fetchSeminarHallData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollPosition(currentPosition);
    };

    useEffect(() => {
        const showCardThreshold = 500; // Adjust this threshold as needed
        setShowRegisterCard(scrollPosition > showCardThreshold);
    }, [scrollPosition]);

    const registerCardRef = useRef(null);

    useEffect(() => {
        // Scroll to register card when it is shown
        if (showRegisterCard && registerCardRef.current) {
            registerCardRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [showRegisterCard]);

    return (
        <>
            <div className="totalcontainer" style={{ backgroundColor: "lightgray", width: "100%", minHeight: "100vh", minWidth: "183vh", position: "relative" }}>
                <div className="header1">
                    <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm" }}></img><br />
                    <h2 style={{ float: "inline-start", marginLeft: "1cm" }}><b>Hotel Name</b></h2>
                </div>

                <div className="main">
                    <div className="bar" style={{ marginTop: "5.5cm" }}>
                        <span className="bar_content">
                            Availability of rooms are filling up fast! Fasten your bookings, so that you don't miss our hospitality. !! prices may differ from seasons to non-seasons please make sure !!
                        </span>
                    </div>
                </div>

                {/* Register card */}
            {showRegisterCard && blurContent && (
                <div ref={registerCardRef} className={`register-card`} style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "999", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", border: "2px solid #ff5722", maxWidth: "400px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register Now!</h2>
                    <p style={{ textAlign: "center", fontSize: "16px", lineHeight: "1.5" }}>Click the button below to register for our service and enjoy exclusive benefits.</p>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Link to={'/RegistrationForm'}>
                            <button style={{ backgroundColor: "#ff5722", color: "#fff", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold", textTransform: "uppercase" }}>Register</button>
                        </Link>
                    </div>
                </div>
            )}

            {/* Blur overlay */}
            {blurContent && (
                <div className="blur-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(5px)", zIndex: "998" }}></div>
            )}

                {/* Premium Suite Card */}
                <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "4.5cm", marginLeft: "0.7cm", width: "39cm", height: "12.5cm", position: "relative", zIndex: "1" }}>
                    <img src="https://www.parkregisgoa.in/wp-content/uploads/2020/12/Junior-Suite-scaled.jpg" alt="Premium Suite" style={{ height: "12.5cm", width: "20cm" }} />
                    <div className='order-form1' style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm" }}>
        {premiumSuiteData && (
            <>
                <h2 style={{marginLeft:"5cm",marginTop:"2cm"}}><b>Room Type: {premiumSuiteData.room_type} </b></h2><br/>
                <p style={{marginLeft:"5cm"}}><b>Room Features: {premiumSuiteData.room_features}</b></p>
                <p style={{marginLeft:"5cm"}}><b>CTC Price: {premiumSuiteData.ctc_price}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Discount: {premiumSuiteData.discount}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Net Total: {premiumSuiteData.net_total}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Available Add-ons: {premiumSuiteData.addons}</b></p>
            </>
        )}
        <Link to={''}>
            <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
        </Link>
    </div>
</div>

<div className="card11" style={{backgroundColor:"whitesmoke",marginTop:"2cm",marginLeft:"0.6cm",width:"39cm",height:"12.5cm", position: "relative"}}>
    <img src="https://www.parkregisgoa.in/wp-content/uploads/2021/04/Presidential-Suite-2-2520x1400.jpg" alt="loading.." style={{ height: "12.5cm", width: "20cm" }} />
    <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
        {deluxeSuiteData && (
            <>
                <h2 style={{marginLeft:"5cm",marginTop:"2cm"}}><b>Room_type: {deluxeSuiteData.room_type} </b></h2><br/>
                <p style={{marginLeft:"5cm"}}><b>Room Features: {deluxeSuiteData.room_features}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Ctc_price: {deluxeSuiteData.ctc_price}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Discount: {deluxeSuiteData.discount}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Net Total: {deluxeSuiteData.net_total}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Available Add-on's: {deluxeSuiteData.addons}</b></p>
            </>
        )}
        <Link to={''}>
            <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
        </Link>
    </div>
</div>

<div className="card11" style={{backgroundColor:"whitesmoke",marginTop:"2cm",marginLeft:"0.5cm",width:"39cm",height:"12.5cm", position: "relative"}}>
    <img src="https://www.millenniumparkpanchgani.com/mobile/images/room/executive-suite-1.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
    <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
        {classicDeluxeData && (
            <>
                <h2 style={{marginLeft:"5cm",marginTop:"2cm"}}><b>Room_type: {classicDeluxeData.room_type} </b></h2><br/>
                <p style={{marginLeft:"5cm"}}><b>Room Features: {classicDeluxeData.room_features}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Ctc_price: {classicDeluxeData.ctc_price}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Discount: {classicDeluxeData.discount}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Net Total: {classicDeluxeData.net_total}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Available Add-on's: {classicDeluxeData.addons}</b></p>
            </>
        )}
        <Link to={''}>
            <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
        </Link>
    </div>
</div>

<div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.5cm", width: "39cm", height: "12.5cm", position: "relative" }}>
    <img src="https://asset1.zankyou.com/images/mag-post/c93/41a6/685//-/in/wp-content/uploads/2016/09/Green-Lounge-Banquets.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
    <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
        {classicDeluxeData && (
            <>
                <h2 style={{ marginTop: "2cm",marginLeft:"5cm" }}><b>Room_type: {banquetHallData.room_type} </b></h2>
                <br /><br />
                <p style={{marginLeft:"5cm",marginTop:"-0.5cm"}}><b>Room Features: {banquetHallData.room_features}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Ctc_price: {banquetHallData.ctc_price}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Discount: {banquetHallData.discount}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Net Total: {banquetHallData.net_total}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Available Add-on's: {banquetHallData.addons}</b></p>
            </>
        )}
        <Link to={''}>
            <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
        </Link>
    </div>
</div>

<div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.5cm", width: "39cm", height: "12.5cm", position: "relative" }}>
    <img src="https://ik.imagekit.io/pu0hxo64d/uploads/gallery/outdoor-sitting-arrangement-at-hotel-taj-tristar---conference-hall-838.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
    <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
        {seminarHallData && (
            <>
                <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room_type: {seminarHallData.room_type} </b></h2>
                <br /><br />
                <p style={{ marginLeft: "5cm" }}><b>Room Features: {seminarHallData.room_features}</b></p>
                <p style={{ marginLeft: "5cm" }}><b>Ctc_price: {seminarHallData.ctc_price}</b></p>
                <p style={{ marginLeft: "5cm" }}><b>Discount: {seminarHallData.discount}</b></p>
                <p style={{ marginLeft: "5cm" }}><b>Net Total: {seminarHallData.net_total}</b></p>
                <p style={{ marginLeft: "5cm" }}><b>Available Add-on's: {seminarHallData.addons}</b></p>
            </>
        )}
        <Link to={''}>
            <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
        </Link>
    </div>
</div>



<br/><br/>


      
<div className="footercontent" style={{backgroundColor:"black",width:"40.4cm",marginLeft:"-0.3cm",height:"6cm",marginTop:"-0.6cm"}}><br/>
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
            
       </div>
       </>
    )
}
export default Availability;