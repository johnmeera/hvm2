import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindashboard.css';
import { Link } from 'react-router-dom';

function Cancellations() {
    const [allCancellations, setAllCancellations] = useState([]);
    const tableData = allCancellations;
  
    // Fetch all customers
    const getAllCancellations = async () => {
      try {
        const response = await axios.get('http://localhost:8088/api-v1');
        console.log(response.data);
        setAllCancellations(response.data);
      } catch (error) {
        console.error('Error fetching all cancellations:', error);
      }
    };
  
    useEffect(() => {
      // Fetch all customers on component mount
      getAllCancellations();
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
                                 <th>customer_Id</th>
                                    <th>Customer_name</th>
                                    <th>Cancellaion_type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    {/* <th>Refund_status</th> */}
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {tableData.map((cancellations, index) => (
                                <tr key={index}>
                                    <td>{cancellations.customerid}</td>
                                    <td>{cancellations.customername}</td>
                                    <td>{cancellations.booking_type}</td>
                                    <td>{cancellations.amount}</td>
                                    <td>{cancellations.status}</td>
                                    {/* <td>{cancellations.refund_status}</td> */}
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

export default Cancellations;
