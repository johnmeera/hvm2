import React from "react";

import './Admindashboard.css';
import { Link } from "react-router-dom";
function Accomodations(){
    return (
        <>
            <div className="body-container">
            <div className="header30">
                    <Link to={'/Admindashboard'} style={{ fontSize: 'xx-large', marginLeft: '15cm', textDecoration: 'none', color: 'white', fontStyle: "italic" }}>
                        <b>Admin Dashboard</b>
                    </Link>
                    <label style={{ fontSize: 'larger', marginLeft: '4.4cm', marginTop: "0.5cm" }}>
                        <b>Logged in:{"\t"}{"\t"}</b> Nikhil Tammineedi
                    </label>
                </div><br/>

               
                <div className="sidebar30" style={{marginTop:"-0.65cm"}}>
                    <aside className="aside1">
                        <Link to={'/Accomodations'} style={{ textDecoration: "none" }}>
                            <p style={sidebarLabelStyle}><b>Accommodations</b></p>
                        </Link><br/><br/>
                        <Link to={'/Createaccount'} style={{ textDecoration: "none" }}>
                            <p style={sidebarLabelStyle}><b>Create Account</b></p>
                        </Link><br/><br/>
                        <p style={sidebarLabelStyle}><b>Restaurant</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                    </aside>
                </div>
                 <div className="aside2">

        <div class="card3" style={{float:"inline-start",marginTop:"0cm",marginLeft:"8cm",width:"8cm",border:"1px solid black",height:"6.5cm"}}>
            <Link to={'/PS'} style={{textDecoration:"none",color:"black"}}>
            <div class="card-body" >
                <img src="https://www.parkregisgoa.in/wp-content/uploads/2020/12/Junior-Suite-scaled.jpg" alt="loading.." width="243.9cm" height="170cm" style={{marginLeft:"0cm",marginTop:"-1.5cm"}}/>
             <p style={{fontSize:"larger",marginTop:"0.5cm",marginLeft:"1.9cm"}}><b>Premium Suite </b></p>
             {/* <p style={{marginTop:"-0.2cm",marginLeft:"0.2cm"}}> Get comfortable and indulge yourself in the super luxury suite.</p> */}
            </div>
            </Link>
            
        </div>
        <div class="card3" style={{float:"inline-start",marginTop:"0cm",marginLeft:"2cm",width:"8cm",border:"1px solid black",height:"6.5cm"}}>
            <Link to={'/DS'} style={{textDecoration:"none",color:"black"}}>
            <div class="card-body" >
            <img src="https://www.parkregisgoa.in/wp-content/uploads/2021/04/Presidential-Suite-2-2520x1400.jpg" alt="loading.." width="243.9cm" height="170cm" style={{marginLeft:"0cm",marginTop:"-1.5cm"}}/><br/>
            <p style={{fontSize:"larger",marginTop:"-0.2cm",marginLeft:"2.2cm"}}><b>Deluxe Suite </b></p>
             {/* <p style={{marginTop:"0.5cm"}}> Get comfortable and indulge yourself in the luxury suite..</p>
           */} </div> 
            </Link>
        </div><br/>
        <div class="card3" style={{float:"inline-start",marginTop:"-0.6cm",marginLeft:"2cm",width:"8cm",border:"1px solid black",height:"6.5cm"}}>
            <Link to={'/CD'} style={{textDecoration:"none",color:"black"}}>
            <div class="card-body" >
            <img src="https://www.millenniumparkpanchgani.com/mobile/images/room/executive-suite-1.jpg" alt="loading.." width="243.9cm" height="170cm" style={{marginLeft:"0cm",marginTop:"-1.5cm"}}/><br/>
            <p style={{fontSize:"larger",marginTop:"-0.2cm",marginLeft:"2cm"}}><b> Classic Deluxe </b></p>
             {/* <p style={{marginTop:"0.5cm"}}> Get comfortable and indulge yourself in the classic Deluxe..</p>
            */} </div>
            </Link> 
        </div><br/>

        <div class="card3" style={{float:"inline-start",marginTop:"0.5cm",marginLeft:"8cm",width:"8cm",border:"1px solid black",height:"6.5cm"}}>
            <Link to={'/BH'} style={{textDecoration:"none",color:"black"}}>
            <div class="card-body" >
            <img src="https://asset1.zankyou.com/images/mag-post/c93/41a6/685//-/in/wp-content/uploads/2016/09/Green-Lounge-Banquets.jpg" alt="loading.." width="243.9cm" height="170cm" style={{marginLeft:"0cm",marginTop:"-1.5cm"}}/><br/>
            <p style={{fontSize:"larger",marginTop:"-0.2cm",marginLeft:"2cm"}}><b> Banquet Hall </b></p>
             {/* <p style={{marginTop:"0.5cm"}}> Have a fantastic day enjoying the banquet hall atmosphere.</p>
           */}</div>
            </Link>  
        </div>
         
        <div class="card3" style={{float:"inline-start",marginTop:"0.5cm",marginLeft:"2cm",width:"8cm",border:"1px solid black",height:"6.5cm"}}>
            <Link to={'/SH'} style={{textDecoration:"none",color:"black"}}>
            <div class="card-body" >
            <img src="https://ik.imagekit.io/pu0hxo64d/uploads/gallery/outdoor-sitting-arrangement-at-hotel-taj-tristar---conference-hall-838.jpg" alt="loading.." width="244.3cm" height="170cm" style={{marginLeft:"0cm",marginTop:"-1.5cm"}}/><br/>
            <p style={{fontSize:"larger",marginTop:"-0.2cm",marginLeft:"2cm"}}><b> Seminar Hall </b></p>
             {/* <p style={{marginTop:"0.5cm"}}> Have a fantastic day enjoying the seminar hall atmosphere.</p>
           */} </div>
            </Link>
        </div> 
        <div class="card3" style={{float:"inline-start",marginTop:"0.5cm",marginLeft:"2cm",width:"8cm",border:"1px solid black",height:"6.5cm"}}>
            <Link to={'/Addroom'} style={{textDecoration:"none",color:"black"}}>
            <div class="card-body" >
            <img className="addr0om" src="https://cdn.pixabay.com/photo/2017/09/05/15/51/plus-2718200_1280.png" alt="loading.." width="30cm" height="90cm" style={{marginLeft:"1.4cm",marginTop:"0.5cm",width:"5cm"}}/><br/>
            </div> 
            </Link>
        </div>

     </div>
                <div className="footer30">Admin Data</div>
            </div>
        </>
    );
}
const sidebarLabelStyle = {
    color: 'white',
    marginLeft: '-0.1cm',
    fontSize: 'larger',
    marginTop: '-0.2cm',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};
;

    
    
export default Accomodations;