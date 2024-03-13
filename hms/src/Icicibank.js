// ICICIBank.js

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function IciciBank() {
    const [Account, setAccount] = useState("");
    const [Ifsc, setIfsc] = useState("");
    const [AccountHolderName, setAccountHolderName] = useState("");
    const navigate = useNavigate();

    function verify(e) {
        e.preventDefault();

        // Basic validations
        const accountPattern = /^[0-9]{16}$/; // Assuming ICICI account number has 16 digits
        const ifscPattern = /^[A-Za-z]{4}[0-9]{7}$/; // Assuming ICICI IFSC code format
        const namePattern = /^[A-Za-z\s]+$/; // Assuming account holder name only contains letters and spaces

        if (!accountPattern.test(Account) || !ifscPattern.test(Ifsc) || !namePattern.test(AccountHolderName)) {
            alert("Invalid input format. Please check your details.");
            return;
        }

        // Specific ICICI bank validations
        if (Account !== "1234567890123456" || Ifsc !== "ICIC0001234" || AccountHolderName.trim() !== "Nikhil") {
            alert("Invalid Credentials. Please check your details.");
        } else {
            alert("Credentials Validated. Redirecting...");
            navigate('/');
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
                <form className="formn" style={{ marginTop: "0.5cm", width: "15cm", height: "15cm", borderRadius: "50px", border: "2px solid black" }}>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png" style={{ width: "6cm", marginLeft: "4.3cm", marginTop: "0.5cm", height: "2cm" }} />
                      <label style={{ marginLeft: "2cm", fontSize: "larger", marginTop: "1cm", color: "black" }}><b>Enter Account Number:</b></label><br />
                    <input style={{ marginLeft: "2cm", width: "10cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid #ccc", borderRadius: "10px" }}
                        type="text"
                        id="text"
                        value={Account}
                        onChange={(e) => setAccount(e.target.value)}
                        placeholder="Account Number"
                        required
                    />
                    <label style={{ marginLeft: "2cm", fontSize: "larger", marginTop: "1cm", color: "black" }}><b>Enter IFSC Code:</b></label><br />
                    <input style={{ marginLeft: "2cm", width: "6cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid #ccc", borderRadius: "10px" }}
                        type="text"
                        id="text"
                        value={Ifsc}
                        onChange={(e) => setIfsc(e.target.value)}
                        placeholder="IFSC"
                        required
                    /><br />
                    <label style={{ marginLeft: "2cm", fontSize: "larger", marginTop: "1cm", color: "black" }}><b>Enter Holder Name:</b></label><br />
                    <input style={{ marginLeft: "2cm", width: "10cm", height: "0.8cm", textAlign: "center", marginTop: "0.5cm", padding: "5px", border: "1px solid #ccc", borderRadius: "10px" }}
                        type="text"
                        id="text"
                        value={AccountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        placeholder="Account Holder Name"
                        required
                    />

                    <div className='button'>
                        <button type="button" to={"/"} style={{ marginLeft: '4.8cm', marginTop: "0.5cm", width: "5cm", height: "1cm",backgroundColor:"lightgray" }} class="btn btn-light" onClick={verify}><b>Pay Now</b></button>
                    </div><br/>
                    <a href="http://localhost:3000/Banktransfer" style={{marginLeft:"6.5cm",color:"black"}}><b>Change</b></a>
           

                </form>
            </div>
        </>
    )
}

export default IciciBank;
