//ask: When typing in inputs navigates back to "/Student"

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChooseInstructorForm = () => {
  const navigate = useNavigate();

  const [StudentID, setStudentID] = useState("");
  const [InstructorID, setInstructorID] = useState("");
  const [CourseID, setCourseID] = useState("");
  const [CurrSemCode, setCurrSemCode] = useState("");

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

  const handle = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/chooseInstructorForCourse", {
        student_id: StudentID,
        instructor_id: InstructorID,
        course_id: CourseID,
        curr_sem_code: CurrSemCode,
      })
      .then((arg) => {
        arg.status === 200 ? alert("Request Sent") : alert("Request Failed");
        navigate("/Student");
      });
  };

  return (
    <div style={formStyle}>
      <h2>Choose Instructor</h2>
      <input
        type="text"
        placeholder="StudentID"
        value={StudentID}
        onChange={(e) => setStudentID(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="InstructorID"
        value={InstructorID}
        onChange={(e) => setInstructorID(e.target.value)}
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
        placeholder="CurrentSemesterCode"
        value={CurrSemCode}
        onChange={(e) => setCurrSemCode(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handle} style={buttonStyle}>
        Sumbit Choice
      </button>
    </div>
  );
};

export default ChooseInstructorForm;
