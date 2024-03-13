// import React, { useEffect, useState } from 'react';
// import axios from 'axios';  
// import { Link } from 'react-router-dom';

// import "./Reportcomponent.css";

// function Reportcomponent() {
//   const [employeevs, setemployeevs] = useState([]);

//   useEffect(() => {
//     getReport();
//   }, []);

//   const getReport = () => {
//     axios.get('http://localhost:8100/employeevs')
//       .then((response) => {
//         setemployeevs(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching reports:', error);
//       });
//   };
//   const currentDate = new Date();
  
//   const formattedDate = currentDate.toLocaleDateString();
//   const formattedTime = currentDate.toLocaleTimeString();

//   return (
//     <>
//     <div className="body-container">
//                 <div className="header30">
//                     <Link to='/Admindashboard' style={{ fontSize: 'xx-large', marginLeft: '15cm', textDecoration: 'none', color: 'white', fontStyle: "italic" }}>
//                         <b>Admin Dashboard</b>
//                     </Link>
//                     <label style={{ fontSize: 'larger', marginLeft: '4.4cm', marginTop: "0.5cm" }}>
//                         <b>Logged in:{"\t"}{"\t"}</b> Nikhil Tammineedi
//                     </label>
//                 </div><br/>

//                 <div className="sidebar30" style={{marginTop:"-0.65cm"}}>
//                     <aside className="aside1">
//                         <Link to={'/Accomodations'} style={{ textDecoration: "none" }}>
//                             <p style={sidebarLabelStyle}><b>Accommodations</b></p>
//                         </Link><br/><br/>
//                         <Link to={'/Createaccount'} style={{ textDecoration: "none" }}>
//                             <p style={sidebarLabelStyle}><b>Create Account</b></p>
//                         </Link><br/><br/>
//                         <Link to={'/Restaurant'}>
//                         <p style={sidebarLabelStyle}><b>Restaurant</b></p>
//                         </Link><br/><br/>
//                         <Link to={'/Adminreports'}>
//                         <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
//                         </Link>
//                         <Link to={'/Servicescomponent'}>
//                         <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
//                         </Link>
//                         <Link to={'/LoginCard'}>
//                         <p style={sidebarLabelStyle}><b>Sign-out</b></p>
//                         </Link>
//                     </aside>
//                 </div>
// <h3 className="customerrc"style={{marginTop:"2cm",marginLeft:"6cm"}}>Date&time :{formattedDate} {formattedTime}</h3>
// <br/>

// <div className='container'>
//   <h1 className='text-centerrc' style={{marginTop:"1cm",marginLeft:"3cm"}}>Reports</h1><br/>
//   <div className="table-responsiverc">
//     <table className='table table-striped table-sm' style={{marginTop:"1cm"}}>
//       <thead>
//         <tr>
//           <th>customerId</th>
//           <th>customername</th>
//           <th>roomtype</th>
//           <th>roomnumber</th>
//           <th>itemmenu</th>
//           <th>amounttobepaid</th>
//           <th>paymenttype</th>
//           <th>status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employeevs.map((employeev) => (
//           <tr key={employeev.customerId}>
//             <td>{employeev.customerId}</td>
//             <td>{employeev.customername}</td>
//             <td>{employeev.roomtype}</td>
//             <td>{employeev.roomnumber}</td>
//             <td>{employeev.itemmenu}</td>
//             <td>{employeev.amounttobepaid}</td>
//             <td>{employeev.paymenttype}</td>
//             <td>{employeev.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
// </div>
// <Link to={'/Admindashboard'}>
//         <button type='submit' style={{marginLeft:"7cm",marginTop:"13cm"}}><b>Back</b></button>
//         </Link>
// <div className="footer30">Admin Data</div>
//     </>
//   );
// }
// const sidebarLabelStyle = {
//   color: 'white',
//   marginLeft: '-0.1cm',
//   fontSize: 'larger',
//   marginTop: '-0.2cm',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
// };

// export default Reportcomponent;


import React, { useState } from 'react';
import axios from 'axios';  
import { Link } from 'react-router-dom';
import Hotelreports from './Hotelreports';
import Restaurantreports from './Restaurantreports';

function Reportcomponent() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const currentDate = new Date();
  
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
  

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
 <h3 className="customerrc"style={{marginTop:"0cm",marginLeft:"30cm"}}>Date&time :{formattedDate} {formattedTime}</h3>
 <br/>
    <div className="reports">
      {selectedCategory === "hotel" && (
        <Hotelreports selectedType={selectedType} handleTypeChange={handleTypeChange} />
      )}
      {selectedCategory === "restaurant" && (
        <Restaurantreports selectedType={selectedType} handleTypeChange={handleTypeChange} />
      )}

      {!selectedCategory && (
        <div style={{marginLeft:"15cm",marginTop:"1cm"}}>
          <label htmlFor="categoryDropdown" style={{fontSize:"larger"}}><b>Select the category{'\t'}:</b> </label>
          <select id="categoryDropdown" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{marginLeft:"0.2cm",width:"4cm",height:"0.8cm",border:"1px solid black"}}>
            <option value="" style={{textAlign:"center"}}>--Select--</option>
            <option value="hotel" style={{textAlign:"center"}}>Hotel</option>
            <option value="restaurant" style={{textAlign:"center"}}>Restaurant</option>
          </select>
        </div>
      )}
    </div>
    <Link to={'/Adminreports'}>
         <button type='submit' style={{marginLeft:"7cm",marginTop:"0.2cm"}}><b>Back</b></button>
         </Link>
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

export default Reportcomponent;