import React from "react";
import { Link } from "react-router-dom";

function UPI() {
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
          marginTop: "-1cm",
          width: "19cm",
          height: "12cm",
          borderRadius: "50px",
          color: "black",
          border: "2px solid black",
        }}>
          <h1 style={{ marginLeft: "7.5cm", marginTop: "1cm" }}><b>UPI/BHIM</b></h1>
          <div>
            <Link to={'/Phonepe'}>
              <button type="submit" className="btn btn-light" style={{ marginTop: "2.5cm", width: "3cm", height: "1cm", marginLeft: "5cm", border: "2px solid black",backgroundColor:"white" }}>
                <b><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1280px-PhonePe_Logo.svg.png" width="100cm" height="30cm" style={{ marginLeft: "-0.2cm", marginTop: "-0.25cm" }} alt="PhonePe Logo" /></b>
              </button>
            </Link>
            <Link to={'/Googlepay'}>
              <button type="button" className="btn btn-light" style={{  width: "3cm", height: "1cm", marginLeft: "10cm", border: "2px solid black" ,backgroundColor:"white",marginTop:"-1cm"}}>
                <b><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png" width="100cm" height="31cm" style={{ marginLeft: "-0.2cm", marginTop: "-0.23cm" }} alt="Google Pay Logo" /></b>
              </button><br />
            </Link>
          </div><br />
          <div className="back">
            <a href="http://localhost:3000/Payments" style={{ marginLeft: "2cm", color: "black", textDecoration: "none" }}><b>Back</b></a>
          </div>
        </form>
      </div>
    </>
  )
}

export default UPI;
