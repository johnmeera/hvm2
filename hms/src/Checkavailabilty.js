import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Customerdashboard.css';

function Checkavailabilty() {
    const [premiumSuiteData, setPremiumSuiteData] = useState(null);
    const [deluxeSuiteData, setDeluxeSuiteData] = useState(null);
    const [classicDeluxeData, setClassicDeluxeData] = useState(null);
    const [banquetHallData, setBanquetHallData] = useState(null);
    const [seminarHallData, setSeminarHallData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [premiumResponse, deluxeResponse, classicResponse, banquetResponse, seminarResponse] = await Promise.all([
                    axios.get('http://localhost:8080/api-v1/1'),
                    axios.get('http://localhost:8080/api-v1/2'),
                    axios.get('http://localhost:8080/api-v1/3'),
                    axios.get('http://localhost:8080/api-v1/4'),
                    axios.get('http://localhost:8080/api-v1/5')
                ]);
                setPremiumSuiteData(premiumResponse.data);
                setDeluxeSuiteData(deluxeResponse.data);
                setClassicDeluxeData(classicResponse.data);
                setBanquetHallData(banquetResponse.data);
                setSeminarHallData(seminarResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="totalcontainer" style={{ backgroundColor: "lightgray", width: "100%", minHeight: "100vh", minWidth: "183vh" }}>
                <div className="header1">
                    <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm" }}></img><br />
                    <h2 style={{ float: "inline-start", marginLeft: "1cm" }}><b>Hotel Name</b></h2>
                    <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1cm", marginBottom: "0" }}><b>Nikhil Tammineedi</b></h4><br /><br />
                    <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1cm" }}><b>id:2484</b></h5>
                </div>
                <div className="navbar30" style={{ display: "flex", justifyContent: "center", backgroundColor: "black", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "100%" }}>
                    <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
                        <li style={{ marginLeft: "1cm", marginTop: "0.5cm", fontSize: "larger" }}>
                            <a href="http://localhost:3000/" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Info</a>
                        </li>
                        <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
                            <a href="#Rooms" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Rooms</a>
                        </li>
                        <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
                            <a href="#Food" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Food</a>
                        </li>
                        <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
                            <a href="#Addon services" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Addon's</a>
                        </li>
                        <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
                            <a href="#Near by Areainfo" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Areainfo</a>
                        </li>
                        <li style={{ marginLeft: "1.7cm", marginTop: "0.5cm", fontSize: "larger", transition: "background-color 0.3s" }}>
                            <a href="#Signout" style={{ color: "whitesmoke", textDecoration: "none" }}>Sign-Out</a>
                        </li>
                    </ul>
                </div>


              
                <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "1cm", marginLeft: "0.7cm", width: "39cm", height: "12.5cm", position: "relative" }}>
                    <img src="https://www.parkregisgoa.in/wp-content/uploads/2020/12/Junior-Suite-scaled.jpg" alt="Premium Suite" style={{ height: "12.5cm", width: "20cm" }} />
                    <div className='order-form1' style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm" }}>
                        {premiumSuiteData && (
                            <>
                                <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room Type: {premiumSuiteData.room_type} </b></h2><br />
                                <p style={{ marginLeft: "5cm" }}><b>Room Features: {premiumSuiteData.room_features}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Price: {premiumSuiteData.price}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Discount: {premiumSuiteData.discount}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Net Total: {premiumSuiteData.net_total}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Available Add-ons: {premiumSuiteData.addons}</b></p>
                            </>
                        )}
                        <Link to={'/Booknow'}>
                            <button type="submit" style={{ position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm" }}><b>Book Now</b></button>
                        </Link>
                    </div>
                </div>

               
                <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.6cm", width: "39cm", height: "12.5cm", position: "relative" }}>
                    <img src="https://www.parkregisgoa.in/wp-content/uploads/2021/04/Presidential-Suite-2-2520x1400.jpg" alt="loading.." style={{ height: "12.5cm", width: "20cm" }} />
                    <div className='order-form1' style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm" }}>
                        {deluxeSuiteData && (
                            <>
                                <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room_type: {deluxeSuiteData.room_type} </b></h2><br />
                                <p style={{ marginLeft: "5cm" }}><b>Room Features: {deluxeSuiteData.room_features}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>price: {deluxeSuiteData.price}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Discount: {deluxeSuiteData.discount}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Net Total: {deluxeSuiteData.net_total}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Available Add-on's: {deluxeSuiteData.addons}</b></p>
                            </>
                        )}
                        <Link to={'Booknow'}>
                            <button type="submit" style={{ position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm" }}><b>Book Now</b></button>
                        </Link>
                    </div>
                </div>

              
                <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.5cm", width: "39cm", height: "12.5cm", position: "relative" }}>
                    <img src="https://www.millenniumparkpanchgani.com/mobile/images/room/executive-suite-1.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
                    <div className='order-form1' style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm" }}>
                        {classicDeluxeData && (
                            <>
                                <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room_type: {classicDeluxeData.room_type} </b></h2><br />
                                <p style={{ marginLeft: "5cm" }}><b>Room Features: {classicDeluxeData.room_features}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>price: {classicDeluxeData.price}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Discount: {classicDeluxeData.discount}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Net Total: {classicDeluxeData.net_total}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Available Add-on's: {classicDeluxeData.addons}</b></p>
                            </>
                        )}
                        <Link to={'/Booknow'}>
                            <button type="submit" style={{ position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm" }}><b>Book Now</b></button>
                        </Link>
                    </div>
                </div>

           
                <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.5cm", width: "39cm", height: "12.5cm", position: "relative" }}>
                    <img src="https://asset1.zankyou.com/images/mag-post/c93/41a6/685//-/in/wp-content/uploads/2016/09/Green-Lounge-Banquets.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
                    <div className='order-form1' style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm" }}>
                        {banquetHallData && (
                            <>
                                <h2 style={{ marginTop: "2cm", marginLeft: "5cm" }}><b>Room_type: {banquetHallData.room_type} </b></h2>
                                <br /><br />
                                <p style={{ marginLeft: "5cm", marginTop: "-0.5cm" }}><b>Room Features: {banquetHallData.room_features}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>price: {banquetHallData.price}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Discount: {banquetHallData.discount}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Net Total: {banquetHallData.net_total}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Available Add-on's: {banquetHallData.addons}</b></p>
                            </>
                        )}
                        <Link to={'/Booknow'}>
                            <button type="submit" style={{ position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm" }}><b>Book Now</b></button>
                        </Link>
                    </div>
                </div>

                
                <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.5cm", width: "39cm", height: "12.5cm", position: "relative" }}>
                    <img src="https://ik.imagekit.io/pu0hxo64d/uploads/gallery/outdoor-sitting-arrangement-at-hotel-taj-tristar---conference-hall-838.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
                    <div className='order-form1' style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm" }}>
                        {seminarHallData && (
                            <>
                                <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room_type: {seminarHallData.room_type} </b></h2>
                                <br /><br />
                                <p style={{ marginLeft: "5cm" }}><b>Room Features: {seminarHallData.room_features}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>price: {seminarHallData.price}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Discount: {seminarHallData.discount}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Net Total: {seminarHallData.net_total}</b></p>
                                <p style={{ marginLeft: "5cm" }}><b>Available Add-on's: {seminarHallData.addons}</b></p>
                            </>
                        )}
                        <Link to={'/Booknow'}>
                            <button type="submit" style={{ position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm" }}><b>Book Now</b></button>
                        </Link>
                    </div>
                </div>

                <br /><br />

                <div className="footercontent" style={{ backgroundColor: "black", width: "40.4cm", marginLeft: "-0.3cm", height: "6cm", marginTop: "-0.6cm" }}><br />
                    <footer class="footer" id="contact">
                        <div class="footer__col">
                            <h4 style={{ color: "whitesmoke", marginLeft: "12cm" }}>OUR SERVICES</h4>
                            <ul class="footer__links">
                                <li style={{ marginLeft: "10.5cm", marginTop: "-0.5cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Concierge Assistance</a></li>
                                <li style={{ marginLeft: "10.3cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Flexible Booking Options</a></li>
                                <li style={{ marginLeft: "11cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Airport Transfers</a></li>
                                <li style={{ marginLeft: "10.5cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Wellness & Recreation</a></li>
                            </ul>
                        </div>
                        <br></br>
                        <div class="footer__col">
                            <h4 style={{ marginLeft: "24cm", color: "whitesmoke", marginTop: "-5.3cm" }}>CONTACT US</h4>

                            <li style={{ marginLeft: "21cm", marginTop: "1cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }} >anarghyacommunications@gmail.com</a></li>
                            <li style={{ marginLeft: "22.6cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Call now : 9845612340</a></li>

                        </div>
                    </footer>
                </div>
                <div className="footercontent2" style={{ backgroundColor: "whitesmoke", width: "40.55cm", marginLeft: "-0.5cm" }}>
                    <div class="footer__bar" >
                        © 2023-2024 Anarghya Communications. All Rights Reserved.
                </div>
                </div>

            </div>
        </>
    )
}

export default Checkavailabilty;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import './Customerdashboard.css';

// function Checkavailabilty() {
//     const [premiumSuiteData, setPremiumSuiteData] = useState(null);
//     const [deluxeSuiteData, setDeluxeSuiteData] = useState(null);
//     const [classicDeluxeData, setClassicDeluxeData] = useState(null);
//     const [banquetHallData, setBanquetHallData] = useState(null);
//     const [seminarHallData, setSeminarHallData] = useState(null);

//     const fetchData = async (endpoint, setData) => {
//         try {
//             const response = await axios.get(endpoint);
//             setData(response.data);
//         } catch (error) {
//             console.error(`Error fetching data for ${endpoint}:`, error);
//         }
//     };

//     useEffect(() => {
//         fetchData('http://localhost:8080/api-v1/1', setPremiumSuiteData);
//         fetchData('http://localhost:8080/api-v1/2', setDeluxeSuiteData);
//         fetchData('http://localhost:8080/api-v1/3', setClassicDeluxeData);
//         fetchData('http://localhost:8080/api-v1/4', setBanquetHallData);
//         fetchData('http://localhost:8080/api-v1/5', setSeminarHallData);
//     }, []);

//     const renderRoomData = (data) => {
//         if (!data) return null;
//         return (
//             <>
//                 <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room Type: {data.room_type} </b></h2><br />
//                 <p style={{ marginLeft: "5cm" }}><b>Room Features: {data.room_features}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>Price: {data.price}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>Discount: {data.discount}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>Net Total: {data.net_total}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>Available Add-ons: {data.addons}</b></p>
//             </>
//         );
//     };

//     return (
//         <>
//             <div className="totalcontainer" style={{ backgroundColor: "lightgray", width: "100%", minHeight: "100vh", minWidth: "183vh" }}>
//                 <div className="header1">
//                     <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm" }} /><br />
//                     <h2 style={{ float: "inline-start", marginLeft: "1cm" }}><b>Hotel Name</b></h2>
//                     <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1cm", marginBottom: "0" }}><b>Nikhil Tammineedi</b></h4><br /><br />
//                     <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1cm" }}><b>id:2484</b></h5>
//                 </div>

//                 <div className="navbar30" style={{ display: "flex", justifyContent: "center", backgroundColor: "black", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "100%" }}>
//                     <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
//                         <li style={{ marginLeft: "1cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                             <a href="http://localhost:3000/" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Info</a>
//                         </li>
//                         <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                             <a href="#Rooms" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Rooms</a>
//                         </li>
//                         <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                             <a href="#Food" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Food</a>
//                         </li>
//                         <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                             <a href="#Addon services" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Addon's</a>
//                         </li>
//                         <li style={{ marginLeft: "2cm", marginTop: "0.5cm", fontSize: "larger" }}>
//                             <a href="#Near by Areainfo" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s" }}>Areainfo</a>
//                         </li>
//                         <li style={{ marginLeft: "1.7cm", marginTop: "0.5cm", fontSize: "larger", transition: "background-color 0.3s" }}>
//                             <a href="#Signout" style={{ color: "whitesmoke", textDecoration: "none" }}>Sign-Out</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "1cm", marginLeft: "0.7cm", width: "39cm", height: "12.5cm", position: "relative" }}>
//                     <img src="https://www.parkregisgoa.in/wp-content/uploads/2020/12/Junior-Suite-scaled.jpg" alt="Premium Suite" style={{ height: "12.5cm", width: "20cm" }} />
//                     <div className='order-form1' style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm" }}>
//                     {premiumSuiteData && (
//               <>
//                   <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room Type: {premiumSuiteData.room_type} </b></h2><br />
//                   <p style={{ marginLeft: "5cm" }}><b>Room Features: {premiumSuiteData.room_features}</b></p>
//                   <p style={{ marginLeft: "5cm" }}><b>Price: {premiumSuiteData.price}</b></p>
//                   <p style={{ marginLeft: "5cm" }}><b>Discount: {premiumSuiteData.discount}</b></p>
//                   <p style={{ marginLeft: "5cm" }}><b>Net Total: {premiumSuiteData.net_total}</b></p>
//                   <p style={{ marginLeft: "5cm" }}><b>Available Add-ons: {premiumSuiteData.addons}</b></p>
//               </>
//           )}

//                         <Link to={'/Booknow'}>
//                             <button type="submit" style={{ position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm" }}><b>Book Now</b></button>
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="card11" style={{backgroundColor:"whitesmoke",marginTop:"2cm",marginLeft:"0.6cm",width:"39cm",height:"12.5cm", position: "relative"}}>
//     <img src="https://www.parkregisgoa.in/wp-content/uploads/2021/04/Presidential-Suite-2-2520x1400.jpg" alt="loading.." style={{ height: "12.5cm", width: "20cm" }} />
//    <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>       
//      {deluxeSuiteData && (
//              <>
//                  <h2 style={{marginLeft:"5cm",marginTop:"2cm"}}><b>Room_type: {deluxeSuiteData.room_type} </b></h2><br/>
//                  <p style={{marginLeft:"5cm"}}><b>Room Features: {deluxeSuiteData.room_features}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>price: {deluxeSuiteData.price}</b></p>                 <p style={{marginLeft:"5cm"}}><b>Discount: {deluxeSuiteData.discount}</b></p>
//                  <p style={{marginLeft:"5cm"}}><b>Net Total: {deluxeSuiteData.net_total}</b></p>
//                  <p style={{marginLeft:"5cm"}}><b>Available Add-on's: {deluxeSuiteData.addons}</b></p>
//              </>
//          )}
//          <Link to={'Booknow'}>
//              <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
//         </Link>
//      </div> </div>

//  <div className="card11" style={{backgroundColor:"whitesmoke",marginTop:"2cm",marginLeft:"0.5cm",width:"39cm",height:"12.5cm", position: "relative"}}>
//      <img src="https://www.millenniumparkpanchgani.com/mobile/images/room/executive-suite-1.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
//      <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
//          {classicDeluxeData && (
//             <>
//                 <h2 style={{marginLeft:"5cm",marginTop:"2cm"}}><b>Room_type: {classicDeluxeData.room_type} </b></h2><br/>
//                 <p style={{marginLeft:"5cm"}}><b>Room Features: {classicDeluxeData.room_features}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>price: {classicDeluxeData.price}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>Discount: {classicDeluxeData.discount}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>Net Total: {classicDeluxeData.net_total}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>Available Add-on's: {classicDeluxeData.addons}</b></p>
//             </>
//         )}
//         <Link to={'/Booknow'}>
//             <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
//         </Link>
//     </div>
// </div>

// <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.5cm", width: "39cm", height: "12.5cm", position: "relative" }}>
//     <img src="https://asset1.zankyou.com/images/mag-post/c93/41a6/685//-/in/wp-content/uploads/2016/09/Green-Lounge-Banquets.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
//     <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
//         {classicDeluxeData && (
//             <>
//                 <h2 style={{ marginTop: "2cm",marginLeft:"5cm" }}><b>Room_type: {banquetHallData.room_type} </b></h2>
//                 <br /><br />
//                 <p style={{marginLeft:"5cm",marginTop:"-0.5cm"}}><b>Room Features: {banquetHallData.room_features}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>price: {banquetHallData.price}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>Discount: {banquetHallData.discount}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>Net Total: {banquetHallData.net_total}</b></p>
//                 <p style={{marginLeft:"5cm"}}><b>Available Add-on's: {banquetHallData.addons}</b></p>
//             </>
//         )}
//         <Link to={'/Booknow'}>
//             <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
//         </Link>
//     </div>
// </div>

// <div className="card11" style={{ backgroundColor: "whitesmoke", marginTop: "2cm", marginLeft: "0.5cm", width: "39cm", height: "12.5cm", position: "relative" }}>
//     <img src="https://ik.imagekit.io/pu0hxo64d/uploads/gallery/outdoor-sitting-arrangement-at-hotel-taj-tristar---conference-hall-838.jpg" alt="loading.." style={{ width: "20cm", height: "12.5cm" }} />
//     <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
//         {seminarHallData && (
//             <>
//                 <h2 style={{ marginLeft: "5cm", marginTop: "2cm" }}><b>Room_type: {seminarHallData.room_type} </b></h2>
//                 <br /><br />
//                 <p style={{ marginLeft: "5cm" }}><b>Room Features: {seminarHallData.room_features}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>price: {seminarHallData.price}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>Discount: {seminarHallData.discount}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>Net Total: {seminarHallData.net_total}</b></p>
//                 <p style={{ marginLeft: "5cm" }}><b>Available Add-on's: {seminarHallData.addons}</b></p>
//             </>
//         )}
//         <Link to={'/Booknow'}>
//             <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
//         </Link>
//     </div>
// </div>

// </div>
// <Link to={'/Customerdashboard'}>
//   <button type="submit" className="btn" style={{color:"whitesmoke",background:"black",marginLeft:"1cm",marginTop:"1cm"}}><b>Back</b></button>
// </Link>

// <br/><br/> 

          

//             <div className="footercontent" style={{ backgroundColor: "black", width: "40.4cm", marginLeft: "-0.3cm", height: "6cm", marginTop: "-0.6cm" }}><br />
//                 <footer class="footer" id="contact">
//                     <div class="footer__col">
//                         <h4 style={{ color: "whitesmoke", marginLeft: "12cm" }}>OUR SERVICES</h4>
//                         <ul class="footer__links">
//                             <li style={{ marginLeft: "10.5cm", marginTop: "-0.5cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Concierge Assistance</a></li>
//                             <li style={{ marginLeft: "10.3cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Flexible Booking Options</a></li>
//                             <li style={{ marginLeft: "11cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Airport Transfers</a></li>
//                             <li style={{ marginLeft: "10.5cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Wellness & Recreation</a></li>
//                         </ul>
//                     </div>
//                     <br></br>
//                     <div class="footer__col">
//                         <h4 style={{ marginLeft: "24cm", color: "whitesmoke", marginTop: "-5.3cm" }}>CONTACT US</h4>

//                         <li style={{ marginLeft: "21cm", marginTop: "1cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }} >anarghyacommunications@gmail.com</a></li>
//                         <li style={{ marginLeft: "22.6cm" }}><a href="#" style={{ color: "whitesmoke", textDecoration: "none" }}>Call now : 9845612340</a></li>

//                     </div>
//                 </footer>
//             </div>
//             <div className="footercontent2" style={{ backgroundColor: "whitesmoke", width: "40.55cm", marginLeft: "-0.5cm" }}>
//                 <div class="footer__bar" >
//                     © 2023-2024 Anarghya Communications. All Rights Reserved.
//                 </div>
//             </div>

//         </>
//     );
// }

// export default Checkavailabilty;
