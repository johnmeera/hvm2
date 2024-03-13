import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindashboard.css';
import { Link } from 'react-router-dom';

function Customer_details() {
  const [allCustomers, setAllCustomers] = useState([]);
  const tableData = allCustomers;

  // Fetch all customers
  const getAllCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api-v1');
      console.log(response.data);
      setAllCustomers(response.data);
    } catch (error) {
      console.error('Error fetching all customers:', error);
    }
  };

  useEffect(() => {
    // Fetch all customers on component mount
    getAllCustomers();
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
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Mobileno</th>
                <th>Email ID</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.customerid}</td>
                  <td>{customer.customername}</td>
                  <td>{customer.mobileno}</td>
                  <td>{customer.emailid}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.address}</td>
                  <td>{customer.username}</td>
                  <td>{customer.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to={'/Admindashboard'}>
          <button type='submit' style={{marginLeft:"7cm",marginTop:"4cm"}}><b>Back</b></button>
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

export default Customer_details;
