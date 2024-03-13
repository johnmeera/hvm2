import React, { useState } from "react";

function Paymentstable() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div
        className="form-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          className="form"
          style={{
            marginTop: "5cm",
            background: "lightgrey",
            width: "15cm",
            height: "10cm",
            borderRadius: "50px",
          }}
        >
          <h1 style={{ marginLeft: "4.1cm" }}>
            <b> Customer Payment </b>
          </h1>
          <br />
          <br />
          <div>
            <label style={{ marginLeft: "0.6cm", fontSize: "larger" }}>
              <b>Payment table:</b>
            </label>
            <select
              name="Payment Mode"
              id="mode"
              style={{
                marginLeft: "0.5cm",
                width: "4cm",
                height: "0.7cm",
              }}
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="text" style={{ textAlign: "center" }}>
                --select--
              </option>
              <option value="customerId">Customer ID</option>
              <option value="paymentType">Payment type</option>
              <option value="amount">Amount</option>
            </select>
          </div>

       
          {selectedOption === "paymentType" && (
            <div>
              <label style={{ marginLeft: "0.6cm", fontSize: "larger" }}>
                <b>Payment Type:</b>
              </label>
              <select
                name="secondaryDropdown"
                id="secondaryDropdown"
                style={{
                  marginLeft: "0.5cm",
                  width: "4cm",
                  height: "0.7cm",
                }}
              >
                <option value="text">--select--</option>
                <option value="rooms">Rooms</option>
                <option value="food">Food</option>
              </select>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Paymentstable;
