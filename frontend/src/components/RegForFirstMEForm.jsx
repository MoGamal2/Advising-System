import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegForFirstMEForm = () => {
  const navigate = useNavigate();

  const [StudentID, setStudentID] = useState("");
  const [CourseID, setCourseID] = useState("");
  const [CurrSem, setCurrSem] = useState("");

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
      .post("http://localhost:5000/regFirstMakeup", {
        StudentID,
        courseID: CourseID,
        studentCurrentsemester: CurrSem,
      })
      .then((arg) => {
        arg.status == 200
          ? alert("Registered Successfully")
          : alert("Registeration Failed");
        navigate("/Student");
      });
  };

  return (
    <div style={formStyle}>
      <h2>First Makeup Exam Registration</h2>
      <input
        type="text"
        placeholder="StudentID"
        value={StudentID}
        onChange={(e) => setStudentID(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="CourseID"
        value={CourseID}
        onChange={(e) => setCourseID(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="CurrentSemester"
        value={CurrSem}
        onChange={(e) => setCurrSem(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleReg} style={buttonStyle}>
        Register
      </button>
    </div>
  );
};

export default RegForFirstMEForm;
