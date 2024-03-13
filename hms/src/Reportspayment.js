import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindashboard.css';
import './Reportspayment.css';
import { Link } from 'react-router-dom';

function Reportspayment() {
  const [paymentreports, setPaymentReports] = useState(null);
  const [allPaymentReports, setAllPaymentReports] = useState([]);

  // Fetch a single payment report by ID
  const getPaymentReportsById = async (id) => {
    try {
      const response = await axios.get('http://localhost:8085/api-v1/1');
      setPaymentReports(response.data);
    } catch (error) {
      console.error('Error fetching payment reports by ID:', error);
    }
  };

  // Fetch all payment reports
  const getAllPaymentReports = async () => {
    try {
      const response = await axios.get('http://localhost:8085/api-v1');
      console.log(response.data);
      setAllPaymentReports(response.data);
    } catch (error) {
      console.error('Error fetching all payment reports:', error);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch a single payment report by ID (replace '1' with the actual ID you want to fetch)
    getPaymentReportsById(1);

    // Fetch all payment reports
    getAllPaymentReports();
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
                        <Link to={'/Restaurant'}>
                        <p style={sidebarLabelStyle}><b>Restaurant</b></p>
                        </Link><br/><br/>
                        <Link to={'/Adminreports'}>
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        </Link>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        <Link to={'/LoginCard'}>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                        </Link>
                    </aside>
                </div>
      <h1 style={{ marginRight: "15cm", float: "right", marginTop: "1cm" }}><b>Payment Reports</b></h1><br/><br/>
      {/* {paymentreports && (
        <div className='order-form1'>
          <p style={{marginTop:"4.5cm",float:"right",marginRight:"15cm"}}><b>customer_id: {paymentreports.customer_Id}</b></p><br />
          <p style={{float:"right",marginTop:"5.1cm",marginRight:"5cm"}}><b>customer_name: {paymentreports.customer_Name}</b></p><br /><br/>
          <p style={{float:"right",marginTop:"5cm",marginRight:"5cm"}}><b>amount: {paymentreports.amount}</b></p><br />
          <p style={{float:"right",marginTop:"5.5cm",marginRight:"20.2cm"}}><b>payment_id: {paymentreports.paymentId}</b></p><br />
          <p style={{float:"right",marginTop:"6cm",marginRight:"3.9cm"}}><b>payment_type: {paymentreports.payment_Type}</b></p><br />
        </div>
      )} */}

      {/* Display data for all payment reports */}
      {/* <div className='reports' style={{marginLeft:"10cm"}}> */}
      {/* <h2>All Payment Reports</h2> */}
      {/* <ul>
        {allPaymentReports.map((reports) => (
          <li key={reports.customer_id}>
            <p>Customer_Name: {reports.customer_name}</p>
            <p>Amount: {reports.amount}</p>
            <p>PaymentId: {reports.payment_id}</p>
            <p>Payment_Type: {reports.payment_type}</p>
          </li>
        ))}
      </ul>
      </div> */}

<div className="table-responsiverc">
    <table className='table table-striped table-sm' style={{marginTop:"2cm",marginLeft:"8cm"}}>
      <thead>
        <tr>
          <th>customerId</th>
          <th>customername</th>
          <th>PaymentId</th>
          <th>paymenttype</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
      {allPaymentReports.map((reports) => (
          <tr key={reports.customerid}>
            <td>{reports.customerid}</td>
            <td>{reports.customername}</td>
            <td>{reports.paymentid}</td>
            <td>{reports.paymenttype}</td>
            <td>{reports.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
export default Reportspayment;
