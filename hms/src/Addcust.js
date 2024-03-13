import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./Addcust.css";

function Addcust() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend endpoint to fetch data
    axios.get('http://localhost:8100/employees/employees')
      .then(response => {
        // Set the data in the state
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs once on component mount
  const currentDate = new Date();
  
  // Format the date and time
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  const [isMenuOpen, setMenuOpen] = useState(false);

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

  return (
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
    

      <div className='container'>
        <h1 className='text-centerabac' style={{marginTop:"6cm",marginLeft:"2cm"}}>Add-on services</h1>
        <div className="table-responsiveabac">
          <table className='table table-striped table-sm' style={{marginTop:"5cm",marginLeft:"-7cm"}}>
            <thead>
              <tr>
                <th>serviceno</th>
                <th>servicename</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.serviceno}>
                  <td>{employee.serviceno}</td>
                  <td>{employee.servicename}</td>
                  <td>{employee.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
      
          <Link to={'/Customerdashboard'}>
                <button type="submit" className="btn btn-light" style={{marginTop:"5cm",marginLeft:"-10cm",backgroundColor:"black",color:"whitesmoke"}}><b>Back</b></button>
                </Link>

        </div>
        </div>
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

export default Addcust;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import "./Addcust.css";

// function Addcust() {
//   const [employee, setEmployee] = useState(null);

//   // Fetch Premium Suite data
//   const fetchEmployee = async () => {
//     try {
//       const response = await axios.get('http://localhost:8088/employee/3');
//       setEmployee(response.data);
//     } catch (error) {
//       console.error('Error fetching employee:', error);
//     }
//   };

//   // useEffect to fetch data when the component mounts
//   useEffect(() => {
//     fetchEmployee();
//   }, []);

//   return (
//     <>
//       <div>
//         <div className="containerreport">
//           <div className="left-div">
//             <br/>
//             <a href="#">Bookings</a>
//             <a href="#">Food</a>
//             <a href="#">Add-on services</a>
//             <a href="#">Area-info</a>
//           </div>
//         </div>
//       </div>
//       <h3 className="customer">Date&time :</h3>
//       <br/>
//       <h3 className="customers">Customer ID :</h3>

//       <div className='container'>
//         <h1 className='text-center'>Add-on services</h1>
//         <div className="table-responsive">
//           <table className='table table-striped table-sm'>
//             <thead>
//               <tr>
//                 <th>serviceno</th>
//                 <th>servicename</th>
//                 <th>price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employee ? (
//                 <tr key={employee.serviceno}>
//                   <td>{employee.serviceno}</td>
//                   <td>{employee.servicename}</td>
//                   <td>{employee.price}</td>
//                 </tr>
//               ) : (
//                 <tr>
//                   <td colSpan="3">Loading...</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Addcust;





