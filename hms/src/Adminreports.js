import React from "react";
import './Admindashboard.css';
import { Link } from "react-router-dom";
function Adminsreports(){
    return(
       <>
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
                        
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        <Link to={'/LoginCard'}>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                        </Link>
                    </aside>
                </div>

     <div className="food-container" >
      <div className="food-options" style={{marginLeft:"14cm",marginTop:"5cm",width:"12cm",height:"6cm",backgroundColor:"#2c3e50"}}>
        <h1 style={{color:"whitesmoke",marginLeft:"2.5cm"}}>Report Types</h1><br/><br/>
        <ul className='vv5'>
        <li className='vv6' style={{color:"white"}}><Link to={"/Reportcomponent"} style={{color:"whitesmoke"}}><h4> Status Reports</h4></Link></li><br></br>
          
          <li  className='vv6' style={{color:"white"}}> <Link to={"/Reportspayment"} style={{color:"whitesmoke"}}><h4>Payment Reports</h4></Link></li><br></br>
        
        </ul>
      </div>


      </div> 
     <div className="footer30" >Admin Data</div>
       </> 
    )
}

const sidebarLabelStyle = {
    color: 'white',
    marginLeft: '-0.1cm',
    fontSize: 'larger',
    marginTop: '-0.2cm',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};
export default Adminsreports;