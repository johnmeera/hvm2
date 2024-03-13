import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Customerdashboard.css';

function Deluxesuite(){
    const [deluxeSuiteData, setDeluxeSuiteData] = useState(null);
        // Fetch Deluxe Suite data
  const fetchDeluxeSuiteData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api-v1/2');
      setDeluxeSuiteData(response.data);
    } catch (error) {
      console.error('Error fetching Deluxe Suite data:', error);
    }
  };

  
  useEffect(() => {
    fetchDeluxeSuiteData();
  }, []);

    return(
        <>
         <div className="totalcontainer" style={{backgroundColor: "#e9e3e3", width: "100%", minHeight: "100vh", minWidth: "183vh"}}>
       <div className="header1">
                    <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="loading.." style={{ marginTop: "0.3cm", marginLeft: "1.3cm", width: "4cm", height: "3cm",borderRadius:"50%"  }}></img><br />
                    <h2 style={{ float: "inline-start", marginLeft: "1cm" ,color:" rgb(70, 69, 69)"}}><b>Hotel Name</b></h2>
                    <h4 style={{ float: "inline-end", marginTop: "-1cm", marginRight: "1cm", marginBottom: "0" }}><b>Nikhil Tammineedi</b></h4><br /><br />
                    <h5 style={{ float: "inline-end", opacity: "0.5", marginTop: "-1cm", marginRight: "1cm" }}><b>id:2484</b></h5>
                </div>
                <div className="navbar30" style={{ display: "flex", justifyContent: "center", backgroundColor: " rgb(70, 69, 69)", height: "2cm", transition: "background-color 0.3s", marginTop: "-2.35cm", width: "100%" }}>
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

       
<div className="card11" style={{backgroundColor:"whitesmoke",marginTop:"2cm",marginLeft:"0.6cm",width:"39cm",height:"12.5cm", position: "relative"}}>
    <img src="https://www.parkregisgoa.in/wp-content/uploads/2021/04/Presidential-Suite-2-2520x1400.jpg" alt="loading.." style={{ height: "12.5cm", width: "20cm" }} />
    <div className='order-form1' style={{position: "absolute", top: 0, right: 0, bottom: 0, left: "16cm"}}>
        {deluxeSuiteData && (
            <>
                <h2 style={{marginLeft:"5cm",marginTop:"2cm"}}><b>Room_type: {deluxeSuiteData.room_type} </b></h2><br/>
                <p style={{marginLeft:"5cm"}}><b>Room Features: {deluxeSuiteData.room_features}</b></p>
                <p style={{marginLeft:"5cm"}}><b>price: {deluxeSuiteData.price}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Discount: {deluxeSuiteData.discount}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Net Total: {deluxeSuiteData.net_total}</b></p>
                <p style={{marginLeft:"5cm"}}><b>Available Add-on's: {deluxeSuiteData.addons}</b></p>
            </>
        )}
       <Link to={'/Booknow'}>
            <button type="submit" style={{position: "absolute", bottom: "0.5cm", right: "1cm", width: "5cm"}}><b>Book Now</b></button>
        </Link>
    </div>
    <Link to={'/Customerdashboard'}>
                  <button type="submit" className="btn" style={{backgroundColor:" rgb(70, 69, 69)",color:"whitesmoke"}}><b>Back</b></button>
                </Link>
</div><br/><br/><br/>

</div><br/><br/>

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
        
        

        </>
    )
}
export default Deluxesuite;