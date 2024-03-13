import React from "react";
import { Link } from "react-router-dom";
import './Admindashboard.css';

function Adminsdashboard() {
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
                

                <div className="card1" style={{marginLeft:"8.5cm", marginTop:"1.5cm"}}>
                <Link to={'/Total_Bookings'} className="card-link">
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:"center"}}><b>Total Bookings</b></h5>
                    </div>
                </Link>
            </div>

            <div className="card1" style={{marginTop:"1.5cm"}}>
                <Link to={'/Customer_details'} className="card-link">
                    <div className="card-body">
                        <h5 className="card-title"  style={{textAlign:"center"}}><b>Customer Details</b></h5>
                    </div>
                </Link>
            </div>

            <div className="card1" style={{marginTop:"1.5cm"}}>
                <Link to={'/Payment_details'} className="card-link">
                    <div className="card-body">
                        <h5 className="card-title"  style={{textAlign:"center"}}><b>Payments</b></h5>
                    </div>
                </Link>
            </div>

            <div className="card1" style={{marginLeft:"8.5cm",marginTop:"2cm"}}>
                <Link to={'/Rooms_details'} className="card-link">
                    <div className="card-body">
                        <h5 className="card-title"  style={{textAlign:"center"}}><b>Room Details</b></h5>
                    </div>
                </Link>
            </div>

            <div className="card1" style={{marginTop:"2cm"}}>
                <Link to={'/Employee_Staff_Details'} className="card-link">
                    <div className="card-body">
                        <h5 className="card-title"  style={{textAlign:"center"}}><b>Employee/Staff Details</b></h5>
                    </div>
                </Link>
            </div>

            <div className="card1" style={{marginTop:"2cm"}}>
                <Link to={'/Cancellations'} className="card-link">
                    <div className="card-body">
                        <h5 className="card-title"  style={{textAlign:"center"}}><b>Cancellations</b></h5>
                    </div>
                </Link>
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

export default Adminsdashboard;
