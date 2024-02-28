import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const IssueInstallmentForm = () => {
  const navigate = useNavigate();

  const [payment_id, setPaymentID] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0% 30%",
    justifyContent: "center ",
    height: "100vh",
    width: "40%", // Further decreased height
  };

  const inputStyle = {
    margin: "2%",
    padding: "3%",
    width: "100%", // Further decreased width
    fontSize: "1em", // Further decreased font size
  };

  const buttonStyle = {
    margin: "8%",
    padding: "10px",
    width: "100%", // Further decreased width
    fontSize: "1.2em", // Further decreased font size
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleReg = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/issueInstallments", {
        payment_id,
      })
      .then((arg) => {
        arg.status === 200
          ? alert("Issued Successfully")
          : alert("Issuing Failed");
        navigate("/Admin");
      });
  };

  return (
    <div style={formStyle}>
      <h2>Please Fill The Below Requirements</h2>
      <input
        type="text"
        placeholder="PaymentID"
        value={payment_id}
        onChange={(e) => setPaymentID(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handleReg} style={buttonStyle}>
        Issue
      </button>
    </div>
  );
};

export default IssueInstallmentForm;
