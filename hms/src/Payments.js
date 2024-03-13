import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UPI from "./UPI";
import CCBanks from "./CCBanks";
import DCBanks from "./DCBanks";
import Banktransfer from "./Banktransfer";

function Payments() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "cash", label: "Cash" },
    { value: "UPI", label: "UPI" },
    { value: "CCBanks", label: "Credit Card" },
    { value: "DCBanks", label: "Debit Card" },
    { value: "Banktransfer", label: "Bank Transfer" }
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderPaymentComponent = () => {
    switch (selectedOption) {
      case "UPI":
        return <UPI />;
      case "Creditcard":
        return <CCBanks />;
      case "Debitcard":
        return <DCBanks />;
      case "Banktransfer":
        return <Banktransfer />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="form-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(https://img.freepik.com/free-vector/gray-curve-background_53876-99567.jpg?w=900&t=st=1707476019~exp=1707476619~hmac=1bbd7be8fcfd83a1e3b2f06b0034656478d1a94c0cf88d0e401db240b47260c6)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
      >
        <form
          className="formn"
          style={{
            marginTop: "-5cm",
            color: "black",
            width: "15cm",
            height: "10cm",
            borderRadius: "50px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
          }}
        >
          <h1 style={{ marginLeft: "0.3cm" }}>
            <b>Payment Details</b>
          </h1>
          <br />
          <br />
          <br />

          <label
            htmlFor="Dropdown"
            style={{ marginLeft: "0.6cm", fontSize: "larger" }}
          >
            <b>Payment Mode:</b>
          </label>
          <select
            id="dropdown"
            style={{
              marginLeft: "0.5cm",
              width: "4cm",
              height: "2em",
              backgroundColor: selectedOption ? "whitesmoke" : "white"
            }}
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="" style={{ textAlign: "center" }}>
              --Type--
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <br />
          <br />
          <br />
          <br />

          {selectedOption && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link
                to={`/${selectedOption.toLowerCase()}`}
                style={{ color: "black", marginLeft: "6cm" }}
              >
                Go to {selectedOption}{" "}
              </Link>
              <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5em" }} />
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Payments;
