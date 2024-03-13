import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function RupayDebitcard() {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const navigate = useNavigate();

  function verify(e) {
    e.preventDefault();

    if (card === "6522940241717464" && expiry === "09/26" && cvv === "973" && cardHolderName.trim() !== "") {
      alert("Credentials Validated. Redirecting...");
      navigate('/');
    } else {
      alert("Invalid Credentials.  Please check your details, may be some fields might be missing");
    }
  }

  return (
    <>
      <div className="form-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" ,backgroundImage:"url(https://img.freepik.com/free-vector/blue-geometric-minimal-background_53876-99573.jpg?w=900&t=st=1707477985~exp=1707478585~hmac=5515c6c7cbcfc920f011915731395341d9aa551342b58b14284a17ea0cfcfe47)",backgroundSize:"cover",height:"100vh"}}>
        <form className="formn" style={{ marginTop: "-1cm", width: "20cm", height: "14cm", borderRadius: "50px", display: "flex", flexDirection: "column", alignItems: "center" ,border:"2px solid black"}}>
       
          <h1 style={{color:"black"}}><b>Rupay Debit Card </b></h1><br/>
          
          <label htmlFor="cardNumber" style={{ marginLeft: "-7cm" ,fontSize:"larger",color:"black"}}><b>Enter your Debit card number:</b></label>
          <input style={{ marginLeft: "0cm", width: "14cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid black", borderRadius: "10px" }}
            type="text"
            id="cardNumber"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            placeholder="Enter Card Details"
            required
          />

          <label htmlFor="expiryDate" style={{ marginLeft: "-10cm", fontSize: "larger", float: "left", marginTop: "1cm" ,color:"black"}}><b>Card Expiry Date:</b></label>
          <input  style={{ marginLeft: "2cm", width: "6cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid black", borderRadius: "10px", float: "left", marginRight: "10cm" }}
            type="text"
            id="expiryDate"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="01/30"
            required
          />

          <label htmlFor="cvv" style={{ marginLeft: "9.9cm", fontSize: "larger", float: "right", marginRight: "7cm", marginTop: "-2.1cm",color:"black" }}><b>CVV:</b></label>
          <input style={{ width: "6cm", height: "0.8cm", textAlign: "center", marginTop: "0.52cm", padding: "5px", border: "1px solid black", borderRadius: "10px", float: "right", marginLeft: "8cm" }}
            type="password"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            required
          />

          <label htmlFor="cardHolderName" style={{ marginLeft: "-9.5cm", fontSize: "larger", marginTop: "1cm",color:"black" }}><b>Card Holder Name:</b></label>
          <input  style={{ marginLeft: "0cm", width: "14cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid black", borderRadius: "10px" }}
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="Card Holder Name"
            required
          />
          <br/>
          <button type="submit" className="success" style={{ marginLeft: "0cm", marginTop: "0.7cm", width: "13cm", height: "1cm" }} onClick={verify}><b>Make Payment</b></button>
          <div className="back" style={{marginTop:"-12.2cm"}}>
          <a href="/DCBanks" style={{marginLeft:"-9cm",color:"black",textDecoration:"none"}}><b>Back</b></a>
          </div>
        </form>
      </div>
    </>
  );
}

export default RupayDebitcard;
