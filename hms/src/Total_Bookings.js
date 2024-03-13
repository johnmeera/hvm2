import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindashboard.css';
import { Link } from 'react-router-dom';

function Adminsdashboard() {
  const [allBookings, setAllBookings] = useState([]);

  // Fetch all bookings
  const getAllBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8083/api-v1');
      console.log(response.data);
      setAllBookings(response.data);
    } catch (error) {
      console.error('Error fetching all payment reports:', error);
    }
  };

  useEffect(() => {
    // Fetch all bookings on component mount
    getAllBookings();
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
                

        <div className="table" style={{ marginTop: '2cm', marginLeft: '9cm' }}>
          <table>
            <thead>
              <tr>
                <th>S_no</th>
                <th>Customer ID</th>
                <th>Booking Ref ID</th>
                <th>Customer Name</th>
                <th>Mobile Number</th>
                <th>Email ID</th>
                <th>Date</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Add-Ons</th>
              </tr>
            </thead>
            <tbody>
              {allBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.s_no}</td>
                  <td>{booking.customerid}</td>
                  <td>{booking.booking_refid}</td>
                  <td>{booking.customername}</td>
                  <td>{booking.mobileno}</td>
                  <td>{booking.emailid}</td>
                  <td>{booking.date}</td>
                  <td>{booking.adults}</td>
                  <td>{booking.children}</td>
                  <td>{booking.amount}</td>
                  <td>{booking.status}</td>
                  <td>{booking.aadons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to={'/Admindashboard'}>
          <button type='submit' style={{marginLeft:"7cm",marginTop:"3cm"}}><b>Back</b></button>
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

export default Adminsdashboard;
