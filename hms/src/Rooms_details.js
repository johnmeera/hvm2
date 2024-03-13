import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindashboard.css';
import { Link } from 'react-router-dom';

const tableData = [
  {
    sno: null,
    roomtype: '',
    price: null,
    gst: null,
    discount:null,
    
  },
];

function Rooms_details() {
  const [allRooms, setAllRooms] = useState([]);

  // Fetch all payments
  const getAllRooms = async () => {
    try {
      const response = await axios.get('http://localhost:8086/api-v1'); // Replace with your correct endpoint
      console.log(response.data);
      setAllRooms(response.data);
    } catch (error) {
      console.error('Error fetching all rooms:', error);
    }
  };

  useEffect(() => {
    // Fetch all payments on component mount
    getAllRooms();
  }, []);

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
                        <p style={sidebarLabelStyle}><b>Restaurant</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                    </aside>
                </div>

       

        <div className="table" style={{ marginTop: "2cm", marginLeft: "9cm" }}>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Room_type</th>
                <th>Price</th>
                <th>GST</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {allRooms.map((rooms, index) => (
                <tr key={index}>
                  <td>{rooms.sno}</td>
                  <td>{rooms.roomtype}</td>
                  <td>{rooms.price}</td>
                  <td>{rooms.gst}</td>
                  <td>{rooms.discount}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>

         <Link to={'/Admindashboard'}>
          <button type='submit' style={{marginLeft:"7cm",marginTop:"5cm"}}><b>Back</b></button>
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

export default Rooms_details;
