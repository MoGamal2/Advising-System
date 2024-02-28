import axios from "axios";
import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";

const StudentRegForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [faculty, setFaculty] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [semester, setSemester] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
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

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/student_Reg", {
        f_name: firstName,
        l_name: lastName,
        password,
        faculty,
        email,
        major,
        Semester: semester,
      })
      .then((arg) => {
        if (arg.status === 200) {
          navigate("/ShowStudentID");
        }
      });
  };

  return (
    <div style={formStyle}>
      <form></form>
      <h2>Student Registration</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Faculty"
        value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Semester"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleRegister} style={buttonStyle}>
        Register
      </button>
    </div>
  );
};

export default StudentRegForm;
