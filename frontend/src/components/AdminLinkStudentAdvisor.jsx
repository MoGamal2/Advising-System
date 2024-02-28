import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLinkStudentAdvisor = () => {
  const navigate = useNavigate();

  const [student_id, setStudentID] = useState("");
  const [advisor_id, setAdvisorID] = useState("");

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
        <h2>Fill The Requirements</h2>
        <input
          type="text"
          placeholder="StudentID"
          value={student_id}
          onChange={(e) => setStudentID(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="AdvisorID"
          value={advisor_id}
          onChange={(e) => setAdvisorID(e.target.value)}
          style={inputStyle}
          required
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:5000/link_Student_Advisor", {
                student_id,
                advisor_id,
              })
              .then((arg) => {
                if (arg.status === 200) {
                  alert("Linked Successfully");
                  navigate("/Admin");
                } else {
                  alert("Failed To Link");
                  navigate("/Admin");
                }
              });
          }}
          style={buttonStyle}
        >
          Link
        </button>
      </form>
    </div>
  );
};

export default AdminLinkStudentAdvisor;
