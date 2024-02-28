import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteCourseWithSlots = () => {
  const navigate = useNavigate();

  const [courseID, setCourseID] = useState("");

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
      .post("http://localhost:5000/del_Courses_Slots", {
        course_id: courseID,
      })
      .then((arg) => {
        arg.status === 200
          ? alert("Deleted Successfully")
          : alert("Deletion Failed");
        navigate("/Admin");
      });
  };

  return (
    <div style={formStyle}>
      <h2>Please Fill The Requirements</h2>
      <input
        type="text"
        placeholder="CourseID"
        value={courseID}
        onChange={(e) => setCourseID(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handle} style={buttonStyle}>
        Delete
      </button>
    </div>
  );
};

export default DeleteCourseWithSlots;
