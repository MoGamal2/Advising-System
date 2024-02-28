import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteCourseInGP = () => {
  const navigate = useNavigate();

  const [StudentID, setStudentID] = useState("");
  const [SemCode, setSemCode] = useState("");
  const [CourseID, setCourseID] = useState("");

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

  const handle = () => {
    axios
      .post("http://localhost:5000/delCourse_inGradPlan", {
        studentID: StudentID,
        semester_code: SemCode,
        courseID: CourseID,
      })
      .then((arg) => {
        arg.status === 200
          ? alert("Deleted Successfully")
          : alert("Deletion Failed");
        navigate("/Advisor");
      });
  };

  return (
    <div style={formStyle}>
      <h2>Delete Course In Graduation Plan</h2>
      <input
        type="text"
        placeholder="StudentID"
        value={StudentID}
        onChange={(e) => setStudentID(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="SemesterCode"
        value={SemCode}
        onChange={(e) => setSemCode(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="CourseID"
        value={CourseID}
        onChange={(e) => setCourseID(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handle} style={buttonStyle}>
        Delete
      </button>
    </div>
  );
};

export default DeleteCourseInGP;
