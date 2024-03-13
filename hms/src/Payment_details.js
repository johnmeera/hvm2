import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindashboard.css';
import { Link } from 'react-router-dom';

const tableData = [
  {
    customerid: null,
    customername: '',
    transactionid: null,
    booking_refid: null,
    status:'',
    price: null,
    paymenttype: null,
    date: null,
    
  },
];

function Payment_details() {
  const [allPayments, setAllPayments] = useState([]);

  // Fetch all payments
  const getAllPayments = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api-v1'); // Replace with your correct endpoint
      console.log(response.data);
      setAllPayments(response.data);
    } catch (error) {
      console.error('Error fetching all payments:', error);
    }
  };

  useEffect(() => {
    // Fetch all payments on component mount
    getAllPayments();
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
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Transaction_Id</th>
                <th>Booking_refid</th>
                <th>Status</th>
                <th>Price</th>
                <th>Payment Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {allPayments.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.customerid}</td>
                  <td>{payment.customername}</td>
                  <td>{payment.transactionid}</td>
                  <td>{payment.booking_refid}</td>
                  <td>{payment.status}</td>
                  <td>{payment.price}</td>
                  <td>{payment.paymenttype}</td>
                  <td>{payment.date}</td>
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

export default Payment_details;
