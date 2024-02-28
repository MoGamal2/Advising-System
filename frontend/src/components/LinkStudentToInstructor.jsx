import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LinkStudentToInstructor = () => {
  const navigate = useNavigate();

  const [InstructorID, setInstructorID] = useState("");
  const [StudentID, setStudentID] = useState("");
  const [CourseID, setCourseID] = useState("");
  const [semCode, setSemCode] = useState("");

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
      .post("http://localhost:5000/link_Student_Course_Instructor", {
        course_id: CourseID,
        InstructorId: InstructorID,
        student_id: StudentID,
        sem_code: semCode,
      })
      .then((arg) => {
        arg.status === 200
          ? alert("Linked Successfully")
          : alert("Link Failed");
        navigate("/Advisor");
      });
  };

  return (
    <div style={formStyle}>
      <h2>Link Student To Instructor</h2>
      <input
        type="text"
        placeholder="CourseID"
        value={CourseID}
        onChange={(e) => setCourseID(e.target.value)}
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
        placeholder="StudentID"
        value={StudentID}
        onChange={(e) => setStudentID(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="SemCode"
        value={semCode}
        onChange={(e) => setSemCode(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handle} style={buttonStyle}>
        Link
      </button>
    </div>
  );
};

export default LinkStudentToInstructor;
