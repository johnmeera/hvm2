import React from "react";
import { Link } from "react-router-dom";
import './Admindashboard.css';

function Restaurant() {
    return (
        <>
            <div className="body-container">
                <div className="header30">
                    <Link to='/Admindashboard' style={{ fontSize: 'xx-large', marginLeft: '15cm', textDecoration: 'none', color: 'white', fontStyle: "italic" }}>
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
                        <Link to={'/Restaurant'}>
                        <p style={sidebarLabelStyle}><b>Restaurant</b></p>
                        </Link><br/><br/>
                        <Link to={'/Adminreports'}>
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        </Link>
                        <Link to={'/Servicescomponent'}>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        </Link>
                        <Link to={'/LoginCard'}>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                        </Link>
                    </aside>
                </div>
                <div style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>
          <div className="restaurant-container">
            <div className="restaurant-options">
              <h1 style={{color:"white"}}>Restaurant Options  </h1><br /><br /><br/><br/>
              <ul className='s1'>
                <li className='s2' style={{ color: "black",marginTop:"-1.5cm" }}><Link to={"/IndianMenu"} style={{color:"white",textDecoration:"none"}}> IndianMenu</Link></li><br /><br /><br />
                <li className='s2' style={{marginTop:"-0.8cm"}}> <Link to={"/ContinentalMenu"} style={{color:"white",textDecoration:"none"}}>ContinentalMenu</Link></li><br /><br /><br />
                <li className='s2' style={{marginTop:"-0.8cm"}}><Link to={"/MoghulaiMenu"} style={{color:"white",textDecoration:"none"}}> MoghulaiMenu</Link></li><br /><br /><br />
                <li className='s2' style={{marginTop:"-0.8cm"}}><Link to={"/ChineaseMenu"} style={{color:"white",textDecoration:"none"}}> ChineaseMenu</Link></li><br /><br /><br />
              </ul>
            </div>
           
          </div>
          </div>
          </div>
</div>
            <div className="footer30">Admin Data</div>
            
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

export default Restaurant;
