import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function RuPayCreditCard() {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const navigate = useNavigate();

  function verify(e) {
    e.preventDefault();

    // Perform RuPay credit card validation
    const isValidRuPayCard = validateRuPayCreditCard(card, expiry, cvv, cardHolderName);

    if (isValidRuPayCard) {
      alert("Credentials Validated. Redirecting...");
      navigate('/');
    } else {
      alert("Invalid Credentials. Please check your details, may be some fields might be missing");
    }
  }

  function validateRuPayCreditCard(cardNumber, expiryDate, cvv, cardHolder) {
    // Add your RuPay credit card validation logic here
    // For example, check card number format, expiry date, CVV length, etc.

    // Placeholder validation logic
    const isValidFormat = /^\d{16}$/.test(cardNumber);
    const isValidExpiry = /^\d{2}\/\d{2}$/.test(expiryDate);
    const isValidCVV = /^\d{3}$/.test(cvv);
    const isValidCardHolder = cardHolder.trim() !== "";

    return isValidFormat && isValidExpiry && isValidCVV && isValidCardHolder;
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
          marginTop: "-1cm",
          width: "19cm",
          height: "14cm",
          borderRadius: "50px",
          color: "whitesmoke",
          border: "2px solid black", // Border color of the form
          
        }}>
          <h1 style={{ marginLeft: "5.5cm",color:"black" }}><b>RuPay Credit card  </b></h1><br />

          <label style={{ marginLeft: "2cm", fontSize: "larger",color:"black" }}><b>Enter your RuPay Credit card number:</b></label><br />
          <input style={{ marginLeft: "2cm", width: "14cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid black", borderRadius: "10px" }}
            type="number"
            id="number"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            placeholder="Enter Card Details"
            required
          /><br />
          <label style={{ marginLeft: "2cm", fontSize: "larger", float: "left", marginTop: "0.5cm" ,color:"black"}}><b>Card Expiry Date:</b></label>
          <input style={{ marginLeft: "2cm", width: "6cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid black", borderRadius: "10px", float: "left", marginRight: "10cm" }}
            type="text"
            id="expirydate"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="01/30"
            required
          /><br />
          <label style={{ marginLeft: "2cm", fontSize: "larger", float: "right", marginRight: "7cm", marginTop: "-2.0cm",color:"black" }}><b>Card CVV:</b></label><br />
          <input style={{ width: "6cm", height: "0.8cm", textAlign: "center", marginTop: "-0.8cm", padding: "5px", border: "1px solid black", borderRadius: "10px", float: "right", marginRight: "3cm" }}
            type="number"
            id="number"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            required
          /><br />
          <label style={{ marginLeft: "2cm", fontSize: "larger", marginTop: "1cm",color:"black" }}><b>Card Holder Name:</b></label><br />
          <input style={{ marginLeft: "2cm", width: "14cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid black", borderRadius: "10px" }}
            type="text"
            id="text"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="Card Holder Name"
            required
          /><br /><br />

          <button type="submit" to={'/'} className="success" style={{ marginLeft: "2.4cm", marginTop: "0.7cm", width: "13cm", height: "1cm" }} onClick={verify}><b>Make Payment</b></button>
          <div className="back" style={{ marginTop: "-11.5cm" }}>
            <a href="/CCBanks" style={{ marginLeft: "1cm", color: "black", textDecoration: "none" }}><b>Back</b></a>
          </div>
        </form>
      </div>
    </>
  );
}

export default RuPayCreditCard;
