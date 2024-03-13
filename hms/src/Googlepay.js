import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function GooglePay() {
  const [id, setID] = useState("");
  const navigate = useNavigate();

  function verify(e) {
    e.preventDefault();

    // Regular expression to validate Google Pay UPI ID format
    const googlePayUpiRegex = /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,4}$/i;

    if (googlePayUpiRegex.test(id.toLowerCase())) {
      alert("Valid Google Pay UPI ID. Redirecting...");
      navigate('/');
    } else {
      alert("Invalid Google Pay UPI ID. Please check your details.");
    }
  }

  return (
    <>
       <div className="form-container" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(https://img.freepik.com/free-vector/blue-geometric-minimal-background_53876-99573.jpg?w=900&t=st=1707477985~exp=1707478585~hmac=5515c6c7cbcfc920f011915731395341d9aa551342b58b14284a17ea0cfcfe47)",
        backgroundSize: "cover",
        height: "100vh",
      }}>
         <form className="formn" style={{
          marginTop: "1cm",
          width: "19cm",
          height: "11cm",
          borderRadius: "50px",
          color: "black",
          border: "2px solid black", // Border color of the form
        }}> 
          <h1 style={{ marginLeft: "5cm" }}><b><img src="https://seeklogo.com/images/G/google-pay-logo-BFDEA14F81-seeklogo.com.png" alt="Google Pay Logo" width="60cm" height="40cm" style={{width:"2cm",marginTop:"0.5cm"}}></img><p style={{marginTop:"-1cm",marginLeft:"2.2cm"}}>GooglePay</p></b></h1><br /><br />
          <label style={{ marginLeft: "4cm", fontSize: "larger" }}><b>Enter UPI ID:</b></label><br />
          <input style={{ marginLeft: "4cm", width: "10cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "2px solid black", borderRadius: "10px" }}
            type="text"
            id="text"
            value={id}
            onChange={(e) => setID(e.target.value)}
            placeholder="john.doe@gmail.com"
            required
          />

          <button type="submit" to={'/'} className="btn btn-light" style={{ marginLeft: "7.5cm", marginTop: "1.5cm", width: "3cm",border:"2px solid black",backgroundColor:"white" }} onClick={verify}>Submit</button>
          <div className="back" style={{ marginTop: "-0.7cm" }}>
            <a href="/UPI" style={{ marginLeft: "2cm", color: "black", textDecoration: "none" }}><b>Back</b></a>
          </div>
        </form>
      </div>
    </>
  );
}

export default GooglePay;
