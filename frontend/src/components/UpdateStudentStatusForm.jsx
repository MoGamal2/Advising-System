import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateStudentStatusForm = () => {
  const navigate = useNavigate();

  const [StudentID, setStudentID] = useState("");

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
      .post("http://localhost:5000/update_Student_Status", {
        student_id: StudentID,
      })
      .then((arg) => {
        arg.status === 200
          ? alert("Updated Successfully")
          : alert("Update Failed");
        navigate("/Admin");
      });
  };

  return (
    <div style={formStyle}>
      <h2>Update Student Status</h2>
      <input
        type="text"
        placeholder="StudentID"
        value={StudentID}
        onChange={(e) => setStudentID(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handle} style={buttonStyle}>
        Update
      </button>
    </div>
  );
};

export default UpdateStudentStatusForm;
