//ask: when typing in inputs it navigates back to /Student
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMobileForm = () => {
  const navigate = useNavigate();

  const [StudentID, setStudentID] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10% auto", // Center the form on the page
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "50%", // Adjusted width
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    margin: "20px 0",
    padding: "15px",
    width: "100%",
    fontSize: "1.2em",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={formStyle}>
      <form>
        <h2>Add Phone Number</h2>
        <input
          type="text"
          placeholder="Student ID"
          value={StudentID}
          onChange={(e) => setStudentID(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={inputStyle}
          required
        />
        <button
          onClick={() =>
            axios.post("http://localhost:5000/addStudentMobile", {
              studentID: StudentID,
              mob_num: PhoneNumber,
            }) && navigate("/Student") & alert("Added Successfully")
          }
          style={buttonStyle}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMobileForm;
